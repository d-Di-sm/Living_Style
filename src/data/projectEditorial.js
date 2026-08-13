// ─────────────────────────────────────────────────────────────────────────────
// WORK; editorial narrative per project (keyed by project id from projects.js)
//
// DRAFT COPY; narrative first, information second. Replace `standfirst` and
// `paragraphs` with final editorial texts; the layout adapts.
// ─────────────────────────────────────────────────────────────────────────────

export const projectEditorial = {
  // Soho Residences Los Cabos
  1: {
    slug: 'soho-residences-los-cabos',
    name: 'Soho Residences Los Cabos',
    location: 'Cabo del Sol, Los Cabos',
    architecture: 'Architecture by SOMA',
    collaboration: 'In collaboration with Soho House',
    heroImage: '/lifestyle/web/SR_Casita.jpg',
    standfirst:
      'The first residential offering by Soho House. A community conceived for people who carry their life with them; and expect the house to keep up.',
    paragraphs: [
      'Soho House built its reputation on a simple observation: creative people gather differently. The rooms that hold them must be informal without being casual, designed without being decorated.',
      'Bringing that sensibility to the coast of Cabo del Sol, SOMA and Sordo Madaleno composed a collection of residences, Casitas, and Casonas where the architecture defers to the landscape and the life inside it; contemporary volumes, seamless indoor-outdoor living, and the curated hospitality of the House.',
      'It is not a resort with homes attached. It is a neighborhood that happens to have a club at its heart.',
    ],
  },

  // Park Hyatt Cabo Del Sol Residences
  2: {
    slug: 'park-hyatt-cabo-del-sol',
    name: 'Park Hyatt Cabo Del Sol Residences',
    location: 'Cabo del Sol, Los Cabos',
    architecture: 'Architecture by SOMA',
    collaboration: 'In collaboration with Park Hyatt',
    heroImage: '/lifestyle/web/Villa_Double_Bedroom.jpg',
    standfirst:
      'Eleven residences on the edge of the Pacific. A study in restraint, held to the quietest standard in hospitality.',
    paragraphs: [
      'Park Hyatt has always been the least loud of the great luxury flags; a brand that trusts proportion, material, and service to speak for it. The residences at Cabo del Sol are composed in the same register.',
      'Set within the coastal landscape, each home expresses contemporary architecture and seamless indoor-outdoor living, with the signature hospitality of Park Hyatt operating quietly underneath; present everywhere, visible almost nowhere.',
      'A limited collection, by intention. Eleven residences, three typologies, one horizon.',
    ],
  },

  // Park Hyatt Mexico City Polanco Residences
  3: {
    slug: 'park-hyatt-polanco',
    name: 'Park Hyatt Mexico City Polanco Residences',
    location: 'Polanco, Mexico City',
    architecture: 'Architecture by SOMA',
    collaboration: 'In collaboration with Park Hyatt',
    heroImage: '/lifestyle/web/PHMC_Renders02.jpg',
    standfirst:
      'In the heart of Polanco, a vertical neighborhood where the standards of Park Hyatt meet the daily life of the city.',
    paragraphs: [
      'Polanco is where contemporary Mexico City concentrates; culture, commerce, and the long tradition of Sordo Madaleno architecture that shaped the district itself.',
      'Park Hyatt Mexico City Residences continues that lineage: contemporary architecture, personalized service, and renowned hospitality, crafted by SOMA and Sordo Madaleno to elevate the everyday. Residences range from 260 to 440 square meters, crowned by an 850-square-meter penthouse.',
      'Twenty-seven homes above the city, held to the standard of the guest.',
    ],
  },
}

// slug → id lookup for routing
export const projectSlugToId = Object.fromEntries(
  Object.entries(projectEditorial).map(([id, p]) => [p.slug, Number(id)])
)
