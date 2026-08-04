// ─────────────────────────────────────────────────────────────────────────────
// CONVERSATIONS — interviews with architects, designers, and collaborators.
//
// Questions are final (from the CONVERSATIONS_*.pdf drafts, Aug 2026).
// Answers are pending: when a conversation is recorded, fill the `answers`
// array (same index as its question) and the page renders the full dialogue
// automatically — Interview-magazine style.
//
// `images` intersperses photography through the dialogue (Interview-magazine
// rhythm): { after: N, name, caption, align? } inserts the curated image
// after question N. Vertical images sit at ~60% column width (align 'left'
// by default, or 'right'); horizontals run the full column.
//
// Portraits are temporary placeholders from the curated lifestyle set until
// real photography exists. Replace `portrait: src('…')` with the final
// portrait path when the images arrive.
// ─────────────────────────────────────────────────────────────────────────────
import { src } from './lifestyle'

export const conversations = [
  {
    slug: 'carving-the-inhabitable-void',
    title: 'Carving the Inhabitable Void',
    guest: 'Fernanda Patiño',
    role: 'Interior Architecture',
    intro:
      'The designer on museography, rooms staged for a single viewer, and what it means to sculpt a space someone else has already poured.',
    portrait: src('AG_IMG_9824'),
    comingSoon: true,
    questions: [
      "When you walk into a space you designed years ago, unannounced, what do you think you'd notice first, before you noticed anything you'd want to change?",
      'Park Hyatt exists in Mexico City and now at Cabo del Sol, same brand, completely different site, climate, and pace of life. What has to stay identical between the two, and what has to change completely?',
      "You once described a project as carving a void out of something solid, like a sculptor. When the architecture isn't yours to carve, when someone else already poured the shell, is it still that same instinct, or a completely different one?",
      "You've studied museography, how museums choreograph a visitor's experience. Has that changed how you think about a home? Is there a room where you're staging something the way a museum stages a room for someone walking through it alone?",
      "What's a decision you made for a client that they never asked for, and now can't imagine living without?",
      "Tell me about a project the client loved, but you privately felt you'd missed something. What was it?",
      "You've described your process as carving an inhabitable void, the way a sculptor works. What's the detail in a space that does that carving, the one thing that makes a room feel sculpted rather than just built?",
      "You've already sat on a stage discussing branded residences, business potential versus challenges. What's the part of that conversation a panel format never gives you enough time to really finish?",
      'Soho House built its identity on being a scene, a club people show up to be part of. When that same brand becomes a house someone actually lives in every day, how do you take the performance out of it, so it still feels like a home and not a stage?',
      'Ritz-Carlton Riviera Maya protects 85% of the jungle around it instead of building over it, and even the paths borrow from a moonlight-reading method the Maya used centuries ago. When the goal is protecting something that old instead of trending, what do you think you\'re actually building toward?',
    ],
    answers: [],
    images: [
      { after: 3, name: 'AG_IMG_9862',          caption: 'Texture, carved by light' },
      { after: 6, name: 'Villa_CDS_Terraza_05', caption: 'A room without walls — Cabo del Sol' },
      { after: 8, name: 'AG_IMG_9819',          caption: 'The stair as sculpture', align: 'right' },
    ],
  },
  {
    slug: 'letting-go-of-the-reins',
    title: 'Letting Go of the Reins',
    guest: 'Javier Sordo Madaleno de Haro',
    role: 'Architecture & Development',
    intro:
      'On inheritance, arguments with his father, and building a constellation on a single coastline.',
    portrait: src('AnimaVillageA_0024'),
    comingSoon: true,
    questions: [
      "In an old interview, you said you spent part of your childhood trying to escape architecture, and only later accepted the responsibility of carrying the firm forward. Now that you've built your own body of work inside it, does that responsibility still feel inherited, or has it become something you'd choose on your own?",
      "You've described working with your father as something that produces great results and real arguments in the same breath. What's a project the two of you actually disagreed on, and who turned out to be right?",
      "Your father's advice to you was to look for your own work rather than wait for clients to knock. Reforma Colón needed financial creativity as much as architectural creativity. What did designing your own client teach you that designing for someone else never could?",
      "You've said Mexico needs to let go of the reins so it can develop both its cities and its beach destinations. What's a project where you personally had to let go of something, control, timeline, a design idea, to let a place become what it needed to be?",
      "You've named Alberto Kalach and Diller Scofidio and Renfro as the architects you admire most, one for reading context, the other for regenerating a city block. Which of those two instincts do you reach for first when you're standing on a new site?",
      'You founded Arte Abierto to put art into public space, almost as a parallel practice to architecture itself. Now that Arte Abierto Baja sits alongside Park Hyatt and Soho House at Cabo del Sol, has art become a tool you design with, or is it still something separate that architecture makes room for?',
      "In Los Cabos you're not building one project, you're building a constellation, Ánima Village, Arte Abierto Baja, Park Hyatt, Soho House. When they all belong to the same coastline, what decides where one project's identity ends and the next one's begins?",
      "You've said you're drawn to small-scale design even while running some of the largest projects in the firm's history. Is there a small detail in a project like Reforma Colón or Cabo del Sol that most people will never notice, but that you'd point to first?",
      'Twenty years from now, what do you want people to say Cabo del Sol did for Los Cabos, not the buildings, the place itself?',
    ],
    answers: [],
    images: [
      { after: 2, name: '2025_Park_Hyatt_CDMX_Drone_04', caption: 'Park Hyatt Mexico City, rising over Polanco' },
      { after: 5, name: 'AnimaVillageA_0794',            caption: 'Ánima Village, Cabo del Sol' },
      { after: 7, name: 'AG_IMG_9628',                   caption: 'Volumes against the sky' },
    ],
  },
  {
    slug: 'when-art-leaves-the-plaza',
    title: 'When Art Leaves the Plaza',
    guest: 'Mónica de Haro',
    role: 'Art & Curation — Arte Abierto',
    intro:
      'What happens to art when it moves from public space into a private home — and where the line sits between a work and decoration.',
    portrait: src('AG_IMG_9718'),
    comingSoon: true,
    questions: [
      "You've said art is an engine of new thought, that artists rework reality and offer other visions. Does art do that same work when only one family will ever see it, inside their own home, or does it need an audience to function that way?",
      "You've described Arte Abierto's spaces as each having a completely different relationship to art, Pedregal is a white cube, Baja is in dialogue with nature, Polanco is closer to a public plaza. If a home is its own kind of site, what's its relationship to art? Which of those three is it closest to, or is it something else entirely?",
      "Your show at Pedregal turned a terrace into a meditation on a landscape's lost biodiversity, a place that used to be something very different than what it became. Can art in a home do that same thing, point back at something a family has forgotten about itself?",
      "Public art comes with a program around it, talks, specialists, context that helps people read the work. A painting in someone's living room doesn't get that. Does art in a home lose something without that scaffolding, or does it gain something instead?",
      "Curating for a white cube means starting with a blank room. Curating for a home means starting with a room that's already full, furniture, habits, a family's whole life already in progress. Which is harder, and which do you actually prefer?",
      'Your outdoor spaces are designed to be in dialogue with nature. A lot of the homes in this series look out at the same coastline your Baja site does. Is there a version of that same dialogue that belongs inside someone\'s living room, facing the same ocean?',
      'Arte Abierto has grown across several sites without losing its own identity. When a family starts collecting art in their home, is there a version of that same risk, growing a collection so much that it stops meaning anything specific to them?',
      "You work at the intersection of the art world and real estate. What's the difference, to you, between a piece of art in a home and decoration? Where's the line, and who usually gets it wrong?",
      "Is there a piece of art in your own home that means more to you than anything you've ever curated for public space? What is it, and why has it stayed with you?",
    ],
    answers: [],
    images: [
      { after: 2, name: 'AG_IMG_9651',   caption: 'A boulder, placed like a work' },
      { after: 5, name: 'AG_IMG_9684',   caption: 'Surface as composition' },
      { after: 7, name: 'AG_IMG_9915-2', caption: 'Light through shutters', align: 'right' },
    ],
  },
  {
    slug: 'what-the-site-remembers',
    title: 'What the Site Remembers',
    guest: 'A worker on site',
    role: 'Park Hyatt Cabo del Sol — On Site',
    intro:
      'A conversation from the construction site: on light, whales, wind, and what the land will keep after the building is finished.',
    portrait: src('AG_IMG_9577'),
    comingSoon: true,
    questions: [
      'Is there a specific time of day when the light on this site stops feeling like work and starts feeling like something else?',
      'Has there been a moment, a whale, a bird, a color in the water, that made you stop what you were doing, even for a few seconds?',
      "Does the breeze change through the day here? Is there a moment it arrives that you've started to wait for?",
      "Is there a sound on this site that has nothing to do with construction, one that's just the desert or the ocean doing what it does?",
      "After all this time here, is there a part of this land you understand now that you didn't when you started?",
      'If this site could only keep one thing exactly as it is right now, before anyone finishes building on it, what would you want it to keep?',
      "Years from now, when this is finished and full of people who never saw it like this, what do you hope stays true about this place, something no one will be able to see, but you'll know is still there?",
    ],
    answers: [],
    images: [
      { after: 2, name: 'AG_IMG_9599', caption: 'The cove below the site' },
      { after: 4, name: 'AG_IMG_9719', caption: 'A palm, holding the last light', align: 'right' },
      { after: 6, name: 'AG_IMG_9584', caption: 'What the land keeps' },
    ],
  },
]
