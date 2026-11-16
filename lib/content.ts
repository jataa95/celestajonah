// All copy and media for the site. Edit here.
// Work titles are WORKING TITLES taken from what each painting shows —
// replace them (and sizes/years) with the artist's own details.

export const artist = {
  name: "Celesta",
  fullName: "Jonah Abasiekeme",
  known: "Celesta Jonah",
  role: "Contemporary Nigerian portraiture.",
  handle: "celestajonah",
  email: "celestajonah@gmail.com",
  location: "Nigeria",
  motto: "That which you need is always around you.",
  links: {
    instagram: "https://www.instagram.com/celestajonah/",
    tiktok: "https://www.tiktok.com/@celestajonah",
    youtube: "https://youtube.com/shorts/8HrusnYaHs8",
  },
};

export type Media = { src: string; w: number; h: number; alt: string; caption?: string };
export type Film = { src: string; poster: string; caption: string };

export type Work = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  medium: string;
  lede: string;
  body: string[];
  image: Media;
  process?: Media[];
  film?: Film;
};

export const works: Work[] = [
  {
    slug: "the-field",
    title: "The Field",
    subtitle: "Violet",
    year: "2026",
    medium: "Oil on canvas",
    lede: "A girl in a dress made of light, standing in tall grass under a violet sky.",
    body: [
      "The largest canvas in the studio, painted standing up. The sky moves from lilac to turquoise to a warm coral, and the dress catches every one of those colours.",
      "She doesn't smile. She doesn't need to. The field belongs to her.",
    ],
    image: { src: "/works/field.jpg", w: 443, h: 608, alt: "Oil painting of a girl in an iridescent blue dress standing in a field under a violet sky" },
    process: [
      { src: "/scenes/studio.jpg", w: 576, h: 1024, alt: "Celesta painting The Field at the easel", caption: "At the easel" },
      { src: "/stills/at-easel.jpg", w: 576, h: 1024, alt: "Celesta reaching across the canvas", caption: "Final passes" },
    ],
    film: { src: "/video/field.mp4", poster: "/video/field-poster.jpg", caption: "Studio, the last touches — sound on" },
  },
  {
    slug: "stripes",
    title: "Stripes",
    subtitle: "Red Series",
    year: "2026",
    medium: "Oil on canvas",
    lede: "A steady stare above a wrapped black-and-white scarf, on a field of crimson.",
    body: [
      "The centrepiece of the red wall. Thick, scraped crimson behind; skin built from deep browns, olive and gold; a scarf painted stripe by stripe.",
      "Visitors stood in front of it longer than any other piece. It looks back, and it doesn't blink.",
    ],
    image: { src: "/works/stripes.jpg", w: 365, h: 516, alt: "Oil portrait of a young person in a striped scarf against a red background" },
    process: [
      { src: "/stills/drawing.jpg", w: 576, h: 694, alt: "The pencil drawing for the striped portrait on white canvas", caption: "The drawing" },
      { src: "/scenes/stripes-viewer.jpg", w: 560, h: 558, alt: "A visitor looking at the striped portrait in the gallery", caption: "On the wall" },
    ],
    film: { src: "/video/underpaint.mp4", poster: "/video/underpaint-poster.jpg", caption: "Mixing the underpainting — sound on" },
  },
  {
    slug: "plaid",
    title: "Plaid",
    subtitle: "Red Series",
    year: "2026",
    medium: "Oil on canvas",
    lede: "Two buns, a wrapped tartan scarf, and a sideways look that holds the room.",
    body: [
      "Painted from the hair down. The buns went in first, then the brow, then the eyes, all on a red ground laid before the face was touched.",
    ],
    image: { src: "/works/plaid.jpg", w: 326, h: 386, alt: "Oil portrait of a girl with two buns wrapped in a plaid scarf on red" },
    process: [
      { src: "/stills/buns-start.jpg", w: 576, h: 1024, alt: "Early stage of a red-ground portrait with hair blocked in", caption: "Hair first" },
    ],
    film: { src: "/video/buns.mp4", poster: "/video/buns-poster.jpg", caption: "Fourteen hours at the easel — sound on" },
  },
  {
    slug: "light-behind-him",
    title: "Light Behind Him",
    subtitle: "Portrait",
    year: "2026",
    medium: "Oil on canvas",
    lede: "Four hundred and eighty hours, from a warm sienna sketch to the final glaze.",
    body: [
      "A boy in black against a smoky, half-lit wall. The background stays soft and blurred so the face can be sharp.",
      "The whole painting, compressed into thirteen seconds, became one of the most-watched studio films.",
    ],
    image: { src: "/works/boy.jpg", w: 556, h: 600, alt: "Oil portrait of a boy in a black t-shirt against a soft glowing background" },
    process: [
      { src: "/stills/sienna.jpg", w: 576, h: 664, alt: "The sienna underpainting of the boy's portrait", caption: "Sienna stage" },
      { src: "/stills/boy-mid.jpg", w: 576, h: 1024, alt: "The boy's portrait half finished", caption: "Halfway" },
    ],
    film: { src: "/video/boy.mp4", poster: "/video/boy-poster.jpg", caption: "480 hours in 13 seconds — sound on" },
  },
  {
    slug: "the-bear",
    title: "The Bear",
    subtitle: "Blue",
    year: "2026",
    medium: "Oil on canvas",
    lede: "A small girl, a large white bear, and a blue that feels like night falling.",
    body: [
      "The bear was painted last: white fur over a warm brown base, so it glows against the ink-blue ground.",
    ],
    image: { src: "/works/teddy.jpg", w: 530, h: 550, alt: "Oil portrait of a little girl holding a white teddy bear against a deep blue background" },
    process: [
      { src: "/stills/teddy-wip.jpg", w: 576, h: 1024, alt: "The girl and bear in the brown underpainting stage", caption: "Underpainting" },
    ],
    film: { src: "/video/teddy.mp4", poster: "/video/teddy-poster.jpg", caption: "The bear comes last — sound on" },
  },
  {
    slug: "crown",
    title: "Crown",
    subtitle: "Graphite",
    year: "2026",
    medium: "Graphite on paper",
    lede: "A braided crown rising off the page, drawn in graphite alone.",
    body: [
      "With the colour taken away, everything rests on form: the lift of the braids, the puffed sleeve, the look over the shoulder.",
    ],
    image: { src: "/works/crown.jpg", w: 457, h: 685, alt: "Graphite drawing of a seated girl with a tall braided crown hairstyle" },
    process: [
      { src: "/scenes/crown-wall.jpg", w: 1290, h: 1842, alt: "The framed graphite drawing hung on a black panel", caption: "Framed, at the exhibition" },
    ],
  },
  {
    slug: "boy-in-green",
    title: "Boy in Green",
    subtitle: "Portrait",
    year: "2026",
    medium: "Oil on canvas",
    lede: "Rust, teal and a very steady gaze. The one people lean in close to.",
    body: ["Painted with loose, layered colour behind and tight, quiet detail in the face."],
    image: { src: "/works/gaze.jpg", w: 295, h: 558, alt: "Oil portrait of a boy against a green and rust background" },
    process: [
      { src: "/scenes/lean-in.jpg", w: 560, h: 558, alt: "A visitor studying the portrait up close", caption: "Up close" },
    ],
  },
  {
    slug: "behind-the-scarf",
    title: "Behind the Scarf",
    subtitle: "Red Series",
    year: "2026",
    medium: "Oil on canvas",
    lede: "Only the eyes. Small canvas, loud silence.",
    body: ["The smallest work in the red series: a face hidden behind a plaid scarf, leaving the eyes to do all the talking."],
    image: { src: "/works/veil.jpg", w: 198, h: 242, alt: "Small oil portrait of a girl with a plaid scarf covering her mouth, on red" },
  },
];

