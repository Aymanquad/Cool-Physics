const express = require("express");
const app = express();
const mongoose = require('mongoose');
const cors = require("cors");
const PORT = "mongodb+srv://mohammedaymanquadri:Ayman2004@cluster0.txcvfxs.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/CoolPhysics";

const Cards = require('./models/Card');
const cardController = require('./controllers/card'); 

// Middleware
app.use(cors());
app.use(express.json());

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
    content1: "Presentism: Time is something that we perceive as a matter of course, if we view it at the moment, we usually divide it into past, present, and future. Presentism argues that the past and the future are imagined concepts, while only the present is real. In other words, today’s breakfast and every word of this article will cease to exist after you have read it, until you open it again. The future is just as imaginary because time cannot exist before and after it happened, as claimed by St. Augustine.  This viewpoint emphasizes the ephemeral beauty of each moment, underscoring the importance of the here and now. It suggests that life is a series of fleeting, yet deeply significant, experiences that vanish as quickly as they arrive. In this sense, Presentism can be seen as an invitation to fully immerse ourselves in the present, to appreciate each second as it comes, and to recognize the transience that defines our existence. By focusing solely on the present, we may find a greater sense of peace and mindfulness, living each day with a heightened awareness of the immediate world around us.",
    content2: "Eternalism: Eternalism is the exact opposite of Presentism. This is a philosophical theory that says that time is multi-layered. It can be compared to a pound cake (however, unlike time, a biscuit is not up for philosophical debate). All time exists simultaneously, but the measurement is determined by the observer. What he sees depends on which point he is looking at. Thus, dinosaurs, World War II, and Michael Jackson all exist simultaneously but can only be observed from a specific location. If one takes this view of reality, then the future is hopeless, and deterministic free will is illusory.",
    content3: "In embracing Eternalism, we step into a universe where the past, present, and future are all woven into a single, unchanging tapestry. This perspective can be both awe-inspiring and daunting. It implies that every moment, every action, and every event is permanently etched into the fabric of time. While this challenges our conventional notions of free will and change, it also offers a profound sense of continuity and permanence. By seeing time as a vast, layered continuum, we may gain a deeper appreciation for the interconnectedness of all things, recognizing that each moment we experience is a part of an eternal, cosmic design.",
    videoLink: "https://www.youtube.com/embed/wwSzpaTHyS8?si=b6dH1uZP-Dp_8TCF"
  },
  3: {
    id: 3,
    title: "Chaos Theory",
    content1: "By the end of the 20th century, precisely in 1970, a groundbreaking theory began to captivate the scientific community, with many mathematicians heralding it as the key to unlocking the universe's deepest mysteries. This was Chaos Theory, a paradigm shift that challenged the deterministic view of the world. Chaos Theory suggests that the universe is not as orderly as we might like to believe. Instead, it posits that even the most minute changes in initial conditions can lead to wildly different outcomes, making long-term prediction an intricate dance with the unknown.  Have you ever read “alternative history” novels that explore 'what if' scenarios? These stories often hinge on a small change in historical events, leading to an entirely different future. As fantastical as it sounds, this is the essence of Chaos Theory. The theory tells us that in deterministic systems—where outcomes are theoretically predictable if you know all the variables—a tiny alteration in the initial conditions can cause dramatic and unpredictable results. This sensitivity to initial conditions is often referred to as the 'butterfly effect,' famously illustrated by Edward Lorenz, who noted that the flap of a butterfly’s wings in Brazil could set off a tornado in Texas.",
    content2: "Edward Lorenz, the mathematician who pioneered Chaos Theory, stumbled upon this concept while modeling atmospheric convection. He developed a simple 3D model with parameters σ, ρ, and β, and variables x, y, and z dependent on time. By integrating these equations with specific initial values, Lorenz discovered that the trajectories never overlapped and the system never returned to the same point twice. This phenomenon, known as a 'strange attractor,' revealed that chaotic systems have a fractal structure, exhibiting self-similarity at every scale. The same intricate patterns appear no matter how closely you examine them, underscoring the unpredictable yet deterministic nature of chaotic systems.",
    content3: "Chaos Theory introduces us to the mesmerizing world of strange attractors and fractals. An attractor is a set towards which a dynamical system evolves over time. In chaotic systems, strange attractors are particularly intriguing because they exhibit fractal geometry. This means that no matter how much you zoom in on the pattern, it always looks the same—infinitely detailed and self-replicating. This fractal nature of strange attractors highlights the beauty and complexity of chaos. Despite the sensitive dependence on initial conditions, once a system enters a strange attractor, it remains within its bounds, with nearby points diverging yet never escaping.  The graph of the Lorenz attractor, often resembling a butterfly, perfectly encapsulates the beauty and complexity of Chaos Theory. At any given moment, the precise location and trajectory of a particle within this attractor are indeterminable, no matter how well previous conditions are known. This is the butterfly effect in action: a butterfly flapping its wings in one part of the world can set off a chain of events leading to a hurricane elsewhere. Chaos Theory fundamentally changes our understanding of the universe, revealing that order and disorder are intricately linked, and even the smallest actions can have profound and far-reaching effects.",
    videoLink: "https://www.youtube.com/embed/fDek6cYijxI?si=yD1mn-oUCoRkQ2Y-"
  },
  4: {
    id: 4,
    title: "Solipsism",
    content1: "Solipsism is a philosophical theory that boldly asserts that nothing exists beyond an individual's consciousness. At first glance, this idea might seem absurd—who would entirely deny the existence of the world around us? However, when you really ponder it, you'll find it's incredibly difficult to verify anything beyond your own conscious experience. Imagine trying to prove that anything outside your mind is real—it's a challenge that quickly becomes apparent the deeper you dive into it. Think about the dreams you've had throughout your life. Isn't it possible that everything around you is nothing but an incredibly intricate dream? While we usually trust our senses—hearing, seeing, smelling, tasting, and touching—to confirm the reality of the world, solipsism challenges this trust. Consider people under the influence of LSD who report touching the most convincing hallucinations, yet we don't accept their visions as reality. Similarly, our dreams can simulate sensations so vividly that they seem real until we wake up. This raises an intriguing question: if our brains can create such convincing illusions, how can we be sure that what we perceive as reality isn't just another elaborate dream?",
    content2: "Solipsism pushes us to question the very foundation of our perceived reality. If everything we experience is filtered through our brain's interpretation, then what can we truly be certain of? The answer, according to solipsism, is nothing external to our consciousness. The chicken we ate for dinner, the keyboard beneath our fingers—these might all be constructs of our mind. Each individual can only be absolutely sure of their own thoughts and existence. This perspective can be both unsettling and liberating, as it places the self at the center of reality, making our inner experiences the only undeniable truth.",
    content3: "As you contemplate solipsism, you might find it opens up a vast realm of philosophical exploration. It challenges you to consider the nature of existence and the limits of human perception. While solipsism may never be universally accepted, it serves as a powerful reminder of the profound mysteries that underlie our everyday experiences. It invites us to reflect on the nature of reality and our place within it, urging us to embrace a deeper level of introspection and skepticism about the world we often take for granted.",
    videoLink: "https://www.youtube.com/embed/L45Q1_psDqk?si=qhpK9o7I5gAsYBqM"
  },
  5: {
    id: 5,
    title: "Phenomenalism",
    content1: "Everyone has wondered at some point: what happens to things when we aren’t looking at them? Scientists and philosophers alike have pondered this question, leading to some fascinating conclusions. Phenomenalism, a philosophical theory, suggests a startling answer—objects exist only as phenomena of consciousness. In other words, your laptop exists only while you are aware of it and believe in its existence. When you turn away, it ceases to exist until you or someone else interacts with it again. This theory asserts that there is no existence without perception, making consciousness the foundation of reality.",
    content2: "Phenomenalism challenges our conventional understanding of the world. Imagine you place a book on a table and leave the room. According to phenomenalism, the book's existence is tied to your awareness of it. Once you leave, the book doesn't merely sit there waiting for your return; instead, it ceases to exist in any meaningful way until it is once again perceived. This idea can seem counterintuitive, as we are accustomed to thinking of the world as existing independently of our perception. Yet, phenomenalism invites us to reconsider this assumption, suggesting that our consciousness plays a fundamental role in shaping reality.  This perspective has profound implications. If objects only exist when perceived, then reality is constantly fluctuating based on our awareness. This idea aligns intriguingly with certain interpretations of quantum mechanics, where the act of observation affects the state of particles. Phenomenalism takes this concept further, applying it to everyday objects and experiences. It proposes a world where existence is not a static backdrop but a dynamic interplay of perception and awareness. This can be both a disorienting and enlightening way to view the universe, emphasizing the power and importance of our conscious experience.",
    content3: "As you delve into phenomenalism, you might find it reshapes your understanding of existence. It suggests that reality is not an objective entity existing independently of us but a phenomenon intricately linked to our perception. This theory encourages a deeper appreciation of the role our minds play in constructing the world we experience. Whether or not you fully embrace phenomenalism, it offers a fascinating lens through which to explore the nature of reality, challenging us to question the assumptions we often take for granted and to consider the profound connection between consciousness and existence.",
    videoLink: "https://www.youtube.com/embed/8VzDr7bgZwY?si=cYCIgtgRiO4jPF6u"
  },
  6: {
    id: 6,
    title: "Superfluid space-time",
    content1: "The theory of Superfluid Space-Time introduces a revolutionary concept where space-time behaves like a superfluid substance, flowing without friction. Imagine the very fabric of the universe as a perfect liquid, seamlessly gliding through the cosmos. This idea suggests that if the universe is rotating, it could create vortices within this superfluid medium, potentially seeding the formation of galaxies. This dynamic vision of space-time adds a fascinating layer to our understanding of the universe's structure and evolution. Superfluidity is a phase of matter characterized by zero viscosity, meaning it can flow without energy loss. Liquid helium, for instance, exhibits superfluidity at extremely low temperatures, demonstrating bizarre behaviors like climbing up container walls and flowing through cracks without resistance. Applying this concept to space-time suggests a frictionless medium where cosmic structures can form and evolve without the usual constraints. This could provide a novel mechanism for galaxy formation, complementing existing theories and offering new insights into the large-scale organization of the cosmos.",
    content2: "One of the most compelling aspects of Superfluid Space-Time is its potential to explain gravitational interactions and cosmic phenomena. Traditional physics views gravity as the curvature of space-time caused by mass and energy, as described by Einstein's General Theory of Relativity. However, if space-time itself is a superfluid, these curvatures might involve dynamic flows and vortices, adding complexity to gravitational models. This perspective could shed light on enigmatic phenomena like dark matter and dark energy, which remain some of the most profound mysteries in cosmology.",
    content3: "Exploring the theory of Superfluid Space-Time challenges us to rethink our fundamental assumptions about the universe. It transforms our view of space-time from a static backdrop to a dynamic, fluid entity constantly in motion. This bold idea pushes the boundaries of scientific inquiry and invites us to imagine new possibilities for understanding the cosmos. Whether this theory will be confirmed by future research or remain a tantalizing hypothesis, it undoubtedly enriches our quest to unravel the secrets of the universe, reminding us that the path to discovery is filled with awe-inspiring and unexpected revelations.",
    videoLink: "https://www.youtube.com/embed/Ia2GwIpEdk4?si=C45k5feoKpfdGXCa"
  },
  7: {
    id: 7,
    title: "Bootstrap Paradox",
    content1: "The Bootstrap Paradox is one of the most fascinating and perplexing concepts in the realm of time travel. It poses a scenario where an object or piece of information is sent back in time, ultimately creating a loop where its origin becomes impossible to determine. Imagine you receive a mysterious book containing detailed instructions on how to build a time machine. You follow these instructions, build the machine, and then travel back in time to give the book to your younger self. The question arises: who actually wrote the book? This paradox challenges our understanding of causality and the very fabric of reality. One of the most iconic examples of the Bootstrap Paradox is in science fiction, particularly in the 'Doctor Who' series. The Doctor receives a valuable piece of knowledge from his future self and then ensures to pass it back to his past self in a continuous loop. This scenario creates a closed time loop where the information has no clear point of origin—it simply exists. This paradox is named after the idiom 'pulling oneself up by one's bootstraps,' symbolizing an impossible action since the knowledge or object appears to come from nowhere.",
    content2: "The implications of the Bootstrap Paradox extend beyond just fun storytelling; they delve deep into the nature of time and causality. If such paradoxes were possible, they would suggest that time is not linear and deterministic as we typically perceive it. Instead, it would be more fluid and flexible, allowing for events to influence their own past. This challenges our conventional understanding of cause and effect, suggesting that the past, present, and future are interconnected in ways we cannot easily comprehend.",
    content3: "Exploring the Bootstrap Paradox opens up a Pandora's box of philosophical and scientific questions. It forces us to consider the possibility of multiple timelines, alternate realities, and the nature of free will. Are our actions predetermined by future events, or do we have the power to change our destiny? While the Bootstrap Paradox may remain an unsolved mystery, it serves as a powerful reminder of the complexities of time travel and the profound mysteries that still await discovery. It captivates the imagination and invites us to question the very nature of existence and our place within the fabric of the universe.",
    videoLink: "https://www.youtube.com/embed/Pp5VjZ3uhMc?si=E2sug_vy62ryTsqZ"
  },
  8: {
    id: 8,
    title: "Einstein's twin paradox",
    content1: "The Twin Paradox is one of the most captivating and counterintuitive concepts in Einstein's theory of special relativity. Imagine two twins: one stays on Earth while the other embarks on a journey through space at near-light speed. According to the principles of time dilation, the traveling twin would experience time much more slowly compared to the twin who remains on Earth. This means that upon the traveling twin's return, they would be significantly younger than their Earth-bound sibling. It’s a paradox that challenges our everyday understanding of time and reality. At the heart of the Twin Paradox lies the phenomenon of time dilation, a cornerstone of special relativity. Time dilation occurs because, according to Einstein, the speed of light is constant for all observers, regardless of their motion. As a result, time must adjust to ensure that this cosmic speed limit remains unbroken. For the twin zooming through space, time effectively 'slows down' relative to the twin who stays behind. This isn't just theoretical—experiments with atomic clocks on high-speed jets have confirmed that clocks moving at high velocities tick slower than those at rest.",
    content2: "The paradox becomes even more intriguing when we consider the implications for space travel. If we ever develop the technology for near-light-speed travel, astronauts could journey to distant stars and return home to find that decades or even centuries have passed on Earth, while they have only aged a few years. This opens up profound questions about the nature of time, aging, and the human experience. It also highlights the non-intuitive nature of relativity, where moving faster actually means experiencing less time.",
    content3: "Einstein’s Twin Paradox isn't just a thought experiment; it’s a profound insight into the fabric of our universe. It challenges us to rethink our assumptions about time and space, revealing a reality that is far stranger and more fascinating than we might have imagined. The Twin Paradox serves as a testament to the power of theoretical physics to stretch the boundaries of human understanding and imagination, reminding us that the universe holds many more mysteries waiting to be uncovered.",
    videoLink: "https://www.youtube.com/embed/9APgUhdTxfg?si=tV-w6Q8BGkFTWXMQ"
  },
  9: {
    id: 9,
    title: "The Billiard ball paradox",
    content1: "Who doesn’t love a good old-fashioned time paradox? The Billiard's Ball Paradox, proposed by theoretical physicist Joseph Polchinski, is a tantalizing thought experiment that delves into the perplexities of time travel and causality. Imagine a billiard ball tossed through a wormhole at a certain angle, allowing it to travel back in time. Due to the trajectory, the ball then strikes its past self, knocking it off course before it can enter the wormhole, travel back in time, and strike itself. This paradox creates a loop that defies our conventional understanding of cause and effect. At the heart of this paradox lies a challenge to the very nature of time travel. If the ball knocks itself off course, it would never enter the wormhole in the first place, thereby avoiding the collision. But if it doesn't enter the wormhole, it can’t travel back to knock itself off course. This scenario creates a self-contradictory loop that seems impossible to resolve, highlighting the potential inconsistencies and logical conundrums associated with time travel.",
    content2: "Polchinski's Billiard's Ball Paradox also brings to light the concept of self-consistency in time travel. Some physicists suggest that time travel might be possible if all actions are self-consistent—that is, any actions taken by a time traveler (or a billiard ball) would have to be compatible with the traveler's history. This implies that even if the ball travels back in time, it would need to avoid creating a paradox by ensuring that any interaction with its past self does not alter the course of events in a contradictory manner. This idea, though speculative, offers a potential way to reconcile time travel with logical consistency.",
    content3: "The Billiard's Ball Paradox captivates our imagination by pushing the boundaries of what we know about time, causality, and the universe. It serves as a reminder of the profound mysteries and complexities that still lie beyond our current scientific understanding. Whether time travel remains a theoretical curiosity or becomes a tangible reality in the future, the paradox invites us to ponder the enigmatic nature of time and the intricate dance of cause and effect that shapes our world. It stands as a testament to the enduring allure of theoretical physics and the endless quest to unravel the secrets of the cosmos.",
    videoLink: "https://youtube.com/embed/byctbiry53A?si=BiFdW0T4I3g1G9OQ"
  },
  10: {
    id: 10,
    title: "Infinite hotel Paradox",
    content1: "The Infinite Hotel Paradox, also known as Hilbert's Paradox of the Grand Hotel, is a thought experiment proposed by German mathematician David Hilbert to illustrate the counterintuitive properties of infinity. Imagine a hotel with an infinite number of rooms, all of which are occupied. Now, suppose a new guest arrives and wishes to stay the night. Intuitively, one might think the hotel is full, yet the paradox shows us how to accommodate the new guest: simply move the occupant of room 1 to room 2, the occupant of room 2 to room 3, and so on. In this way, room 1 becomes vacant, ready to welcome the new guest. The paradox doesn't stop there. Suppose an infinite number of new guests arrive, each wanting a room. Again, the hotel's infinite capacity comes to the rescue. By moving the occupant of room 1 to room 2, room 2 to room 4, room 3 to room 6, and so on (essentially moving each guest from room n to room 2n), all odd-numbered rooms become available for the new infinite influx of guests. This paradox highlights the mind-boggling nature of infinity, showing that an infinite set can still be expanded and rearranged in ways that defy our everyday logic.",
    content2: "The Infinite Hotel Paradox also provides profound insights into the concept of different sizes of infinity. While all the rooms in the hotel represent a countably infinite set (like the set of natural numbers), the paradox hints at the existence of uncountably infinite sets (like the set of real numbers). The ability to accommodate more guests, regardless of the hotel being full, demonstrates the strange and non-intuitive properties of infinite sets, challenging our perceptions of space, capacity, and mathematics itself.",
    content3: "Hilbert’s thought experiment is more than just a mathematical curiosity; it pushes the boundaries of how we understand infinity and its implications. The Infinite Hotel Paradox serves as a powerful tool in set theory and mathematical logic, helping to illustrate the peculiar nature of infinite quantities. It reminds us that infinity is not just a large number, but a concept that can lead to surprising and paradoxical conclusions. The paradox continues to fascinate mathematicians, philosophers, and anyone intrigued by the mysteries of the infinite.",
    videoLink: "https://www.youtube.com/embed/OxGsU8oIWjY?si=h98rWlb4cmd3aXrh"
  },
  11: {
    id: 11,
    title: "Zeno's Racetrack Paradox",
    content1: "The Racetrack Paradox, part of Zeno's famous paradoxes, challenges our very understanding of motion and distance. Imagine a runner on a straight racetrack aiming to reach the finish line. According to Zeno's paradox, the runner must first cover half the distance to the goal. Once there, they must then cover half of the remaining distance, and so on. If the goal is one meter away, the runner must cover 1/2 meter, then 1/4 meter, then 1/8 meter, ad infinitum. Zeno argued that because this process involves an infinite number of steps, the runner can never actually reach the finish line. This paradox suggests that motion is impossible because the infinite sequence of tasks cannot be completed.",
    content2: "Zeno's reasoning, as Aristotle noted, essentially states that the sum of these infinite distances is infinite, making the goal unattainable. This paradox, like Zeno's Achilles Paradox, brings into question the nature of infinity and our understanding of continuous motion. However, modern mathematics offers a resolution through the concept of convergent series. According to the standard solution, the infinite series of distances (1/2 + 1/4 + 1/8 + ...) converges to a finite sum of one meter. This means that despite the infinite number of steps, the total distance is finite, allowing the runner to reach the finish line. The paradox also has a regressive version, which posits that the runner cannot even start the race. To take the first step, the runner must first take a half-step, but before that, a quarter-step, and so on. This infinite regression implies that motion cannot begin. This version highlights the same fundamental issue: the division of space into infinitely many parts. Yet, the assumption that runners occupy point places rather than volumes makes the paradox stronger but equally puzzling.",
    content3: "Advances in calculus and the theory of sets by mathematicians like Bolzano, Dedekind, and Cantor have further illuminated this paradox. They revealed that the set of points the runner must reach is an actually infinite set, not a potentially infinite one. This understanding aligns with the mathematical framework that the infinite series of distances converges to a finite length. Thus, Zeno's Racetrack Paradox, while initially perplexing, showcases the deep and fascinating relationship between infinity, motion, and mathematics. It continues to intrigue and challenge our perceptions, reminding us of the complexities and wonders of the universe.",
    videoLink: "https://www.youtube.com/embed/skM37PcZmWE?si=3TKlJRh5SznuEu-T"
  },
  12: {
    id: 12,
    title: "Boltzmann Brain Paradox",
    content1: "The Boltzmann Brain Paradox is one of the most mind-bending and thought-provoking concepts in theoretical physics. Named after the Austrian physicist Ludwig Boltzmann, this paradox arises from the consideration of entropy and random fluctuations in an infinite universe. Boltzmann proposed that, given enough time, random fluctuations could create ordered structures out of chaos. Extending this idea, the paradox suggests that, given a vast and old enough universe, it is statistically more likely for self-aware entities, or 'Boltzmann Brains,' to spontaneously emerge from random fluctuations than for a whole universe like ours to exist.",
    content2: "Imagine a brain, complete with thoughts, memories, and a sense of self, suddenly coming into existence due to random quantum fluctuations. This brain might believe it has lived a full life, experienced relationships, and pondered the mysteries of the cosmos, all while being a fleeting momentary blip in the vastness of the universe. The paradox questions the very nature of our existence and consciousness, suggesting that it might be more probable that we are such Boltzmann Brains rather than beings living in a stable, consistent reality. This paradox strikes at the heart of our understanding of probability and the nature of the universe. It raises profound questions about the reliability of our observations and experiences. If the Boltzmann Brain scenario were true, it would imply that our perceptions of a coherent, persistent universe are just illusions created by random chance. However, this leads to a self-defeating proposition: if we are Boltzmann Brains, then the laws of physics that predict their existence are unreliable, making the entire premise suspect.",
    content3: "Despite its unsettling implications, the Boltzmann Brain Paradox also highlights the importance of understanding entropy and the arrow of time. It challenges physicists and philosophers to refine their models of the universe and the nature of consciousness. While the paradox remains a speculative thought experiment, it continues to inspire debates and investigations into the fundamental nature of reality, consciousness, and the universe. Ultimately, the Boltzmann Brain Paradox serves as a profound reminder of the strange and counterintuitive possibilities that arise when we grapple with the infinite. It pushes us to question the very fabric of existence and our place within it, making us ponder whether our reality is as stable and secure as it seems.",
    videoLink: "https://www.youtube.com/embed/OpohbXB_JZU?si=BGhASQVfKB3g0m6A"
  }
};



// Route to get card by ID
app.get('/cards/:id', (req, res) => {
  const { id } = req.params;
  //const card = cards[id];

  
  Cards.findOne({ id: id.trim() })
    .then(card => {
      if (card) {
        res.json(card);
      } else {
        res.status(404).json({ error: "Card not found" });
      }
    })
    .catch(error => {
      console.log("some err occured in finding");
      res.status(500).json({ message: 'Server error', error });
    });

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
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
mongoose.connect(PORT)
    .then(() => { 
        console.log('Connected to MongoDB !'); 

        //to add cards
        //cardController.addCard();

        app.listen(5000);
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });
