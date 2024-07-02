const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Dummy data for cards
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
    content1: "Hey, black holes—talk about the universe's most mysterious and captivating phenomena. These cosmic enigmas were first theorized by Karl Schwarzschild in 1916, right after Einstein's general relativity came into play. Imagine a region in space where gravity is so intense that not even light can escape. It's like a trapdoor in the fabric of spacetime, leading to who-knows-where. The boundary around this region is called the event horizon, the point of no return. Once something crosses it, there’s no coming back.",
    content2: "Black holes aren’t just theoretical curiosities—they’re real, and they’re out there. They form when massive stars run out of fuel and collapse under their own gravity. Picture a star several times the mass of our Sun squeezing down into a space no bigger than a city. The result? A singularity—an infinitely dense point where the laws of physics as we know them break down. Surrounding this singularity is the event horizon, and anything that ventures too close gets stretched into spaghetti by the extreme gravitational pull—a process aptly named “spaghettification.”   But black holes aren’t just stellar remnants. They come in various sizes, from stellar-mass black holes to supermassive ones lurking at the centers of galaxies, including our Milky Way’s Sagittarius A*. These titans can be millions or even billions of times the mass of the Sun. And here’s where it gets even more fascinating: black holes can merge, sending ripples through spacetime that we can detect as gravitational waves. This groundbreaking discovery, first made in 2015 by LIGO, confirmed Einstein's century-old prediction and opened up a new way of observing the universe.",
    content3: "The study of black holes isn’t just about understanding these cosmic giants—it’s about probing the fundamental nature of reality. From Hawking radiation, which suggests black holes can slowly evaporate, to the tantalizing possibility of wormholes—hypothetical passages through spacetime—black holes push the boundaries of our knowledge. They challenge our understanding of gravity, quantum mechanics, and the very fabric of the cosmos, making them one of the most exciting and mysterious subjects in modern astrophysics.",
    videoLink: "https://www.youtube.com/embed/e-P5IFTqB98?si=m_gGnGThip6-pSEn"
  },
  3: {
    id: 3,
    title: "Dark Matter",
    content1: " dark matter—now here’s a cosmic mystery that keeps astronomers and physicists awake at night. Discovered indirectly by Fritz Zwicky in the 1930s, this elusive substance makes up about 27% of the universe, yet we can’t see it, touch it, or directly detect it. It's like an invisible skeleton holding the universe together. Without dark matter, galaxies would fly apart; its gravitational pull keeps them intact. Imagine it as the hidden scaffolding that provides the structure for everything we see in the cosmos.",
    content2: "Dark matter isn’t composed of the ordinary matter we’re familiar with—no atoms, protons, or electrons. Instead, it's made of unknown particles that don’t emit or absorb light, making it invisible. We infer its presence from its gravitational effects on visible matter, like stars and galaxies. For instance, Vera Rubin’s observations in the 1970s showed that stars at the edges of galaxies move faster than they should if only visible matter were at play, suggesting an unseen mass exerting additional gravitational pull.  What’s truly mind-blowing is how dark matter fits into the grand puzzle of the universe. Despite being invisible, its influence is everywhere. It’s the reason galaxy clusters stick together and why the cosmic microwave background—the afterglow of the Big Bang—has its distinctive patterns. Scientists are on a quest to identify dark matter particles through various means, from underground detectors to particle accelerators. The leading candidates are WIMPs (Weakly Interacting Massive Particles) and axions, but so far, they’ve managed to stay hidden, adding to the enigma.",
    content3: "Dark matter is not just a cosmic oddity—it’s a crucial piece of the universe’s story. Its existence hints at new physics beyond the Standard Model, challenging our understanding of the fundamental forces and particles. As we peer deeper into space with advanced telescopes and refine our detection methods, we inch closer to unraveling this cosmic mystery. Discovering the true nature of dark matter could revolutionize our understanding of the universe, revealing the unseen scaffolding that shapes everything we know.",
    videoLink: "https://www.youtube.com/embed/QAa2O_8wBUQ?si=7gqAc5ym0QeADxzt"
  },
  4: {
    id: 4,
    title: "Plasma Physics",
    content1: "Plasma physics—now this is a field that’s absolutely electrifying, literally and figuratively. Plasma, often referred to as the fourth state of matter, is an ionized gas consisting of free electrons and ions. Imagine it as a supercharged soup where atoms are stripped of their electrons. This state of matter was first identified by Sir William Crookes in the 1870s, and it’s all around us—from the glowing neon signs on city streets to the immense interiors of stars.",
    content2: "What makes plasma physics so fascinating is its ubiquity and variety. Plasma isn’t just confined to the stars; it’s right here on Earth, in phenomena like lightning and auroras. In fact, over 99% of the visible universe is in the plasma state. Plasma physics explores these charged particles and their interactions under electric and magnetic fields, leading to some mind-blowing applications. For instance, in fusion research, scientists aim to harness the power of the Sun here on Earth by replicating the conditions found in stellar cores. If successful, nuclear fusion could provide an almost limitless and clean energy source. The behavior of plasma is governed by complex principles that blend aspects of electromagnetism, fluid dynamics, and quantum mechanics. One of the pioneering contributors to plasma theory was Hannes Alfvén, who introduced concepts like Alfvén waves, critical to understanding space plasmas. In space, plasma physics helps us decipher the Sun’s influence on Earth, from solar flares to the solar wind that shapes our magnetosphere. These studies are crucial for space exploration and protecting our satellites and astronauts from harmful solar radiation.",
    content3: "Plasma physics isn’t just theoretical; it’s a field bursting with practical innovations. Plasma technologies are revolutionizing industries, from semiconductor manufacturing to medical treatments. For instance, plasma etching is essential in producing microchips, and plasma-based sterilization techniques are advancing healthcare. As we dive deeper into the mysteries of plasma, we uncover not only the fundamental workings of the universe but also cutting-edge technologies that can transform our world. This dynamic and electrifying field continues to push the boundaries of what we know and what we can achieve.",
    videoLink: "https://www.youtube.com/embed/AVEGJZxglIg?si=O-zorKyJpT0Azssa"
  },
  5: {
    id: 5,
    title: "Gyroscopic Motion",
    content1: "Gyroscopic motion—this is where physics gets really exciting and spins into action. Gyroscopes are devices that utilize the principles of angular momentum to maintain orientation, and they’ve been captivating scientists and engineers since the 19th century. Picture a spinning top or a bicycle wheel—these are simple examples of gyroscopes in action. When spinning, they exhibit an uncanny ability to resist changes to their axis of rotation, a phenomenon first mathematically described by the French physicist Léon Foucault in the 1850s.",
    content2: "The magic behind gyroscopic motion lies in angular momentum. When a gyroscope spins, it creates a vector quantity pointing along its axis of rotation. This angular momentum remains constant unless acted upon by an external torque, a concept encapsulated in Newton's First Law of Motion but applied to rotational dynamics. It’s like a dancer spinning with arms outstretched—once they pull their arms in, they spin faster due to the conservation of angular momentum. This principle is crucial in everything from the stability of bicycles to the navigation systems of aircraft and spacecraft.  Gyroscopic motion isn't just a cool trick—it's the backbone of modern technology. In navigation, gyroscopes are essential. Mechanical gyroscopes, with their spinning rotors, have been used for decades in ships and airplanes to provide reliable direction. But it doesn't stop there—modern devices like smartphones and game controllers use MEMS (Micro-Electro-Mechanical Systems) gyroscopes to detect orientation and motion. These tiny sensors pack the same principles into minuscule chips, enabling everything from smooth video stabilization to immersive virtual reality experiences.",
    content3: "But the wonders of gyroscopic motion go beyond gadgets and navigation. They play a pivotal role in understanding the dynamics of rotating celestial bodies and stabilizing satellites in space. Engineers design gyroscopic systems for space missions to ensure that satellites maintain their intended orientations. Gyroscopes even help in the study of the Earth’s rotation and in maintaining the precision of instruments like telescopes. From the physics lab to the vast expanse of space, gyroscopic motion demonstrates the incredible power of rotational dynamics and continues to spin our understanding of the world in new and fascinating directions.",
    videoLink: "https://www.youtube.com/embed/ty9QSiVC2g0?si=3PhzFxHjjt6yYssY"
  },
  6: {
    id: 6,
    title: "Quantum Mechanics",
    content1: "Quantum mechanics—now this is where physics gets truly mind-blowing. This field explores the fundamental nature of reality at the smallest scales, where particles behave in ways that defy classical intuition. Developed in the early 20th century by pioneers like Max Planck, Niels Bohr, and Albert Einstein, quantum mechanics fundamentally transformed our understanding of the universe. It starts with the concept that energy is quantized, meaning it comes in discrete packets called quanta, a revelation that earned Planck the Nobel Prize in 1918. One of the cornerstones of quantum mechanics is the wave-particle duality. This principle, demonstrated by experiments like the famous double-slit experiment, shows that particles such as electrons and photons exhibit both wave-like and particle-like properties. Imagine electrons behaving like waves, creating interference patterns, yet also behaving like particles, hitting a detector one at a time. This duality challenges our classical perceptions and introduces the idea that particles don’t have definite positions or velocities until measured—a concept encapsulated in Werner Heisenberg’s uncertainty principle.",
    content2: "The strangeness doesn’t stop there. Quantum mechanics also introduces the phenomenon of superposition, where particles can exist in multiple states simultaneously until observed. Think of Schrödinger’s cat, a thought experiment where a cat in a box is both alive and dead until the box is opened and the state is observed. This leads us to quantum entanglement, described by Einstein as “spooky action at a distance.” When particles become entangled, the state of one instantly influences the state of the other, no matter how far apart they are. This phenomenon has been experimentally confirmed and even leveraged in emerging technologies like quantum computing and quantum cryptography.",
    content3: "Quantum mechanics isn’t just a theoretical curiosity—it’s the foundation of modern technology. Semiconductors, lasers, MRI machines, and much more all rely on principles of quantum mechanics. It’s the science behind the scenes that makes modern electronics possible and is paving the way for revolutionary advancements like quantum computers, which promise to solve problems that are currently intractable for classical computers. As we continue to probe the quantum realm, we uncover deeper layers of reality, challenging our understanding and pushing the boundaries of what we thought possible. Quantum mechanics isn’t just a field of study; it’s a journey into the very fabric of the universe.",
    videoLink: "https://www.youtube.com/embed/WIyTZDHuarQ?si=mM4W9QDJEkh3zmbZ"
  }
};


