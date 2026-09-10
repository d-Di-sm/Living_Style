// ─────────────────────────────────────────────────────────────────────────────
// CONVERSATIONS; interviews with architects, designers, and collaborators.
//
// Questions are final (from the CONVERSATIONS_*.pdf drafts, Aug 2026).
// Answers are pending: when a conversation is recorded, fill the `answers`
// array (same index as its question) and the page renders the full dialogue
// automatically; Interview-magazine style. An answer is either a string or an
// array of paragraphs. Set `comingSoon: false` once the answers land.
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
    slug: 'when-art-leaves-the-plaza',
    title: 'When Art Leaves the Exhibit',
    guest: 'Mónica de Haro',
    role: 'Art & Curation; Arte Abierto',
    intro:
      'What happens to art when it moves from public space into a private home, and where the line sits between a work and decoration.',
    // Final photography; not from the curated /web set, so a literal path
    portrait: '/lifestyle/web/AnimaPhoto.jpg',
    comingSoon: false,
    // Shown in place of the generic 'Conversation' label once published
    date: 'August 2026',
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
    // Transcribed from CONVERSATIONS _ Mónica de Haro (Arte Abierto), Aug 2026.
    answers: [
      [
        'I think it can. Art doesn’t need an audience in the traditional sense to have an impact. At Arte Abierto, we think of art as a way of opening up new ways of seeing and thinking, and that can happen in a very intimate context as much as in a public one.',
        'When a work lives in someone’s home, the relationship can become even more personal. You see it every day, but you never see it exactly the same way twice. It becomes part of your life, your memories, your conversations, even the way you experience the space around you.',
        'The scale of the audience changes, but the potential of the artwork doesn’t necessarily diminish.',
      ],
      [
        'A home is a much more intimate site. It already has a history, a personality, objects, memories, routines, and people living in it; all of those things can become part of the meaning of a work.',
        'That’s actually what makes it interesting for art.',
        'We don’t believe the artwork should simply be placed somewhere; we want the place to become part of the conversation.',
        'I would say a home isn’t a smaller version of a gallery. It is its own kind of site.',
      ],
      [
        'I think this is one of the most beautiful possibilities of having art at home.',
        'A work can become a kind of memory trigger. It can change as your own life changes. What it meant to you five years ago may not be what it means to you today.',
        'That’s something we think about at Arte Abierto as well: art can make us look again at something that has become invisible because we are so used to it.',
      ],
      [
        'I think it gains something different. Public art often comes with a framework: conversations, texts, specialists, programs, a community around it. That’s important, and it’s something we deeply value at Arte Abierto.',
        'But in a home, the context is your life.',
        'You don’t necessarily need someone to explain the work because you encounter it through your own experiences. The interpretation becomes much more personal and less controlled.',
        'So perhaps the question isn’t whether it loses something, but what kind of relationship it creates instead.',
      ],
      [
        'A home is definitely harder.',
        'In a white cube, you start with almost nothing. The space is intentionally neutral, so you can build a very specific relationship between the work, the architecture and the viewer.',
        'A home is the opposite. It already has a story. There is furniture, architecture, family history, habits, personality, accumulated decisions.',
        'The challenge is not to impose art, but to find works that can enter into a conversation with everything that is already there.',
        'With our projects at Arte Abierto, the site is never a blank canvas. The artist has to listen and feel it first.',
      ],
      [
        'I don’t think you need to physically be outdoors for art to create a relationship with nature. A work can change the way you perceive the landscape.',
        'The artwork can create a dialogue between the interior and exterior, rather than simply being something placed inside.',
        'In that sense, the home can become a threshold between architecture, art and nature.',
      ],
      [
        'Collecting shouldn’t necessarily be about quantity. A meaningful collection tells you something about the person or family who built it; their curiosity, their obsessions, their memories.',
        'There is a parallel with what we’ve tried to do with Arte Abierto. As we grow across different sites, the challenge is to keep each project deeply connected to its context while maintaining a clear identity.',
        'I think a personal collection can work in the same way. It should have a point of view, even if that point of view evolves over time.',
        // Source sentence ends without a period; kept as written.
        'The most interesting collections, to me, don’t feel like a catalogue of valuable objects. They feel like something you fell in love with and want it to become part of you',
      ],
      [
        'For me, the difference is intention and the relationship you establish with the work.',
        // The closing sentence is a fragment in the source draft; verify with the guest.
        'Decoration can certainly be beautiful, and there is nothing wrong with it. But art, at its best, asks something from you. It can challenge you, surprise you, make you uncomfortable, make you think, or simply make you see something differently. If it is chosen because it completes a room, or because it creates a relationship with the people and the place.',
      ],
      [
        'Arte Abierto has taught me how to think about a space and about the relationships we build with artworks, as well as the artist’s mind and intention behind each piece.',
        'I see art as something that can transform our relationship with a space. Every piece I own, regardless of its price or the artist’s career, has a strong personal meaning for me. Each one carries a story of its own, sometimes intertwined with the artist’s story. These connections are deeply meaningful to me, as they speak to my identity, my memories, and my relationships.',
      ],
    ],
    images: [
      { after: 2, name: 'AnimaVillageA_1105', caption: 'Ánima Village, Cabo del Sol', align: 'right' },
      { after: 5, name: 'AnimaVillage_VirroyLola_0012', caption: 'Ánima Village, Cabo del Sol' },
      { after: 7, name: 'AnimaVillage_VirroyLola_0043', caption: 'Ánima Village, Cabo del Sol', align: 'right' },
    ],
  },
  {
    slug: 'carving-the-inhabitable-void',
    title: 'Carving the Inhabitable Void',
    guest: 'Fernanda Patiño',
    role: 'Interior Architecture',
    intro:
      'The designer on museography, rooms staged for a single viewer, and what it means to sculpt a space someone else has already poured.',
    portrait: src('Villa_CDS_Det_01'),
    comingSoon: false,
    questions: [
      "When you walk into a space you designed years ago, unannounced, what do you think you'd notice first, before you noticed anything you'd want to change?",
      "Park Hyatt exists in Mexico City and now at Cabo del Sol, same brand, completely different site, climate, and pace of life. What has to stay identical between the two, and what has to change completely?",
      "You once described a project as carving a void out of something solid, like a sculptor. When the architecture isn't yours to carve, when someone else already poured the shell, is it still that same instinct, or a completely different one?",
      "You've studied museography, how museums choreograph a visitor's experience. Has that changed how you think about a home? Is there a room where you're staging something the way a museum stages a room for someone walking through it alone?",
      "What's a decision you made for a client that they never asked for, and now can't imagine living without?",
      "Tell me about a project the client loved, but you privately felt you'd missed something. What was it?",
      "You've described your process as carving an inhabitable void, the way a sculptor works. What's the detail in a space that does that carving, the one thing that makes a room feel sculpted rather than just built?",
      "You've already sat on a stage discussing branded residences, business potential versus challenges. What's the part of that conversation a panel format never gives you enough time to really finish?",
      "Soho House built its identity on being a scene, a club people show up to be part of. When that same brand becomes a house someone actually lives in every day, how do you take the performance out of it, so it still feels like a home and not a stage?",
      "Ritz-Carlton Riviera Maya protects 85% of the jungle around it instead of building over it, and even the paths borrowed from a moonlight-reading method the Maya used centuries ago. When the goal is protecting something that old instead of trending, what do you think you're actually building toward?",
    ],
    answers: [
      [
        "Hopefully, I would first be struck by the traces of time—and by the beauty that comes with aging. I believe a successful project should endure, but endurance does not mean remaining perfectly intact. It means having the capacity to absorb time gracefully and allow it to deepen the architecture’s character.",
        "The way wood darkens and reveals a richer grain, or bronze develops a natural patina, should not be treated as an accidental consequence of use. These transformations can be anticipated—and even welcomed—as part of the original design intent. I would hope to see a space that has not simply survived, but has become more layered, personal, and beautiful through inhabitation.",
      ],
      [
        "Working with a brand begins with a deep understanding of its pillars, ethos, and vision. Those principles form the project’s foundation and should remain consistent regardless of location. But consistency does not mean repetition.",
        "It is almost like an equation: once one of the variables changes, the result must change with it. Mexico City and Cabo del Sol offer radically different physical, historical, cultural, and climatic conditions, so the spatial expression of each property needs to emerge from its own context. The narrative, materiality, atmosphere, and decorative language should all respond to the particular character and rhythm of the place.",
        "What remains constant is the standard of quality, functionality, and care, as well as the distinct sensibility that defines the brand. What changes is the way those values become tangible. The identity stays coherent, but its expression becomes specific.",
      ],
      [
        "Every project is an opportunity to develop a particular strategy for entering into dialogue with what already exists. When the shell has been defined by someone else, the approach shifts: we can work in continuity with it, or introduce a deliberate contrast.",
        "My instinct is usually to think of the project as a spatial intervention before thinking of it as a collection of rooms or objects. That intervention might take the form of an architectural element inserted into the existing volume—something that fundamentally alters how the space is perceived and used—or it might be a path, a sequence, or a series of thresholds that guides the interior experience.",
        "So yes, it is still a form of sculpting, but the technique changes. Sometimes you carve through subtraction; sometimes you work through insertion, layering, or tension. The existing architecture becomes both the material you are working with and the condition you are responding to.",
      ],
      [
        "Studying museography expanded my understanding of design as the construction of an experience over time. It made me more conscious of how a journey unfolds: where the eye is drawn, how anticipation is created, and how one space transitions into the next.",
        "In an exhibition, the visitor is gradually led toward a significant work or moment. I often think about residential interiors in a similar way—not by turning the home into a gallery, but by allowing its spaces to reveal themselves through rhythm, pause, compression, and surprise. A framed view, an unexpected shift in scale, or a single object encountered at precisely the right moment can carry enormous emotional weight.",
        "Museography has also encouraged me to work with more ephemeral definitions of space. Furniture, light, textiles, and art can establish boundaries without making them permanent, allowing the home to remain fluid and responsive. The choreography is present, but it should never feel imposed; ideally, it becomes something the inhabitant experiences almost intuitively.",
      ],
      [
        "For some time, we have been consciously transferring lessons between hospitality and residential design. The two typologies have much more to learn from one another than we sometimes assume.",
        "In residential projects, we began introducing small, highly considered amenities—such as a bespoke coffee pantry within a bedroom or family room—that clients had not necessarily requested. Once experienced, however, these gestures quickly became indispensable. They introduce the ease and sense of care associated with hospitality into everyday domestic life.",
        "The exchange also works in the opposite direction. In hospitality projects, we bring in a more residential sensibility through bespoke furniture, tactile fabrics, and pieces that feel collected rather than prescribed. This makes luxury feel less generic and more intimate. Often, what people cannot imagine living without is not something spectacular, but something that quietly improves the rhythm of their day.",
      ],
      [
        "Several years ago, we designed a food and beverage project in which the budget conversation happened too late. By that point, the design direction and the financial reality of its execution were no longer aligned. During construction, the project underwent several rounds of value engineering. Although the final result was visually successful—and both the client and the guests responded very positively to it—the quality of certain elements did not meet the standard we wanted to stand behind.",
        "It was an important lesson: the difficult conversations are often the most productive ones, and they need to happen early. Discussing budget openly from the beginning allows expectations to be aligned, but it also enables the design team to direct investment intelligently. We can identify which gestures will have the greatest impact on the guest experience and where restraint will not compromise the integrity of the project.",
        "A clear budget does not limit creativity; it gives creativity a more precise framework. It allows us to protect the ideas that matter most.",
      ],
      [
        "It is rarely a single detail, but one of the most important conditions is the dialogue between the interior and its architectural shell. The more symbiotic that relationship becomes, the more natural the act of “carving” feels.",
        "When the experience inside is coherent with the structure, climate, views, and conditions outside, the resulting space does not feel arbitrary. It begins to feel inevitable—as though it could only have taken that particular form. The interior is no longer applied to the architecture; it emerges from a close reading of the container and the life it is meant to hold.",
        "Function provides another essential layer of information. Movement, use, scale, and human behavior ultimately determine the dimensions and character of the void. A room feels sculpted when space, matter, and occupation have been shaped as one continuous idea.",
      ],
      [
        "The subject could easily sustain several hours of conversation, but one area I would like to explore more deeply is what the design process itself teaches us—particularly about communication.",
        "Clarity and openness between the developer, operator, brand, consultants, and design teams are fundamental to creating a project with depth while still meeting its programme, budget, and timeline. The earlier designers understand the commercial objectives and cost parameters, the sooner we can arrive at a proposal that is both ambitious and viable. This avoids unnecessary iterations and allows creative energy to be directed toward the decisions that genuinely strengthen the project.",
        "Branded residences require many voices to converge around a single vision. When information is shared early and priorities are clearly defined, the process becomes more focused and the result more coherent. That alignment is not simply operational; it is a design tool.",
      ],
      [
        "When working with a hospitality brand as distinctive as Soho House, we begin with research—not only into its visual codes, but into its values, rituals, and the moments that define the guest experience. That wider understanding helps us distinguish between what is essential to the brand and what belongs specifically to the atmosphere of a club.",
        "A residence has a different rhythm. People inhabit it for longer periods, and its lifespan is typically much greater, so it needs to remain relevant beyond a particular moment or aesthetic. The challenge is to preserve the brand’s sense of character and sociability while creating enough calm, intimacy, and flexibility for everyday life.",
        "The performative aspect does not have to disappear, but it can become more concentrated: a bar, a listening room, or a particular corner might carry that energy rather than asking the entire residence to do so. Materiality can also shift toward something quieter and more enduring, while familiar details, proportions, or rituals retain the connection to the brand. It is a process of editing—keeping the spirit, but softening the stagecraft.",
      ],
      [
        "Places as rich and layered as the Riviera Maya arrive with their own powerful narratives. The landscape, history, and cultural memory are already present, so the designer’s role is not to invent an identity, but to listen carefully and understand how to intervene without overwhelming what exists.",
        "Our most meaningful approach begins with deep research. Understanding the territory’s past and present gives us a clearer sense of how architecture might participate responsibly in its future. Respecting a site involves much more than preserving its physical qualities; it also means engaging with the communities, traditions, symbols, knowledge, and rituals that have shaped it.",
        "These elements can remain alive through many expressions—not only architecture and materiality, but gastronomy, art, storytelling, and the daily rituals of the property. Research allows us to move beyond superficial references and make decisions that feel genuinely connected to the place.",
        "Ultimately, I think we are building toward continuity: creating something contemporary that does not interrupt the history of the territory, but becomes another thoughtful layer within it.",
      ],
    ],
    images: [
      { after: 3, name: 'AG_IMG_9862',          caption: 'Texture, carved by light' },
      { after: 6, name: 'Villa_CDS_Terraza_05', caption: 'A room without walls; Cabo del Sol' },
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
    slug: 'what-the-site-remembers',
    title: 'What the Site Remembers',
    guest: 'Saul Perez',
    role: 'Architect & PM',
    intro:
      'A conversation from the construction site: on light, whales, wind, and what the land will keep after the building is finished.',
    portrait: src('AG_IMG_9577'),
    comingSoon: false,
    questions: [
      'Is there a specific time of day when the light on this site stops feeling like work and starts feeling like something else?',
      'Has there been a moment, a whale, a bird, a color in the water, that made you stop what you were doing, even if just for a few seconds?',
      "Does the breeze here change throughout the day? Is there a moment when it arrives that you've already started looking forward to?",
      "Is there any sound on this site that has nothing to do with construction, one that's simply the desert or the ocean doing what they do?",
      "After all this time here, is there any part of this land that you understand now that you didn't understand when you started?",
      'If this site could only keep one thing exactly as it is now, before anyone finishes building on it, what would you want it to keep?',
      "Years from now, when this is finished and full of people who never saw it like this, what do you hope will still be true about this place — something no one will be able to see, but that you'll know is still there?",
    ],
    answers: [
      'In the afternoon, right at sunset, when the finishes bring out their natural beauty and blend with the landscape.',
      'A whale, that leaped while we were in the middle of a client delivery, we all saw it and smiled, as proof that we were in the right place at the right time.',
      "Yes, the breeze changes completely throughout the day. While the mornings are calm, it picks up starting around midday, and by the afternoons there's total stillness, which together with the sunset creates the best scene of the day.",
      'The sound of the birds that have made our landscape their home, giving life to our work as the first inhabitants of the project.',
      "The topography and the ground levels — when I joined the project I didn't fully understand it, and now I see how the architecture and its forms interact with the land.",
      'Its rocks, those natural sculptures capable of blending any construction with nature.',
      'Its essence, because both the architecture and the landscape stand out naturally, without pretension. The desert gardens that accompany the bush-hammered concrete walls, which seem to emerge from the ground and highlight their character and natural beauty.',
    ],
    images: [
      { after: 2, name: 'AG_IMG_9599', caption: 'The cove below the site' },
      { after: 4, src: '/lifestyle/web/AG_IMG_9667.jpg', orientation: 'v', caption: 'A palm, holding the last light', align: 'right', objectPosition: 'center bottom' },
      { after: 6, name: 'AG_IMG_9584', caption: 'What the land keeps' },
    ],
  },
]
