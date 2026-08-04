// ─────────────────────────────────────────────────────────────────────────────
// CONVERSATIONS — interviews with architects, designers, and developers.
//
// Portraits are temporary placeholders from the curated lifestyle set until
// real photography exists. Replace `portrait: src('…')` with the final
// portrait path when the images arrive.
// ─────────────────────────────────────────────────────────────────────────────
import { src } from './lifestyle'

export const conversations = [
  {
    slug: 'hospitality-and-the-future-of-residential-living',
    title: 'Hospitality and the Future of Residential Living',
    guest: 'Guest to be announced',
    role: 'Hospitality Leadership',
    intro:
      'A conversation on what happens when the standards of the world’s great hotels move into private homes — and what residential design still has to learn.',
    portrait: src('AG_IMG_9836'),
    comingSoon: true,
  },
  {
    slug: 'what-a-developer-sees-that-an-architect-doesnt',
    title: "What a Developer Sees That an Architect Doesn't",
    guest: 'Guest to be announced',
    role: 'Development & Architecture',
    intro:
      'Two disciplines, one building. On the decisions made before the first drawing — and the ones that only appear after the last resident moves in.',
    portrait: src('AG_IMG_9857'),
    comingSoon: true,
  },
]
