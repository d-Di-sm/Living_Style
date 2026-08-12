// ─────────────────────────────────────────────────────────────────────────────
// LIVING — the founding manifesto.
//
// The second essay ("Hospitality taught residential design…") moved to
// Entries — see src/data/articles.js.
//
// DRAFT COPY — written in the voice of the SOMA Living strategic proposal.
// Replace any `text` / `quote` value with final editorial copy; the layout
// adapts automatically.
//
// Block types: 'paragraph' · 'quote' · 'image' ('h' | 'v') · 'triptych' · 'note'
// ─────────────────────────────────────────────────────────────────────────────

export const manifestos = [
  {
    number: '01',
    slug: 'living-thoughtfully-considered',
    title: 'Living, thoughtfully considered.',
    // Line breaks are editorial: the home hero renders them literally
    // (white-space: pre-line); elsewhere they collapse into flowing prose.
    standfirst:
      'For decades, SOMA has not simply developed residential projects.\n\n' +
      'It has shaped the environments in which contemporary life in Mexico takes place.\n\n' +
      'From the residential explorations of Juan Sordo Madaleno to the urban scale of Javier Sordo Madaleno Bringas,\n' +
      'the work has consistently defined how architecture, city, and lifestyle intersect.\n\n' +
      'Today, that role continues through SOMA’s residential developments.',
    image: 'AG_IMG_9713',
    blocks: [
      { type: 'paragraph', text: 'For decades, SOMA has not simply developed residential projects. It has shaped the environments in which contemporary life in Mexico takes place.' },
      { type: 'paragraph', text: 'From the residential explorations of Juan Sordo Madaleno to the urban scale of Javier Sordo Madaleno Bringas, the work has consistently defined how architecture, city, and lifestyle intersect.' },
      { type: 'image', orientation: 'h', name: 'VOYV8653', caption: 'Cabo del Sol, Baja California Sur' },
      { type: 'paragraph', text: 'A home is not a product. It is the setting of a life. The proportions of a room, the temperature of light in the late afternoon, the distance between a kitchen and a garden — these are not features. They are decisions about how a day should feel.' },
      { type: 'triptych', names: ['A_03', 'A_01', 'A_02'] },
      { type: 'paragraph', text: 'To consider living thoughtfully is to begin with the day, not the floor plan. It is to ask what a morning requires. Where silence should live. How a family gathers, and how a person is alone.' },
      { type: 'paragraph', text: 'The answers become architecture. But they begin as observations about life.' },
      { type: 'image', orientation: 'v', name: 'AG_IMG_9716', caption: 'Light, considered' },
      { type: 'paragraph', text: 'This is the position SOMA Living formalizes. Not a catalogue of developments, but a record of a way of thinking — one in which every project is evidence of the same conviction.' },
      { type: 'note', text: 'SOMA Living is the residential platform of SOMA. Projects are its evidence, not its premise.' },
    ],
  },
]