// Dummy data for Theory-cards
const Theorycards = {
  1: {
    id: 1,
    title: "String Theory",
    content1: "Hey, ever wondered what the universe is truly made of? Enter string theory, a revolutionary idea in theoretical physics suggesting that reality is composed of infinitesimal vibrating strings. These strings are far smaller than atoms, electrons, or even quarks. As these strings vibrate, twist, and fold, they generate effects in numerous tiny dimensions. These vibrations are interpreted by humans as everything from the fundamental particles in particle physics to the large-scale phenomena we observe, like gravity. It’s like the universe is a cosmic symphony, with each string playing a note that creates the fabric of reality.",
    content2: "String theory has been hailed as a potential 'theory of everything', a framework that could unite the seemingly incompatible realms of general relativity and quantum mechanics. Quantum mechanics excels at describing the behavior of the very small, like atoms and subatomic particles, while general relativity beautifully explains the dynamics of the very large, such as stars and galaxies. However, these two foundational theories don’t mesh well together. String theory offers a tantalizing possibility: by viewing particles as tiny strings vibrating in multiple dimensions, it might reconcile these two pillars of modern physics, solving one of the most profound problems in science.  Despite its initial promise and the excitement it generated in the late 1960s and '70s, string theory’s journey has been tumultuous. Pioneers like John Schwarz, one of its founders, recall the fluctuations in its popularity among theoretical physicists. There were countless papers, conferences, and chalkboard sessions, but the groundbreaking unification many hoped for remains elusive. The breathtaking breakthrough seems further away than ever, leading to debates and doubts within the scientific community. However, the intense exploration of string theory has profoundly impacted both physics and mathematics, sparking new ideas and approaches that have left a lasting legacy.",
    content3: "Whether physicists embrace it or critique it, string theory has undeniably left a deep imprint on the scientific landscape. It has inspired a generation of researchers to think beyond the conventional boundaries of space and time, exploring the universe's most fundamental nature. Even as the ultimate validation of string theory remains out of reach, its concepts and mathematical frameworks continue to influence and inspire. In the grand quest to understand the cosmos, string theory stands as a bold and imaginative endeavor, pushing the frontiers of human knowledge and challenging our perception of reality itself.",
    videoLink: "https://www.youtube.com/embed/TI6sY0kCPpk?si=JyTj_yyVDb9gqljS",
  },
  2: {
    id: 2,
    title: "Beauty of Time",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/e-P5IFTqB98?si=m_gGnGThip6-pSEn"
  },
  3: {
    id: 3,
    title: "Chaos Theory",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/QAa2O_8wBUQ?si=7gqAc5ym0QeADxzt"
  },
  4: {
    id: 4,
    title: "Solipsism",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/AVEGJZxglIg?si=O-zorKyJpT0Azssa"
  },
  5: {
    id: 5,
    title: "Phenomenalism",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/ty9QSiVC2g0?si=3PhzFxHjjt6yYssY"
  },
  6: {
    id: 6,
    title: "Superfluid space-time",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/WIyTZDHuarQ?si=mM4W9QDJEkh3zmbZ"
  },
  7: {
    id: 7,
    title: "Bootstrap Paradox",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/WIyTZDHuarQ?si=mM4W9QDJEkh3zmbZ"
  },
  8: {
    id: 8,
    title: "Einstein's twin paradox",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/WIyTZDHuarQ?si=mM4W9QDJEkh3zmbZ"
  },
  9: {
    id: 9,
    title: "The Billiard ball paradox",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/WIyTZDHuarQ?si=mM4W9QDJEkh3zmbZ"
  },
  10: {
    id: 10,
    title: "Infinite hotel Paradox",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/WIyTZDHuarQ?si=mM4W9QDJEkh3zmbZ"
  },
  11: {
    id: 11,
    title: "Zeno's Racetrack Paradox",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/WIyTZDHuarQ?si=mM4W9QDJEkh3zmbZ"
  },
  12: {
    id: 12,
    title: "Boltzmann Brain Paradox",
    content1: "",
    content2: "",
    content3: "",
    videoLink: "https://www.youtube.com/embed/WIyTZDHuarQ?si=mM4W9QDJEkh3zmbZ"
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

// Route to get card by ID for theory/paradoxes
app.get('/theorycards/:id', (req, res) => {
  const { id } = req.params;
  const Theorycard = Theorycards[id];

  if (Theorycard) {
    res.json(Theorycard);
  } else {
    res.status(404).json({ error: "Theory Card not found" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
