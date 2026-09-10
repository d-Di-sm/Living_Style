// ─────────────────────────────────────────────────────────────────────────────
// JOURNAL; editorial entries.
//
// Ascent uses the supplied essay by Alfredo Gómez (ascent phmc.pdf).
// Other entries: draft copy in the voice of the SOMA Living strategic proposal.
// Replace `excerpt` and block `text` values with final copy; layout adapts.
//
// Block types: 'paragraph' · 'quote' · 'image' ('h' | 'v') · 'note'
// ─────────────────────────────────────────────────────────────────────────────

export const articles = [
  {
    slug: 'ascent',
    category: 'Park Hyatt Mexico City',
    title: 'Ascent',
    author: 'Alfredo Gómez',
    date: 'September 2026',
    readTime: '2 min read',
    cover: { src: '/lifestyle/web/PHMC_IMG_Alfredo.JPG', orientation: 'v' },
    excerpt:
      'Above the nineteenth floor, Mexico City takes on a different rhythm. A Polanco resident reflects on architecture, hospitality, and the rare perspective of life above the city.',
    blocks: [
      { type: 'paragraph', text: 'There is a particular stillness that arrives above the nineteenth floor, the kind that only altitude and discretion can create together. Mexico City unfolds below in full view, its noise softened into something closer to texture, while inside, the light moves differently, unhurried, as if it too understood it had arrived somewhere rare.' },
      { type: 'paragraph', text: "A few blocks from the Bosque de Chapultepec, that rarity takes architectural form. It was here that Sordo Madaleno first gave Mexico City a vocabulary of glass, light, and proportion. This lineage did not simply build in Polanco but helped write its character. The firm's name is inseparable from the neighborhood's own evolution, each subsequent structure another sentence in a conversation that began decades ago and has never really paused." },
      { type: 'image', orientation: 'v', src: '/images/phase2.png' },
      { type: 'paragraph', text: "Park Hyatt Mexico City Polanco Residences continues that sentence. Conceived through the collaboration of SOMA and Sordo Madaleno, the building speaks a shared language of restraint and material honesty, contemporary in form yet unmistakably fluent in the district's own architectural dialect. Inside, personalized service and the hospitality the Park Hyatt name has long carried across the world are folded into daily life rather than reserved for special occasions." },
      { type: 'paragraph', text: "The view offers its own quiet proof of how rare this vantage truly is. From certain residences, the eye drifts past the treeline of Chapultepec and finds, unexpectedly, the silhouettes of giraffes moving through the park's zoo below, a detail so improbable it borders on the surreal. It is the kind of sight that reminds a resident this is not simply an apartment above a city, but a window onto something closer to wilderness, framed by architecture rather than distance." },
      { type: 'paragraph', text: "Twenty-seven homes rise above that view, each an expression of the same ambition. Residences range from 260 to 440 square meters, conceived with the generosity of space that Polanco's density rarely allows, culminating in an 850-square-meter penthouse that redefines scale itself in this part of the city. To live here is to be held to the same standard as the Park Hyatt guest: anticipated, understood, cared for before the need is spoken aloud." },
      { type: 'image', orientation: 'v', src: '/images/phase4.png', align: 'center' },
      { type: 'quote', text: 'This is not simply a residence in Polanco. It is Polanco, distilled into twenty-seven homes above the city it helped define, with a view no one quite expects.' },
    ],
  },
  // Formerly the second Living manifesto; moved to Entries
  {
    slug: 'hospitality-taught-residential-design',
    category: 'Entries',
    title: "Hospitality taught residential design something it didn't know it needed.",
    date: 'August 2026',
    readTime: '4 min read',
    cover: 'Villa_CDS_Terraza_05',
    excerpt:
      'Global hospitality brands are increasingly shaping how residential space is perceived. What they brought was not service. It was attention.',
    blocks: [
      { type: 'paragraph', text: 'For most of its history, residential design answered to the market. Hospitality answered to the guest. The difference produced two very different disciplines.' },
      { type: 'paragraph', text: 'A hotel is judged every single day, by every single person who walks through it. Nothing survives in hospitality that does not serve the person in the room. Residential design, protected by the permanence of ownership, never faced that daily verdict.' },
      { type: 'image', orientation: 'h', name: '2025_Park_Hyatt_CDMX_Drone_13', caption: 'Park Hyatt, Mexico City' },
      { type: 'quote', text: 'A hotel is built for everyone. A home is built for someone. A branded residence takes the discipline of the first and applies it to the second, until, for a select few, it stops being a product and becomes home.' },
      { type: 'paragraph', text: 'When hospitality entered the residential world, it brought its habits with it. Arrival became a sequence, not a door. Amenities became rituals, not lists. Maintenance became invisible. Service became architecture.' },
      { type: 'paragraph', text: 'The branded residence is often discussed as a financial instrument. That misses what actually changed. What changed is that someone finally asked, of a private home, the question hotels have always asked: how does this feel to the person inside it?' },
      { type: 'image', orientation: 'h', name: 'AnimaVillageA_0742', caption: 'Indoor and outdoor, without a seam' },
      { type: 'paragraph', layout: 'wide', text: 'SOMA builds with great hospitality houses because they share the same discipline of attention to detail. The collaboration is the point. The name is not the evidence; the work is.' },
      { type: 'note', text: 'Residential design, held to the standard of the guest. That is what hospitality taught it.' },
    ],
  },
  {
    slug: 'what-branded-actually-buys-you',
    category: 'Entries',
    title: 'What Branded Actually Buys You',
    date: 'August 2026',
    readTime: '6 min read',
    cover: '2025_Park_Hyatt_CDMX_Drone_19',
    excerpt:
      'The branded residence is usually explained as a premium. A name, a flag, a percentage over market. That explanation is convenient; and almost entirely wrong.',
    blocks: [
      { type: 'paragraph', text: 'What a brand actually buys you is a standard that survives the sales gallery. Long after the renders are forgotten, the operating manual remains. The brand is a contract about how the building will behave in year twelve.' },
      { type: 'image', orientation: 'h', name: 'AG_IMG_9820', caption: 'The standard, maintained daily' },
      { type: 'quote', text: 'The brand is not the name on the building. It is the discipline inside it.' },
      { type: 'paragraph', text: 'Consider what a hospitality operator actually does. It trains people. It audits itself. It replaces what wears before the resident notices wear. It holds a service culture in place across decades and changes of staff. No homeowners association, however well-intentioned, is built to do this.' },
      { type: 'paragraph', text: 'The market knows the brands. It does not always understand the author. Behind every serious branded residence stands a developer whose decisions (site, architect, program, proportions) precede the flag entirely. The brand certifies the standard. The developer creates the thing worth certifying.' },
      { type: 'image', orientation: 'h', name: 'AG_IMG_9708', caption: 'Cabo del Sol' },
      { type: 'paragraph', text: 'This is why the same flag can mark a great building in one city and an ordinary one in another. The variable is not the brand. The variable is the author.' },
      { type: 'paragraph', text: 'So what does branded actually buy you? Not a name. A verdict, renewed daily, that the building must remain worthy of it.' },
      { type: 'note', text: 'SOMA develops in collaboration with Park Hyatt and Soho House. The projects are the evidence.' },
    ],
  },
  {
    slug: 'the-second-home-that-isnt-a-vacation',
    category: 'Entries',
    title: "The Second Home That Isn't a Vacation",
    date: 'August 2026',
    readTime: '5 min read',
    cover: 'AG_IMG_9756',
    excerpt:
      'The second home used to be an interruption of life; two weeks a year, shutters closed in between. A generation of owners is quietly retiring that idea.',
    blocks: [
      { type: 'paragraph', text: 'A generation of owners is quietly retiring that idea. Work moved into the laptop. School calendars loosened. The distance between a life in Mexico City and a morning on the Pacific stopped being a journey and became a schedule.' },
      { type: 'image', orientation: 'h', name: 'AG_IMG_9570', caption: 'The Pacific, on a weekday' },
      { type: 'quote', text: 'The question is no longer where to spend a holiday. It is where a life is allowed to happen.' },
      { type: 'paragraph', text: 'The second home that emerges from this shift is not a vacation property. It is a second setting for an ongoing life, with real workdays, real routines, groceries rather than minibars. It must function on an ordinary Tuesday, which is a far higher standard than functioning in July.' },
      { type: 'paragraph', text: 'This changes what the architecture must do. Storage becomes serious. Light matters in every month, not one season. The kitchen is no longer a prop. And service (the quiet, daily kind that hospitality perfected) becomes the difference between a house that works and a house that waits.' },
      { type: 'image', orientation: 'v', name: 'AG_IMG_9892', caption: 'Rooms for ordinary days' },
      { type: 'paragraph', text: 'It also changes where. The new second home sits close to an airport with daily flights, inside a community that does not empty in the off-season, held by an operator who keeps the standard when the owner is away.' },
      { type: 'paragraph', text: 'A house that lives all year is a different asset, a different design problem, and a different promise. It is not a vacation. It is the rest of the life.' },
      { type: 'note', text: 'Observations from SOMA’s residential work between Mexico City and Los Cabos.' },
    ],
  },

  // ── Short-form field notes; one per project ───────────────────────────────
  {
    slug: 'how-to-use-a-firepit-correctly',
    category: 'Soho Residences Los Cabos',
    title: 'How to Use a Firepit Correctly',
    date: 'August 2026',
    readTime: '2 min read',
    cover: 'terrace2',
    excerpt:
      "Most people light a firepit at sunset and let it burn until they're tired. At Cabo del Sol, where the desert drops ten, sometimes fifteen degrees the moment the sun clears the ridge, the better instinct is to wait.",
    blocks: [
      { type: 'paragraph', text: "Light it twenty minutes after the sky has gone dark, not before. The point isn't ambiance, it's timing, matching the fire to the moment the air actually turns, so the warmth means something instead of competing with a sun that's still doing the work for you." },
      { type: 'image', orientation: 'h', name: 'AG_IMG_9713', caption: 'The desert, the moment the air turns' },
      {
        type: 'list',
        title: 'A few rules worth keeping',
        items: [
          'Keep it low and wide rather than tall. A firepit built for conversation, not a bonfire.',
          'Face the seating toward the course, not toward each other. The best conversations here happen looking at something, not just at one another.',
          'Let it burn down to coals before anyone leaves. A firepit abandoned mid-blaze is a wasted evening.',
        ],
      },
    ],
  },
  {
    slug: 'a-small-ritual-for-whale-season',
    category: 'Park Hyatt Cabo del Sol Residences',
    title: 'A Small Ritual for Whale Season',
    date: 'August 2026',
    readTime: '2 min read',
    cover: 'AG_IMG_9570',
    excerpt:
      'Between December and April, gray and humpback whales move close enough to this coastline to be visible from a villa without binoculars, though most people never learn when or where to look.',
    blocks: [
      { type: 'paragraph', text: 'The best hour is early, just after sunrise, before the wind picks up and the water loses its stillness. Coffee on the terrace facing the water, not the pool, and patience measured in minutes, not seconds. A whale surfacing rarely announces itself twice in the same place.' },
      { type: 'image', orientation: 'v', name: 'AG_IMG_9924', caption: 'The terrace facing the water' },
      { type: 'paragraph', text: 'This is a small thing, but it is, in its way, the entire argument for the house. A property built around a duality of land and sea only earns that description if someone is actually outside, facing the water, often enough to notice when the sea does something worth noticing.' },
    ],
  },
  {
    slug: 'how-to-walk-polanco-in-the-morning',
    category: 'Park Hyatt Mexico City',
    title: 'How to Walk Polanco in the Morning, Not the Evening',
    date: 'August 2026',
    readTime: '2 min read',
    cover: { src: '/lifestyle/web/PHMC_IMG_Tamayo.jpg', orientation: 'h' },
    excerpt:
      'Most people experience this neighborhood at night, restaurant to restaurant, engineered for it. The morning version is a different city, quieter, better lit, and almost entirely overlooked.',
    blocks: [
      { type: 'paragraph', text: "Leave before eight. The jacaranda trees along Avenida Presidente Masaryk hold their color best in early light, before the heat flattens it by midday. Walk without a destination for the first twenty minutes. A neighborhood built for evenings rewards anyone willing to see it before it's performing." },
      { type: 'image', orientation: 'h', src: '/lifestyle/web/PHMC_IMG_Aerea_01.jpg', caption: 'Polanco, before eight' },
      { type: 'paragraph', text: 'Coffee last, not first. Everything tastes better as a reward for having already walked somewhere, rather than as fuel to start.' },
    ],
  },
]
