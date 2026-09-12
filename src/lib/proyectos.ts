/**
 * Proyectos reales de THIASA. Única fuente para la galería de la portada y
 * para la página /proyectos, que es la versión indexable: la galería abre
 * cada proyecto en una ventana emergente y ese texto no lo ve ni Google ni
 * la IA. Solo obras publicadas con permiso del cliente; sin ubicación, nombre
 * ni fecha porque no constan.
 */
export type Proyecto = {
  id: number;
  slug: string;
  title: string;
  category: string;
  /** Página de servicio a la que pertenece la obra. */
  servicio: { slug: string; nombre: string };
  image: string;
  gallery: string[];
  description: string;
  details: string[];
};

const INTEGRALES = { slug: "reformas-integrales", nombre: "Reformas integrales" };
const BANOS_COCINAS = { slug: "reformas-banos-cocinas", nombre: "Reformas de baños y cocinas" };

export const PROYECTOS: Proyecto[] = [
  {
    id: 1,
    slug: "reforma-integral-salon-led",
    title: "Reforma Integral Salón LED",
    category: "Reforma Integral",
    servicio: INTEGRALES,
    image: "/project-living-3.jpg",
    gallery: ["/project-living-3.jpg", "/project-living-4.jpg", "/project-living-5.jpg"],
    description:
      "Reforma integral de salón con iluminación LED perimetral indirecta. Suelo de madera natural, muebles a medida y distribución óptima del espacio.",
    details: [
      "Falso techo con iluminación LED perimetral",
      "Instalación suelo tarima roble",
      "Muebles blancos a medida",
      "Climatización y domótica",
    ],
  },
  {
    id: 2,
    slug: "cocina-barra-americana",
    title: "Cocina con Barra Americana",
    category: "Cocina",
    servicio: BANOS_COCINAS,
    image: "/project-kitchen-3.jpg",
    gallery: ["/project-kitchen-3.jpg", "/project-kitchen-4.jpg", "/project-kitchen-5.jpg"],
    description:
      "Cocina moderna con barra americana y pared de ladrillo visto original. Muebles en blanco mate, encimera de cuarzo y electrodomésticos integrados.",
    details: [
      "Pared de ladrillo caravista restaurada",
      "Barra americana con iluminación colgante",
      "Encimera cuarzo blanco nieves",
      "Alicatado gris perla satinado",
    ],
  },
  {
    id: 3,
    slug: "bano-espejo-led",
    title: "Baño con Espejo LED",
    category: "Baño",
    servicio: BANOS_COCINAS,
    image: "/project-bathroom-2.jpg",
    gallery: ["/project-bathroom-2.jpg", "/project-bathroom-1.jpg"],
    description:
      "Baño moderno con espejo circular retroiluminado LED. Suelo hidráulico geométrico, radiador toallero blanco y acabados premium.",
    details: [
      "Espejo LED circular de diseño",
      "Suelo hidráulico decorativo",
      "Radiador toallero moderno",
      "Mueble suspendido con cajones",
    ],
  },
  {
    id: 4,
    slug: "dormitorio-papel-pintado",
    title: "Dormitorio con Papel Pintado",
    category: "Reforma Integral",
    servicio: INTEGRALES,
    image: "/project-bedroom-2.jpg",
    gallery: ["/project-bedroom-2.jpg", "/project-bedroom-1.jpg"],
    description:
      "Habitación elegante con papel pintado decorativo en cabecero. Lámpara de diseño, suelo de madera y ambiente acogedor.",
    details: [
      "Papel pintado vinílico de diseño",
      "Lámpara colgante de diseño moderno",
      "Suelo laminado tono natural",
      "Molduras decorativas en techo",
    ],
  },
  {
    id: 5,
    slug: "pasillo-iluminacion-led",
    title: "Pasillo con Iluminación LED",
    category: "Reforma Integral",
    servicio: INTEGRALES,
    image: "/project-hallway-1.jpg",
    gallery: ["/project-hallway-1.jpg"],
    description:
      "Distribuidor empapelado y reforma completa con LED integrado en techo. Aprovechamiento máximo del espacio con muebles a medida.",
    details: [
      "Falso techo con ranuras LED",
      "Papel decorativo en paredes",
      "Suelo continuo de madera",
      "Muebles TV suspendidos",
    ],
  },
  {
    id: 6,
    slug: "cocina-papel-decorativo",
    title: "Cocina con Papel Decorativo",
    category: "Cocina",
    servicio: BANOS_COCINAS,
    image: "/project-kitchen-4.jpg",
    gallery: ["/project-kitchen-4.jpg", "/project-kitchen-5.jpg"],
    description:
      "Diseño único con barra y papel pintado decorativo floral. Combinación de ladrillo visto con elementos modernos y funcionales.",
    details: [
      "Papel pintado vinílico lavable",
      "Barra lacada blanco brillo",
      "Pared ladrillo caravista",
      "Lámparas colgantes de diseño",
    ],
  },
  {
    id: 7,
    slug: "cocina-blanca-madera",
    title: "Cocina Blanca y Madera",
    category: "Cocina",
    servicio: BANOS_COCINAS,
    image: "/project-kitchen-new-1.jpg",
    gallery: [
      "/project-kitchen-new-1.jpg",
      "/project-kitchen-new-2.jpg",
      "/project-kitchen-new-3.jpg",
      "/project-kitchen-new-4.jpg",
      "/project-kitchen-new-5.jpg",
    ],
    description:
      "Reforma de cocina luminosa combinando mobiliario blanco con encimera y frente de madera. Contrastes elegantes con grifería y fregadero en negro mate.",
    details: [
      "Mobiliario blanco mate minimalista",
      "Encimera y frontal acabado madera",
      "Grifería y fregadero negro mate",
      "Iluminación LED bajo muebles altos",
    ],
  },
];
