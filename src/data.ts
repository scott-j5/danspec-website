export const LOGO =
  'danspec-logo.svg'

const media = 'https://media.base44.com/images/public/6ae5ce3edc4eb029e688a22b'
const fill = (file: string, size: string) =>
  `${media}/${file}/v1/fill/${size},al_c,q_85,enc_auto/${file}`

export const images = {
  hero: 'fox-island-bridge-roadworks.jpg',
  //hero: fill('e78070ef4_generated_image.png', 'w_1940,h_901'),
  roads: fill('676690891_generated_image.png', 'w_900,h_560'),
  subdivision: 'murray-sound.jpg',
  // subdivision: fill('4bc11eef7_generated_image.png', 'w_900,h_560'),
  // drainage: fill('bd30d08e4_generated_image.png', 'w_900,h_620'),
  drainage: 'danspec-excavators.jpg',
  aggregate: fill('fe0d5e751_generated_image.png', 'w_900,h_560'),
}

export const phone = '0448 22 44 66'
export const phoneHref = 'tel:+61448224466'
export const email = 'info@danspec.com.au'
export const depot = '57 McMillan Rd, Echuca VIC 3564'
export const depotHref = 'https://maps.app.goo.gl/znrgbm37XahHPtx26'

export const nav = [
  { label: 'Capabilities', href: '#capabilities' },
  { label: 'Projects', href: '#projects' },
  { label: 'Method', href: '#method' },
  { label: 'Region', href: '#region' },
]

export const stats = [
  { value: '16+', label: 'Years in operation' },
  { value: '200+', label: 'Projects delivered' },
  { value: 'GPS', label: 'Equipped plant & Equipment' },
  { value: '3x', label: 'ISO Certified systems' },
]

export const compliance = [
  'ISO 9001 Quality',
  'ISO 45001 Safety',
  'ISO 14001 Environment',
  'VEDN prequalified',
  'Fully insured plant',
]

export const disciplines = [
  {
    index: '01',
    title: 'Roads, drainage & pavements',
    image: images.roads,
    alt: 'Paving machine laying fresh asphalt on a rural road at golden hour',
    body: 'Full pavement reconstruction, reseals and new sealed roads. Kerb and channel, table drains, culverts and trunk stormwater — built to council specification and handed over with survey, compaction and hold-point records.',
    points: [
      'Pavement reconstruction & stabilisation',
      'Kerb, channel & footpath construction',
      'Culverts & trunk stormwater',
    ],
  },
  {
    index: '02',
    title: 'Subdivisions & utility infrastructure',
    image: images.subdivision,
    alt: 'Aerial view of a new residential subdivision with freshly graded lots and new roads',
    body: 'Bulk and detailed earthworks through to authority handover: internal roads, stormwater, water and sewer reticulation, and lot servicing for residential, industrial and rural-residential estates.',
    points: [
      'Bulk & detailed earthworks',
      'Water & sewer reticulation',
      'Lot servicing & authority handover',
    ],
  },
]

export const plantList = [
  {
    title: 'Site cut & bulk earthworks',
    body: 'Cut to fill, batter works and material cartage with GPS-guided plant.',
  },
  {
    title: 'Concrete structures',
    body: 'Retaining walls, headwalls, pits and minor bridge works.',
  },
  {
    title: 'Excavation & trenching',
    body: 'Service crossings, under-boring and shoring in tight urban frontages.',
  },
  {
    title: 'Asphalt & concrete pavement',
    body: 'Basecourse, prime, seal and jointing held to compaction tolerance.',
  },
  {
    title: 'Maintenance & repairs',
    body: 'Pothole patching, drainage cleaning and unsealed road re-sheeting.',
  },
  {
    title: 'Survey & as-constructed',
    body: 'Set-out, levels, quality records and as-built documentation.',
  },
]

export const projects = [
  {
    tag: 'Roads & pavements',
    client: 'Macedon Ranges Shire · 2024',
    title: 'Kyneton–Redesdale Road rehabilitation',
    body: 'Full-depth reconstruction of a 6.4 km rural link, including widened shoulders, new table drains and guardrail reinstatement delivered under traffic.',
    image: images.roads,
    alt: 'Asphalt paver and roller reconstructing a rural road',
    metrics: [
      { value: '6.4km', label: 'Pavement rebuilt' },
      { value: '2,900t', label: 'Asphalt placed' },
    ],
  },
  {
    tag: 'Subdivisions',
    client: 'Private developer · 2023',
    title: 'Campbells Creek estate, stages 2–3',
    body: 'Civil works for 26 residential lots: bulk earthworks, internal road construction, stormwater, sewer and water reticulation through to authority handover.',
    image: images.subdivision,
    alt: 'Aerial view of graded lots and new roads in a subdivision',
    metrics: [
      { value: '14.2ha', label: 'Site works' },
      { value: '26', label: 'Lots serviced' },
    ],
  },
  {
    tag: 'Drainage & utilities',
    client: 'Strathbogie Shire · 2024',
    title: 'Nagambie flood relief drainage',
    body: 'New trunk stormwater and box culvert system relieving a known flood path through the township, with an upgraded outfall to the Goulburn.',
    image: images.drainage,
    alt: 'Precast concrete drainage pipes being installed in an excavated trench',
    metrics: [
      { value: '1.2km', label: 'New drainage line' },
      { value: '4,100m³', label: 'Excavated' },
    ],
  },
]

export const steps = [
  {
    title: 'Scope & investigation',
    body: 'We walk the site with you, test the ground, check levels and services, and price what is actually there — not what was assumed.',
  },
  {
    title: 'Program & mobilisation',
    body: 'A staged program with traffic management, permits and authority approvals locked in before plant arrives.',
  },
  {
    title: 'Delivery',
    body: 'One superintendent, weekly look-aheads and hold points witnessed with survey and compaction records as work proceeds.',
  },
  {
    title: 'Handover',
    body: 'As-constructed drawings, quality records and a defects period backed by a local crew that can be back on site in a day.',
  },
]

export const principles = [
  {
    title: 'Safety first, always',
    body: 'Every crew member inducted, every plant pre-started, every trench shored or battered. No exceptions for small jobs.',
  },
  {
    title: 'Quality that holds',
    body: 'Compaction tested on site, levels checked against design, and records handed over in the format your engineer expects.',
  },
  {
    title: 'Environmental care',
    body: 'Erosion and sediment controls maintained daily, imported material tracked, and cleared vegetation offset where required.',
  },
]

export const regionPoints = [
  'Local crews and local suppliers first — materials sourced within the region where specification allows.',
  'Two apprentices on the books every year, trained on survey, plant and quality testing.',
  "Working with each council's road management plan, not around it.",
]

export const towns = [
  'Echuca',
  'Moama',
  'Cohuna',
  'Kerang',
  'Elmore',
  'Bendigo',
  'Shepparton',
  'Deniliquin',
  'Numurkah',
  'Kyabram',
  'Rushworth',
  'Nagambie',
]

export const workTypes = [
  'Roads & pavements',
  'Drainage & stormwater',
  'Subdivision civil works',
  'VEDN Works',
  'Water & sewer infrastructure',
  'Maintenance & repairs',
]