export const onEasel: Media[] = [
  { src: "/works/locs-wip.jpg", w: 576, h: 1024, alt: "A portrait of a child with locs, half underpainting, half finished", caption: "On the easel" },
  { src: "/works/buns-wip.jpg", w: 576, h: 1024, alt: "A red-ground portrait in progress", caption: "In progress" },
];

export type Post = {
  slug: string;
  tag: string;
  title: string;
  date: string;
  cover: Media;
  excerpt: string;
  body: string[];
  film?: Film;
  gallery?: Media[];
};

export const posts: Post[] = [
  {
    slug: "what-goes-in-the-underpainting",
    tag: "Process",
    title: "What goes in the underpainting",
    date: "2026",
    cover: { src: "/stills/drawing.jpg", w: 576, h: 694, alt: "Detailed pencil drawing on a white canvas" },
    excerpt: "Turpentine, brown oil colour, a jar with a wide lid, and a big soft brush.",
    body: [
      "Someone asked what I mix for my underpainting, so here it is.",
      "Odourless turpentine goes into an airtight container with a wide lid. I squeeze in brown oil colour and give it a good shake. The tight lid stops spills, and the paint has to dissolve completely, or the wash goes on lumpy and dark.",
      "Then a wide, soft-bristle brush, dipped straight into the jar. Never pour the mixture onto the canvas. Cover the whole drawing quickly in one warm, even tone.",
      "That brown layer is where every portrait really begins. All the lights and darks are decided here before any colour arrives.",
    ],
    film: { src: "/video/underpaint.mp4", poster: "/video/underpaint-poster.jpg", caption: "The underpainting mix — sound on" },
    gallery: [
      { src: "/stills/turpentine.jpg", w: 576, h: 724, alt: "Holding a bottle of odourless turpentine", caption: "Turpentine" },
      { src: "/stills/mixing.jpg", w: 576, h: 694, alt: "A wide brush coming out of the mixing jar", caption: "The wash" },
    ],
  },
  {
    slug: "480-hours",
    tag: "Studio",
    title: "480 hours in 13 seconds",
    date: "2026",
    cover: { src: "/stills/sienna.jpg", w: 576, h: 664, alt: "Sienna underpainting of a boy's face" },
    excerpt: "A whole portrait, from sketch to signature, folded into a few seconds of film.",
    body: [
      "Four hundred and eighty hours is a long time to look at one face. By the end you know it better than your own.",
      "The film starts in sienna, a warm brown drawing with all the shadows mapped out. Then the background goes in, soft and smoky, and the skin is built up layer by layer until it holds the light.",
      "The eyes are always last. When they look back, it's done.",
    ],
    film: { src: "/video/boy.mp4", poster: "/video/boy-poster.jpg", caption: "480 hours in 13 seconds — sound on" },
    gallery: [
      { src: "/stills/boy-mid.jpg", w: 576, h: 1024, alt: "The boy's portrait halfway through", caption: "Halfway" },
      { src: "/works/boy.jpg", w: 556, h: 600, alt: "The finished portrait", caption: "Finished" },
    ],
  },
  {
    slug: "the-red-wall",
    tag: "Exhibition",
    title: "The red wall",
    date: "2026",
    cover: { src: "/scenes/visitor.jpg", w: 1440, h: 1920, alt: "A visitor photographing the red portraits" },
    excerpt: "Seeing the red series hung together for the first time, with people leaning in close.",
    body: [
      "In the studio you only ever see one painting at a time. On the gallery wall, the red series finally stood side by side: Stripes in the middle, Plaid and Behind the Scarf on either side.",
      "People leaned in close. They took photos. They stood quietly in front of the faces for a long time. That's the whole point.",
      "Thank you to everyone who came, looked, and stayed.",
    ],
    gallery: [
      { src: "/scenes/wall.jpg", w: 1156, h: 640, alt: "Three red-ground portraits hung side by side", caption: "The red series" },
      { src: "/scenes/looking.jpg", w: 518, h: 558, alt: "Guests studying the graphite drawing", caption: "Opening night" },
      { src: "/scenes/talk.jpg", w: 518, h: 558, alt: "Guests in conversation at the exhibition", caption: "Conversations" },
    ],
  },
];

