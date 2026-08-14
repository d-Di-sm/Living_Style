// ─────────────────────────────────────────────────────────────────────────────
// Editorial image system; /public/lifestyle
//
// CURATED SET (Aug 2026). The full archive holds ~245 photographs; only the
// strongest 51 are published to /lifestyle/web/ (EXIF-corrected, max 1800px).
// To change the selection, edit CURATED in scratchpad optimize.py; or ask;
// then update this manifest. Casual phone shots (people, cars, close-ups of
// food) were deliberately excluded from the editorial surfaces.
//
// Collections:
//   AG_IMG_*        ; professional Cabo del Sol shoot (coast, pergolas, dusk palms)
//   AnimaVillageA_*; timber corridors, aerial pools, stairways
//   2025_*Drone_*   ; Park Hyatt CDMX construction aerials
//   Villa_CDS_*     ; villa terraces
// ─────────────────────────────────────────────────────────────────────────────

const WEB = '/lifestyle/web'

// Ordered strongest-first within each orientation.
const HORIZONTAL = [
  'AG_IMG_9725',                    // palm against the Pacific at dusk
  'AnimaVillageA_0817',             // pergola, pool, ocean horizon
  '2025_Park_Hyatt_CDMX_Drone_04',  // city aerial, Polanco
  'AG_IMG_9919',                    // terrace panorama over the bay
  'AG_IMG_9713',                    // pergola geometry vs deep blue
  'AG_IMG_9708',                    // beam shadows, golden hour
  'AG_IMG_9756',                    // pool loungers, agave
  'AG_IMG_9599',                    // beach cove, rocks and sand
  'VOYV8653',                       // desert bay, catamaran on turquoise water
  'terrace2',                       // villa great room, sheers and beams (render)
  'Villa_Double_Bedroom',           // villa bedroom in warm timber (render)
  '2025_Park_Hyatt_CDMX_Drone_13',  // tower rising, city
  'AG_IMG_9820',                    // fluted wall, raking shadows
  'AG_IMG_9859',                    // chevron pergola vs sky
  'AnimaVillageA_0794',             // aerial pool in sand garden
  'AnimaVillageA_0742',             // timber corridor to the sea
  'AG_IMG_9661',                    // slatted wall, desert planting
  'AG_IMG_9684',                    // ribbed concrete texture
  'AG_IMG_9584',                    // sculpted coastal rocks
  'AG_IMG_9570',                    // open sea horizon
  '2025_Park_Hyatt_CDMX_Drone_19',  // skyline through haze
  'AG_IMG_9628',                    // cantilevered volumes vs sky
  'Villa_CDS_Terraza_05',           // terrace lounge under pergola
]

const VERTICAL = [
  'A_01',               // pebbles and coral, tide line
  'PHMC_IMG_2945',      // jacaranda in bloom against the PHMC tower
  'A_02',               // Sordo Madaleno tote and coffee on sand
  'A_03',               // poolside daybed, raking shadow
  'AG_IMG_9716',        // pergola shadow, vertical
  'AG_IMG_9634',        // patio light, yucca
  'AG_IMG_9836',        // corridor opening to the ocean
  'AG_IMG_9824',        // colonnade passage
  'AG_IMG_9892',        // bedroom framing a lounger and sea
  'AG_IMG_9908',        // palms over the bay
  'AG_IMG_9857',        // sand-toned stairway
  'AnimaVillageA_0024', // travertine stairs
  'AnimaVillageA_1004', // pergola against blue
  'AG_IMG_9648',        // cactus courtyard
  'AG_IMG_9651',        // plunge pool and boulder
  'AG_IMG_9668',        // pool edge, cactus
  'AG_IMG_9670',        // stone bath, palm shadow
  'AG_IMG_9718',        // rock in raked gravel
  'AG_IMG_9719',        // lone palm at dusk
  'AG_IMG_9728',        // palm and sea, vertical
  'AG_IMG_9749',        // daybeds under cactus
  'AG_IMG_9805',        // terrace sofas
  'AG_IMG_9819',        // shadow stripes on steps
  'AG_IMG_9862',        // striped shadow texture
  'AG_IMG_9915-2',      // shutters and branches
  'AG_IMG_9924',        // beams, pool, palm
  'AG_IMG_9577',        // surf on dark rock
  'AG_IMG_9625',        // brise-soleil from below
  'AG_IMG_9674',        // terrace sofa detail
  'AG_IMG_9653',        // arch, cactus, verticals
  'AnimaVillageA_0157', // fluted timber wall
  'AnimaVillageA_0776', // corridor perspective
  'AnimaVillageA_0854', // shaded entry steps
  'AnimaVillageA_0788', // pool from above, golf and palms
  'Villa_CDS_Exterior_05',          // stepped light passage
  'AnimaVillage_VirroyLola_0043',   // Ánima Village, Virrey & Lola
  'AnimaVillage_VirroyLola_0012',   // Ánima Village, Virrey & Lola
  'AnimaVillageA_1105',             // Ánima Village
]

const ORIENTATION = Object.fromEntries([
  ...HORIZONTAL.map(n => [n, 'h']),
  ...VERTICAL.map(n => [n, 'v']),
])

export const src = (name) => `${WEB}/${name}.jpg`
export const img = (name) => ({ src: src(name), orientation: ORIENTATION[name] ?? 'h' })

export const lifestyleImages = [...HORIZONTAL, ...VERTICAL].map(img)
export const horizontal = HORIZONTAL.map(img)
export const vertical   = VERTICAL.map(img)

// ── The cover sequence; one image per scroll “page” ─────────────────────────
export const heroImages = [
  img('AG_IMG_9725'),                    // dusk palm, the coast
  img('AnimaVillageA_0817'),             // the architecture
  img('2025_Park_Hyatt_CDMX_Drone_04'),  // the city
]

// ── Rotating selector ────────────────────────────────────────────────────────
// Deterministic interleaved walk: consecutive calls never return the same
// image, and a given seed always produces the same sequence (nothing random
// at render time; no CLS between renders).
function coprimeStep(len) {
  for (const s of [7, 11, 13, 17, 19, 23]) if (len % s !== 0) return s
  return 1
}

function makePicker(pool) {
  const step = coprimeStep(pool.length)
  return (seed = 0, count = 1) => {
    const out = []
    for (let i = 0; i < count; i++) {
      out.push(pool[(seed * step + i * step) % pool.length])
    }
    return count === 1 ? out[0] : out
  }
}

export const pickHorizontal = makePicker(horizontal)
export const pickVertical   = makePicker(vertical)
export const pickAny        = makePicker(lifestyleImages)
