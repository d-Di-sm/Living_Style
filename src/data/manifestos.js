// ─────────────────────────────────────────────────────────────────────────────
// LIVING; the founding manifesto.
//
// The second essay ("Hospitality taught residential design…") moved to
// Entries; see src/data/articles.js.
//
// DRAFT COPY; written in the voice of the SOMA Living strategic proposal.
// Replace any `text` / `quote` value with final editorial copy; the layout
// adapts automatically.
//
// Block types: 'paragraph' · 'quote' · 'image' ('h' | 'v') · 'collage' · 'note'
// ─────────────────────────────────────────────────────────────────────────────

export const manifestos = [
  {
    number: '01',
    slug: 'living-thoughtfully-considered',
    title: 'Living, thoughtfully considered.',
    // Line breaks are editorial: the home hero renders them literally
    // (white-space: pre-line); elsewhere they collapse into flowing prose.
    standfirst:
      'For decades, SOMA has shaped the environments in which contemporary life in Mexico takes place.\n\n' +
      'Today, that role continues through SOMA\'s residential projects.',
    image: { src: '/lifestyle/cabo-del-sol/Living_01.jpg', orientation: 'h' },
    blocks: [
      { type: 'paragraph', title: 'Legacy and Documentation', text: 'The work of Juan Sordo Madaleno and Javier Sordo Madaleno Bringas established an architectural lineage that continues today with the third generation, Javier Sordo Madaleno De Haro and his siblings are bringing this legacy to unprecedented heights. This platform becomes the infrastructure through which that legacy is documented and communicated for future generations.' },
      { type: 'image', orientation: 'h', name: 'VOYV8653', caption: 'Baja California Sur' },
      { type: 'paragraph', text: 'A home is the setting of a life, not a product. The proportions of a room, the temperature of light in the late afternoon, the distance between a kitchen and a garden. These are decisions about how a day should feel, not features on a list.' },
      {
        type: 'collage',
        images: [
          'A_03',
          'A_01',
          'A_02',
          { src: '/lifestyle/cabo-del-sol/Living_03.jpg', orientation: 'v' },
          { src: '/lifestyle/cabo-del-sol/Living_04.jpg', orientation: 'v' },
        ],
      },
      { type: 'paragraph', text: 'Thoughtful living starts with the day, not the floor plan. It means asking what a morning needs. Where quiet should live. How a family comes together and how a person spends time alone.' },
      { type: 'paragraph', text: 'The answers become architecture. But they begin as observations about life.' },
      // Closing spread: the vertical photograph with the last passage beside it
      {
        type: 'image', orientation: 'v', src: '/lifestyle/cabo-del-sol/Living_02.jpg', caption: 'Light, considered',
        aside: {
          text: 'This is the position SOMA Living formalizes. Not a catalogue of developments, but a record of a way of thinking; one in which every project is evidence of the same conviction.',
          note: 'SOMA Living is the residential platform of SOMA. Projects are its evidence, not its premise.',
        },
      },
    ],
  },
]
