/**
 * Validador SEO sobre el HTML ya compilado.
 *
 * Comprueba lo que se rompió una vez y no debería volver a romperse. Trabaja
 * sobre el resultado del build, no sobre el código fuente, porque el título que
 * ve Google no es el de los metadatos: los layouts le añaden el sufijo de marca
 * y esa suma es la que se pasa de largo.
 *
 * Uso:  npm run seo:check          (falla con código 1 si hay errores)
 *       SEO_CHECK=warn npm run …   (informa pero no bloquea el despliegue)
 */
import fs from 'fs';
import path from 'path';

/* ── Ajustes por proyecto ───────────────────────────────────────────────── */
const CONFIG = {
  // Carpeta del build donde viven los .html. Se prueba en orden.
  buildDirs: ['.next/server/app', 'dist'],
  // Ficheros de sitemap posibles, relativos a la raíz del proyecto.
  sitemaps: ['.next/server/app/sitemap.xml.body', 'public/sitemap.xml', 'dist/sitemap-0.xml'],
  // Rutas que nunca deben indexarse ni aparecer en el sitemap.
  legales: /(aviso-legal|avisos-legales|politica|privacidad|cookies)/,
  maxTitulo: 60,
  maxDescripcion: 160,
};

const RAIZ = process.cwd();
const soloAviso = process.env.SEO_CHECK === 'warn';
const errores = [];
const avisos = [];

/* ── Utilidades ─────────────────────────────────────────────────────────── */
function buscarHtml(dir) {
  const salida = [];
  const recorrer = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) recorrer(p);
      else if (e.name.endsWith('.html')) salida.push(p);
    }
  };
  recorrer(dir);
  return salida;
}

const extraer = (html, re) => (html.match(re) || [])[1] ?? null;

/** Ruta pública a partir del fichero del build. */
let buildDirLen = 0;
const rutaDe = (fichero) =>
  fichero.slice(buildDirLen).replace(/\.html$/, '').replace(/\/index$/, '') || '/';

/* ── Carga de páginas ───────────────────────────────────────────────────── */
const buildDir = CONFIG.buildDirs
  .map((d) => path.join(RAIZ, d))
  .find((d) => fs.existsSync(d));

if (!buildDir) {
  console.error('✗ No hay build. Ejecuta `npm run build` antes de `seo:check`.');
  process.exit(1);
}

buildDirLen = buildDir.length;

const paginas = [];
for (const fichero of buscarHtml(buildDir)) {
  const html = fs.readFileSync(fichero, 'utf8');
  const titulo = extraer(html, /<title>([^<]*)<\/title>/);

  // Fuera: páginas de error y stubs de redirección (no son páginas reales).
  if (!titulo || /^(404|500)/.test(titulo)) continue;
  if (/http-equiv="refresh"/i.test(html)) continue;
  if (/^\/(_not-found|_global-error|404|500)$/.test(rutaDe(fichero))) continue;

  const ruta = rutaDe(fichero);
  const canonical = extraer(html, /<link rel="canonical" href="([^"]*)"/);

  paginas.push({
    ruta,
    titulo,
    // Un alias declara como canónica otra URL. Comparte título a propósito.
    esAlias: Boolean(canonical) && (canonical.replace(/^https?:\/\/[^/]+/, '') || '/').replace(/\/$/, '') !== ruta,
    descripcion: extraer(html, /<meta name="description" content="([^"]*)"/),
    robots: extraer(html, /<meta name="robots" content="([^"]*)"/) ?? '',
    enlaces: [...html.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]),
  });
}

if (!paginas.length) {
  console.error(`✗ No se encontró ninguna página en ${buildDir}.`);
  process.exit(1);
}

/* ── 1. Longitud de título ──────────────────────────────────────────────── */
for (const p of paginas) {
  if ([...p.titulo].length > CONFIG.maxTitulo) {
    errores.push(
      `título de ${[...p.titulo].length} caracteres en ${p.ruta} (máx. ${CONFIG.maxTitulo}) — Google lo corta\n      ${p.titulo}`,
    );
  }
}

