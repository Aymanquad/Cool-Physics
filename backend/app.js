const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data
const cards = {
  0: {
    id: 0,
    title: "Gravity",
    content1: "Gravity : talk about a force that's been shaping the cosmos since the dawn of time. Back in 1687, Isaac Newton laid down the foundations when he described gravity as the attraction between objects based on their mass. It's the universal glue that pulls planets towards stars and keeps moons in orbit. Fast forward to 1915, Albert Einstein flipped the script with his theory of general relativity. He showed us that gravity isn’t just a force—it's the curvature of spacetime caused by mass. Picture massive objects like galaxies creating dips in this cosmic fabric, like a giant, invisible trampoline.",
    content2: "Gravity isn't just a mundane force you feel when something falls. It's the reason why planets move in predictable orbits and why stars form galaxies. Stand on a mountain, and you'll weigh slightly less because you're farther from Earth's center of mass. But here’s where it gets intense: near a black hole, gravity's pull is so extreme that not even light can escape—a true cosmic trap. And here’s the kicker: scientists are still piecing together gravity's full story. From detecting gravitational waves rippling through spacetime to searching for the elusive nature of dark matter, gravity continues to unveil its secrets, pushing the boundaries of our cosmic understanding.",
    content3: "Gravity isn’t just about attraction—it's about shaping the very flow of time itself. According to Einstein, massive objects like planets and stars bend spacetime, influencing how time ticks. It’s like watching a cosmic dance where the heaviest dancers dictate the rhythm. This dynamic interplay of mass and spacetime curvature isn't just theoretical—it's observable in the motions of celestial bodies and the paths of light through the universe. As we explore deeper into the cosmos and delve into the mysteries of gravity, we're not just uncovering how the universe works; we're unraveling the fundamental fabric of reality itself.",
    videoLink: "https://www.youtube.com/embed/3pZNzF6LBII?si=yioLsV2ZJKoSD66u",
  },
  1: {
    id: 1,
    title: "Relativity",
    content1: "Hey, ever wonder what makes the universe tick? Enter relativity—the mind-bending theory that revolutionized our understanding of space, time, and gravity. Back in 1905, Albert Einstein dropped a bombshell with his theory of special relativity. He showed that space and time aren’t separate, but intertwined into a single fabric: spacetime. Imagine it like a cosmic tapestry where everything—from planets to photons—moves along paths dictated by this unified framework.  Relativity isn’t just a theoretical curiosity; it's a game-changer for how we perceive reality. Fast forward to 1915, Einstein expands his theory with general relativity. Here’s the scoop: gravity isn’t a force pulling objects together but the result of mass warping spacetime itself. Think of it like placing a heavy ball on a stretched rubber sheet—it creates a dip that smaller objects, like planets, roll into. This warping of spacetime explains everything from the orbits of planets to the bending of starlight around massive objects.",
    content2: "Relativity isn’t just a concept confined to the cosmos—it’s a fundamental shift in how we understand motion and energy. According to Einstein, time isn’t a universal constant; it’s relative to your frame of reference. This means what’s fast or slow depends on how fast you're moving relative to something else. It's like a cosmic dance where the rules of reality bend and stretch depending on your perspective. From GPS satellites adjusting for time dilation to experiments confirming the bending of light by massive objects, relativity isn’t just a theory—it's a proven framework that reshapes our view of the universe.",
    content3 : "But here’s the kicker: relativity isn’t just about stars and planets—it’s about the fabric of reality itself. It challenges our intuition, showing us that space and time aren’t absolute but dynamic and interconnected. As we probe deeper into the mysteries of black holes, study the echoes of gravitational waves, and push the limits of our cosmic understanding, relativity continues to guide us towards a deeper comprehension of the universe's grand tapestry.",
    videoLink: "https://www.youtube.com/embed/yuD34tEpRFw?si=Vd2UcdA4rkca6fgW"
  },
  2: {
    id: 2,
    title: "Black Holes",
    content: "This is the content of card 2.",
    videoLink: "https://example.com/video2"
  },
  3: {
    id: 3,
    title: "Dark Matter",
    content: "This is the content of card 1.",
    videoLink: "https://example.com/video1"
  },
  4: {
    id: 4,
    title: "Plasma Physics",
    content: "This is the content of card 1.",
    videoLink: "https://example.com/video1"
  },
  5: {
    id: 5,
    title: "Gyroscopic Motion",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    videoLink: "https://example.com/video2"
  },
  6: {
    id: 6,
    title: "Quantum Mechanics",
    content: "This is the content of card 2.",
    videoLink: "https://example.com/video2"
  }
};

// Route to get card by ID
app.get('/cards/:id', (req, res) => {
  const { id } = req.params;
  const card = cards[id];

  if (card) {
    res.json(card);
  } else {
    res.status(404).json({ error: "Card not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
