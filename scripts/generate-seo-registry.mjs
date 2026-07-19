import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BLOG_DIR = path.join(__dirname, '..', 'content', 'blog');
const REGISTRY_PATH = path.join(__dirname, '..', 'docs', 'seo', 'registro-publicaciones.csv');

// Columns requested
const HEADERS = [
  'id',
  'titulo',
  'slug',
  'url',
  'descripcion',
  'keyword_principal',
  'cluster',
  'pagina_pilar',
  'status',
  'fecha_publicacion',
  'fecha_actualizacion',
  'ruta_archivo'
];

// Heuristics for determining the pillar page of a cluster or post
function getPillarPage(servicio_asociado, cluster) {
  if (servicio_asociado) {
    return `/servicios/${servicio_asociado}`;
  }
  
  const clusterStr = String(cluster || '').toLowerCase();
  if (
    clusterStr.includes('reformas-integrales') ||
    clusterStr.includes('precios') ||
    clusterStr.includes('permisos') ||
    clusterStr.includes('consejos') ||
    clusterStr.includes('vivienda') ||
    clusterStr.includes('zonas')
  ) {
    return '/servicios/reformas-integrales';
  }
  if (
    clusterStr.includes('banos') ||
    clusterStr.includes('cocinas') ||
    clusterStr.includes('comparativas') ||
    clusterStr.includes('errores-frecuentes')
  ) {
    return '/servicios/reformas-banos-cocinas';
  }
  if (clusterStr.includes('locales')) {
    return '/servicios/reformas-locales-comerciales';
  }
  if (clusterStr.includes('materiales') || clusterStr.includes('acabados')) {
    return '/servicios/pintura-pladur-albanileria';
  }
  if (clusterStr.includes('carpinteria')) {
    return '/servicios/carpinteria-madera-aluminio';
  }
  if (clusterStr.includes('instalaciones') || clusterStr.includes('fontaneria')) {
    return '/servicios/instalaciones-electricas-fontaneria';
  }
  return '/servicios/reformas-integrales'; // fallback
}

// Simple RFC 4180 compliant CSV parser
function parseCSV(content) {
  const lines = [];
  let row = [];
  let inQuotes = false;
  let currentValue = '';

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (inQuotes) {
      if (char === '"') {
        if (nextChar === '"') {
          currentValue += '"';
          i++; // skip next quote
        } else {
          inQuotes = false;
        }
      } else {
        currentValue += char;
      }
    } else {
      if (char === '"') {
        inQuotes = true;
      } else if (char === ',') {
        row.push(currentValue.trim());
        currentValue = '';
      } else if (char === '\n' || char === '\r') {
        if (char === '\r' && nextChar === '\n') {
          i++; // skip \n
        }
        row.push(currentValue.trim());
        if (row.length > 1 || row[0] !== '') {
          lines.push(row);
        }
        row = [];
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
  }
  if (currentValue !== '' || row.length > 0) {
    row.push(currentValue.trim());
    lines.push(row);
  }
  return lines;
}

function escapeCSV(val) {
  if (val === undefined || val === null) return '';
  let str = String(val).trim();
  if (str.includes(',') || str.includes('"') || str.includes('\n') || str.includes('\r')) {
    str = '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

function serializeCSV(headers, rows) {
  const headerLine = headers.join(',');
  const rowLines = rows.map(row => headers.map(h => escapeCSV(row[h])).join(','));
  return [headerLine, ...rowLines].join('\n') + '\n';
}

function run() {
  console.log('Iniciando la generación del registro de publicaciones SEO...');
  
  // 1. Read existing registry if it exists
  const existingRecordsMap = new Map();
  if (fs.existsSync(REGISTRY_PATH)) {
    try {
      const existingContent = fs.readFileSync(REGISTRY_PATH, 'utf8');
      const parsedLines = parseCSV(existingContent);
      if (parsedLines.length > 0) {
        const fileHeaders = parsedLines[0];
        for (let i = 1; i < parsedLines.length; i++) {
          const rowData = parsedLines[i];
          const record = {};
          fileHeaders.forEach((h, idx) => {
            record[h] = rowData[idx] || '';
          });
          if (record.slug) {
            existingRecordsMap.set(record.slug, record);
          }
        }
        console.log(`Leídos ${existingRecordsMap.size} registros existentes del CSV.`);
      }
    } catch (err) {
      console.warn('Advertencia: No se pudo leer el registro CSV existente o está corrupto:', err.message);
    }
  }

  // 2. Read markdown files from content/blog/
  if (!fs.existsSync(BLOG_DIR)) {
    console.error(`Error: El directorio de blog ${BLOG_DIR} no existe.`);
    process.exit(1);
  }

  const files = fs.readdirSync(BLOG_DIR);
  const markdownFiles = files.filter(f => f.endsWith('.md') && f !== 'README.md');
  console.log(`Encontrados ${markdownFiles.length} archivos de blog para procesar.`);

  const newRecords = [];
  const processedSlugs = new Set();

  for (const fileName of markdownFiles) {
    const filePath = path.join(BLOG_DIR, fileName);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    const slug = data.slug || fileName.replace(/\.md$/, '');
    const relativePath = path.relative(path.join(__dirname, '..'), filePath);

    // Build the record from frontmatter, falling back to existing CSV record or defaults
    const existing = existingRecordsMap.get(slug) || {};

    const record = {
      id: String(data.id || existing.id || '').trim(),
      titulo: String(data.title || existing.titulo || '').trim(),
      slug: slug,
      url: `/blog/${slug}`,
      descripcion: String(data.description || existing.descripcion || '').trim(),
      keyword_principal: String(data.keyword_principal || existing.keyword_principal || '').trim(),
      cluster: String(data.cluster || existing.cluster || '').trim(),
      pagina_pilar: getPillarPage(data.servicio_asociado, data.cluster || existing.cluster),
      status: String(data.estado || existing.status || 'pendiente').trim(),
      fecha_publicacion: String(data.fecha || existing.fecha_publicacion || '').trim(),
      fecha_actualizacion: String(data.fecha_actualizacion || existing.fecha_actualizacion || data.fecha || '').trim(),
      ruta_archivo: relativePath
    };

    newRecords.push(record);
    processedSlugs.add(slug);
  }

  // 3. Keep rows from the existing registry that don't have corresponding physical files
  for (const [slug, existingRecord] of existingRecordsMap.entries()) {
    if (!processedSlugs.has(slug)) {
      console.log(`Preservando registro sin archivo físico asociado para slug: "${slug}"`);
      newRecords.push(existingRecord);
    }
  }

  // Sort newRecords by id (numerically if possible, else alphabetically)
  newRecords.sort((a, b) => {
    const idA = parseInt(a.id, 10);
    const idB = parseInt(b.id, 10);
    if (!isNaN(idA) && !isNaN(idB)) {
      return idA - idB;
    }
    return String(a.id).localeCompare(String(b.id));
  });

  // 4. Ensure target directory exists and write CSV
  const registryDir = path.dirname(REGISTRY_PATH);
  if (!fs.existsSync(registryDir)) {
    fs.mkdirSync(registryDir, { recursive: true });
  }

  const csvOutput = serializeCSV(HEADERS, newRecords);
  fs.writeFileSync(REGISTRY_PATH, csvOutput, 'utf8');

  console.log(`Registro guardado exitosamente en: ${REGISTRY_PATH}`);
  console.log(`Total de registros escritos: ${newRecords.length}`);
}

run();
