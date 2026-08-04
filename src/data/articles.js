// ─────────────────────────────────────────────────────────────────────────────
// JOURNAL — editorial entries.
//
// DRAFT COPY — written in the voice of the SOMA Living strategic proposal.
// Replace `excerpt` and block `text` values with final copy; layout adapts.
//
// Block types: 'paragraph' · 'quote' · 'image' ('h' | 'v') · 'note'
// ─────────────────────────────────────────────────────────────────────────────

export const articles = [
  {
    slug: 'what-branded-actually-buys-you',
    category: 'Entries',
    title: 'What Branded Actually Buys You',
    date: 'August 2026',
    readTime: '6 min read',
    cover: '2025_Park_Hyatt_CDMX_Drone_19',
    excerpt:
      'The branded residence is usually explained as a premium. A name, a flag, a percentage over market. That explanation is convenient — and almost entirely wrong.',
    blocks: [
      { type: 'paragraph', text: 'The branded residence is usually explained as a premium. A name above the door, a flag on the roof, a percentage over market at resale. That explanation is convenient. It is also almost entirely wrong.' },
      { type: 'paragraph', text: 'What a brand actually buys you is a standard that survives the sales gallery. Long after the renders are forgotten, the operating manual remains. The brand is a contract about how the building will behave in year twelve.' },
      { type: 'image', orientation: 'h', name: 'AG_IMG_9820', caption: 'The standard, maintained daily' },
      { type: 'quote', text: 'The brand is not the name on the building. It is the discipline inside it.' },
      { type: 'paragraph', text: 'Consider what a hospitality operator actually does. It trains people. It audits itself. It replaces what wears before the resident notices wear. It holds a service culture in place across decades and changes of staff. No homeowners association, however well-intentioned, is built to do this.' },
      { type: 'paragraph', text: 'The market knows the brands. It does not always understand the author. Behind every serious branded residence stands a developer whose decisions — site, architect, program, proportions — precede the flag entirely. The brand certifies the standard. The developer creates the thing worth certifying.' },
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
      'The second home used to be an interruption of life — two weeks a year, shutters closed in between. A generation of owners is quietly retiring that idea.',
    blocks: [
      { type: 'paragraph', text: 'The second home used to be an interruption of life. Two weeks in summer, a week in winter, shutters closed in between. It was a place you visited, and a house that spent most of its year waiting.' },
      { type: 'paragraph', text: 'A generation of owners is quietly retiring that idea. Work moved into the laptop. School calendars loosened. The distance between a life in Mexico City and a morning on the Pacific stopped being a journey and became a schedule.' },
      { type: 'image', orientation: 'h', name: 'AG_IMG_9570', caption: 'The Pacific, on a weekday' },
      { type: 'quote', text: 'The question is no longer where to spend a holiday. It is where a life is allowed to happen.' },
      { type: 'paragraph', text: 'The second home that emerges from this shift is not a vacation property. It is a second setting for an ongoing life — with real workdays, real routines, groceries rather than minibars. It must function on an ordinary Tuesday, which is a far higher standard than functioning in July.' },
      { type: 'paragraph', text: 'This changes what the architecture must do. Storage becomes serious. Light matters in every month, not one season. The kitchen is no longer a prop. And service — the quiet, daily kind that hospitality perfected — becomes the difference between a house that works and a house that waits.' },
      { type: 'image', orientation: 'v', name: 'AG_IMG_9892', caption: 'Rooms for ordinary days' },
      { type: 'paragraph', text: 'It also changes where. The new second home sits close to an airport with daily flights, inside a community that does not empty in the off-season, held by an operator who keeps the standard when the owner is away.' },
      { type: 'paragraph', text: 'A house that lives all year is a different asset, a different design problem, and a different promise. It is not a vacation. It is the rest of the life.' },
      { type: 'note', text: 'Observations from SOMA’s residential work between Mexico City and Los Cabos.' },
    ],
  },
]