/* ── 2. Títulos duplicados ──────────────────────────────────────────────── */
const porTitulo = new Map();
for (const p of paginas) {
  if (p.esAlias) continue;
  if (!porTitulo.has(p.titulo)) porTitulo.set(p.titulo, []);
  porTitulo.get(p.titulo).push(p.ruta);
}
for (const [titulo, rutas] of porTitulo) {
  if (rutas.length > 1) {
    errores.push(`título repetido en ${rutas.length} páginas: ${rutas.join(', ')}\n      ${titulo}`);
  }
}

/* ── 3. Descripciones ───────────────────────────────────────────────────── */
for (const p of paginas) {
  if (!p.descripcion) {
    errores.push(`sin meta description: ${p.ruta}`);
  } else if ([...p.descripcion].length > CONFIG.maxDescripcion) {
    errores.push(
      `descripción de ${[...p.descripcion].length} caracteres en ${p.ruta} (máx. ${CONFIG.maxDescripcion})`,
    );
  }
}

/* ── 4. Las páginas legales no se indexan ───────────────────────────────── */
for (const p of paginas) {
  if (CONFIG.legales.test(p.ruta) && !/noindex/.test(p.robots)) {
    errores.push(`página legal indexable: ${p.ruta} (robots: "${p.robots || 'sin meta'}")`);
  }
}

/* ── 5. Las legales tampoco van en el sitemap ───────────────────────────── */
const sitemap = CONFIG.sitemaps
  .map((s) => path.join(RAIZ, s))
  .find((s) => fs.existsSync(s));
if (sitemap) {
  const xml = fs.readFileSync(sitemap, 'utf8');
  for (const loc of [...xml.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1])) {
    const ruta = loc.replace(/^https?:\/\/[^/]+/, '') || '/';
    if (CONFIG.legales.test(ruta)) {
      errores.push(`página legal en el sitemap: ${ruta} (lleva noindex; es la señal contraria)`);
    }
  }
} else {
  avisos.push('no se localizó el sitemap; no se comprobaron sus URLs');
}

/* ── 6. Enlaces internos que no llevan a ninguna página ─────────────────── */
const existen = new Set(paginas.map((p) => p.ruta));
const rotos = new Map();
for (const p of paginas) {
  for (const bruto of p.enlaces) {
    const destino = bruto.length > 1 ? bruto.replace(/\/$/, '') : '/';
    if (existen.has(destino)) continue;
    // Ficheros servidos tal cual (imágenes, PDF, feeds, manifests…) no son páginas.
    if (/\.[a-z0-9]{2,12}$/i.test(destino)) continue;
    if (!rotos.has(destino)) rotos.set(destino, new Set());
    rotos.get(destino).add(p.ruta);
  }
}
for (const [destino, desde] of rotos) {
  errores.push(
    `enlace interno sin página destino: ${destino} (desde ${[...desde].slice(0, 3).join(', ')})`,
  );
}

/* ── Resultado ──────────────────────────────────────────────────────────── */
console.log(`\nseo:check — ${paginas.length} páginas analizadas en ${path.relative(RAIZ, buildDir)}\n`);
for (const a of avisos) console.log(`  ! ${a}`);

if (!errores.length) {
  console.log('  ✓ títulos, descripciones, páginas legales y enlaces internos: correcto\n');
  process.exit(0);
}

for (const e of errores) console.log(`  ✗ ${e}`);
console.log(`\n  ${errores.length} problema(s).`);

if (soloAviso) {
  console.log('  SEO_CHECK=warn: no se bloquea el despliegue.\n');
  process.exit(0);
}
console.log('  Corrígelos, o despliega igualmente con SEO_CHECK=warn si hay urgencia.\n');
process.exit(1);