// Home-page collage. Columns scroll at different speeds.
export const collage: Media[][] = [
  [
    { src: "/stills/locs-start.jpg", w: 576, h: 1024, alt: "" },
    { src: "/works/veil.jpg", w: 198, h: 242, alt: "" },
  ],
  [
    { src: "/scenes/studio.jpg", w: 576, h: 1024, alt: "Celesta painting at the easel", caption: "In the studio" },
    { src: "/works/stripes.jpg", w: 365, h: 516, alt: "Stripes", caption: "Stripes, 2026" },
  ],
  [
    { src: "/works/field.jpg", w: 443, h: 608, alt: "The Field", caption: "The Field (Violet), 2026" },
    { src: "/works/teddy.jpg", w: 530, h: 550, alt: "The Bear", caption: "The Bear, 2026" },
  ],
  [
    { src: "/works/boy.jpg", w: 556, h: 600, alt: "Light Behind Him", caption: "Light Behind Him, 2026" },
    { src: "/works/crown.jpg", w: 457, h: 685, alt: "Crown", caption: "Crown, 2026" },
  ],
  [
    { src: "/works/plaid.jpg", w: 326, h: 386, alt: "" },
    { src: "/works/gaze.jpg", w: 295, h: 558, alt: "" },
  ],
];

export const themes = ["Presence", "Memory", "Softness", "Strength"];
