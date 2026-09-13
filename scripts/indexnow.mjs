/**
 * Avisa a Bing —y con él a Yandex, Seznam, Naver y los demás de IndexNow— de
 * las URLs nuevas o cambiadas, para que las visiten en minutos y no en días.
 * Google no usa IndexNow: allí sigue siendo Search Console.
 *
 *   npm run indexnow                  → todas las URLs del sitemap de producción
 *   npm run indexnow -- /pagina-nueva /otra-pagina
 *                                     → solo esas, después de publicarlas
 *
 * **Se lanza después del despliegue, nunca antes**: Bing entra a mirar en
 * cuanto recibe el aviso, y si la página aún no está, se lleva un 404.
 *
 * La clave no es secreta: es pública por diseño. Bing comprueba que la web es
 * nuestra pidiendo `/<clave>.txt`, que está en `public/` y dice la clave. Si
 * se cambia aquí, se cambia el archivo con ella.
 *
 * La primera vez, con la clave recién publicada, IndexNow tarda unos minutos
 * en darla por buena: si contesta que la está comprobando, basta con repetir.
 *
 * Lo que llega se ve en Bing Webmaster Tools → IndexNow.
 */
import { existsSync, readFileSync } from 'node:fs'
import { join } from 'node:path'

const CLAVE = 'a50497523083c078875dd36f7c602b9d'
const SITIO = 'https://www.thiasa.es'
const SITEMAP = `${SITIO}/sitemap.xml`
const HOST = new URL(SITIO).host
const UBICACION_CLAVE = `${SITIO}/${CLAVE}.txt`
/** El máximo que admite IndexNow por petición. */
const POR_ENVIO = 10_000

const archivoClave = join(import.meta.dirname, '..', 'public', `${CLAVE}.txt`)
if (!existsSync(archivoClave) || readFileSync(archivoClave, 'utf8').trim() !== CLAVE) {
  console.error(`public/${CLAVE}.txt no existe o no contiene la clave`)
  process.exit(1)
}

/* Sin la clave publicada, IndexNow contesta 403 y el aviso se pierde. */
const publicada = await fetch(UBICACION_CLAVE)
if (!publicada.ok || (await publicada.text()).trim() !== CLAVE) {
  console.error(`${UBICACION_CLAVE} no sirve la clave (${publicada.status}). ¿Está desplegada?`)
  process.exit(1)
}

/** Las URLs de un sitemap; si es un índice de sitemaps, las de cada hijo. */
async function urlsDelSitemap(url) {
  const respuesta = await fetch(url)
  if (!respuesta.ok) throw new Error(`${url} respondió ${respuesta.status}`)
  const xml = await respuesta.text()
  const locs = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/g)].map((m) => m[1])
  if (!xml.includes('<sitemapindex')) return locs
  return (await Promise.all(locs.map(urlsDelSitemap))).flat()
}

const pedidas = process.argv.slice(2)
const urls = pedidas.length
  ? pedidas.map((p) => new URL(p, SITIO).href)
  : await urlsDelSitemap(SITEMAP)

/* IndexNow rechaza el envío entero (422) si una sola URL es de otro host. */
const ajenas = urls.filter((u) => new URL(u).host !== HOST)
if (ajenas.length) {
  console.error(`No son de ${HOST}: ${ajenas.join(', ')}`)
  process.exit(1)
}

for (let i = 0; i < urls.length; i += POR_ENVIO) {
  const lote = urls.slice(i, i + POR_ENVIO)
  const respuesta = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host: HOST, key: CLAVE, keyLocation: UBICACION_CLAVE, urlList: lote }),
  })
  /* 200 y 202 son buenas: 202 es «recibido, la clave se comprueba luego». */
  if (respuesta.status !== 200 && respuesta.status !== 202) {
    const cuerpo = await respuesta.text()
    if (cuerpo.includes('SiteVerificationNotCompleted')) {
      console.error('IndexNow aún está comprobando la clave. Vuelve a lanzarlo en unos minutos.')
      process.exit(1)
    }
    console.error(`IndexNow respondió ${respuesta.status}: ${cuerpo}`)
    process.exit(1)
  }
  console.log(`${lote.length} URL avisadas (${respuesta.status})`)
}
