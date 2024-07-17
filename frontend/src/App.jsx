import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CardDetail from './CardDetail';
import TheoryCardDetail from './TheoryCardDetail';
import MasonryLayout from './MasonryLayout'; 

import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import FourthSection from './section4';
import TitleWithAnimation from './title';
import CardSection from './cards-section';
import TheoryCards from './TheoryCards';
// In your index.js or App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'intersection-observer';

import gravityImg from './assets/gravity-img.jpg';
import relativityImg from './assets/relativity-img.jpg';
import BlackholeImg from './assets/blackhole-img.jpg';
import quantomImg from './assets/quantommech.jpg';
import darkmatterImg from './assets/darkmatter-img.jpg';
import plasmaImg from './assets/plasma-img.jpg';
import GyroscopeImg from './assets/gyroscope-img.jpg';

import theory1Img from './assets/theory1.webp';
import theory2Img from './assets/theory2.jpg';
import theory4Img from './assets/theory4.jpg';
import theory5Img from './assets/theory5.jpg';
import theory6Img from './assets/theory6.jpeg';
import paradox1Img from './assets/paradox1.jpg';
import paradox2Img from './assets/paradox2.jpg';
import paradox3Img from './assets/paradox3.jpg';
import paradox4Img from './assets/paradox4.jpg';
import paradox5Img from './assets/paradox5.jpg';
import paradox6Img from './assets/paradox6.jpg';


const cardsData = [
  {
    image: gravityImg,
    title: 'Gravity',
    text: 'Gravity, an invisible force that holds planets, stars, and galaxies together and governs the motion of everything in the universe, pulling objects towards each other',
    buttonText: 'Learn More',
  },
  {
    image: relativityImg,
    title: 'Relativity',
    text: 'Relativity revolutionizes our understanding of space and time, revealing that they are intertwined and can bend, stretch, and warp depending on speed and gravity.',
    buttonText: 'Learn More',
  },
  {
    image: BlackholeImg,
    title: 'Black Holes',
    text: 'Black holes are cosmic enigmas with gravitational pulls so strong that not even light can escape, warping spacetime and challenging our grasp of the universe.',
    buttonText: 'Learn More',
  },
  {
    image: darkmatterImg,
    title: 'Dark Matter',
    text: "Dark matter is the unseen substance that makes up most of the universe's mass , mysteriously holding all the galaxies together while eluding direct detection.",
    buttonText: 'Learn More',
  },
  {
    image: plasmaImg,
    title: 'Plasma Physics',
    text: ' Plasma physics explores the fourth state of matter , where ionized gases conduct electricity and create stunning phenomena like solar flares, auroras and more .',
    buttonText: 'Learn More',
  },
  {
    image: GyroscopeImg,
    title: 'Gyroscopic Motion',
    text: 'Gyroscopic motion demonstrates how spinning objects resist changes to their orientation, a principle utilized in everything from toys to spacecraft navigation.',
    buttonText: 'Learn More',
  },
  {
    image: quantomImg,
    title: 'Quantum Mechanics',
    text: 'Quantum physics dives into the bizarre world of subatomic particles, where probabilities rule, particles can be in multiple places at once, and observation alters reality.',
    buttonText: 'Learn More',
  },
];

const theoryCardData1 = [
  {
    title: 'String Theory',
    content: 'Infinitesimal vibrating strings forming the fabric of the universe.',
    image: theory1Img,
    id:1,
  },
  {
    title: 'Beauty of Time',
    content: "Time's nature: presentism's flow or eternalism's layers.",
    image: theory2Img,
    id:2,
  },
];

const theoryCardData2 = [
  {
    title: 'Chaos Theory',
    content: 'Tiny changes, massive consequences in deterministic systems.',
    image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*6ehwW04jwunImzrhYKRlbQ.gif',
    id:3,
  },
  {
    title: 'Solipsism',
    content: 'Only your consciousness is verifiable; everything else is uncertain!',
    image: theory4Img,
    id:4,
  },
];

const theoryCardData3 = [
  {
    title: 'Phenomenalism',
    content: 'Objects exist only through perception; if unseen, do they vanish ?',
    image: theory5Img,
    id:5,
  },
  {
    title: 'Superfluid space-time',
    content: 'Space-time flows without friction, possibly forming galactic vortices.',
    image: theory6Img,
    id:6,
  },
];

const paradoxData1 = [
  {
    title: 'Bootstrap Paradox',
    content: 'The most crazy paradox that will make you ponder for long ',
    image: paradox1Img,
    id:7,
  },
  {
    title: "Einstein's twin paradox",
    content: 'Traveling twin ages slower, returning younger due to relativity.',
    image: paradox2Img,
    id:8,
  },
];

const paradoxData2 = [
  {
    title: 'The billiard ball paradox',
    content: 'Time-traveling ball disrupting its own past trajectory ?',
    image: paradox3Img,
    id:9,
  },
  {
    title: 'Infinite hotel Paradox',
    content: 'Hotel with infinite rooms can always accommodate infinite guests. Or can they ?',
    image: paradox6Img,
    id:10,
  },
];

const paradoxData3 = [
  {
    title: "Zeno's Racetrack Paradox",
    content: 'Infinite steps required, motion seems impossible ?',
    image: paradox5Img,
    id:11,
  },
  {
    title: 'Boltzmann Brain Paradox',
    content: 'Random fluctuations could spontaneously create self-aware entities.',
    image: paradox4Img,
    id:12,
  },
];

const Home = () => (
  <>
    <Section1 />
    <Section2 />
    <Section3 />
    <FourthSection />

    <h4 className="section5 d-flex align-items-center justify-content-center text-center hind-regular">
      With these laws, you're halfway done with physics.
    </h4>

    <TitleWithAnimation title="Cool Topics" />

    <CardSection cards={cardsData} />

    <TitleWithAnimation title="Interesting Theories and Paradoxes" />

    <TheoryCards cards={theoryCardData1} order="default" />
    <TheoryCards cards={theoryCardData2} order="default" />
    <TheoryCards cards={theoryCardData3} order="default" />

    <div className="section5" />

    <h2 className="section5 d-flex align-items-center justify-content-center text-center">
      What is a Paradox?
    </h2>
    <h4 className="paradoxline d-flex align-items-center justify-content-center text-center">
      "A paradox is a statement that seems self-contradictory (or) absurd <br />  but ... in reality expresses a possible truth."
    </h4>

    <TheoryCards cards={paradoxData1} order="reverse" />
    <TheoryCards cards={paradoxData2} order="reverse" />
    <TheoryCards cards={paradoxData3} order="reverse" />
 
    <TitleWithAnimation title="More Mind-Danling Concepts" />

    <MasonryLayout />
  </>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards/:id" element={<CardDetail />} />
        <Route path="/theorycards/:id" element={<TheoryCardDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
