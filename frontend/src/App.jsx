import { useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import CardDetail from './CardDetail';
import TheoryCardDetail from './TheoryCardDetail';

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
import paradox6Img from './assets/paradox6.jpg';

const cardsData = [
  {
    image: gravityImg,
    title: 'Gravity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    buttonText: 'Learn More',
  },
  {
    image: relativityImg,
    title: 'Relativity',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    buttonText: 'Learn More',
  },
  {
    image: BlackholeImg,
    title: 'Black Holes',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    buttonText: 'Learn More',
  },
  {
    image: darkmatterImg,
    title: 'Dark Matter',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    buttonText: 'Learn More',
  },
  {
    image: plasmaImg,
    title: 'Plasma Physics',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    buttonText: 'Learn More',
  },
  {
    image: GyroscopeImg,
    title: 'Gyroscopic Motion',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    buttonText: 'Learn More',
  },
  {
    image: quantomImg,
    title: 'Quantum Mechanics',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    buttonText: 'Learn More',
  },
];

const theoryCardData1 = [
  {
    title: 'String Theory',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: theory1Img,
    id:1,
  },
  {
    title: 'Beauty of Time',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: theory2Img,
    id:2,
  },
];

const theoryCardData2 = [
  {
    title: 'Chaos Theory',
    content: 'Lorem ipsum dolor sit amet, consectetur adipi',
    image: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*6ehwW04jwunImzrhYKRlbQ.gif',
    id:3,
  },
  {
    title: 'Solipsism',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore ',
    image: theory4Img,
    id:4,
  },
];

const theoryCardData3 = [
  {
    title: 'Phenomenalism',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: theory5Img,
    id:5,
  },
  {
    title: 'Superfluid space-time',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: theory6Img,
    id:6,
  },
];

const paradoxData1 = [
  {
    title: 'Bootstrap Paradox',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: paradox1Img,
    id:7,
  },
  {
    title: "Einstein's twin paradox",
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: paradox2Img,
    id:8,
  },
];

const paradoxData2 = [
  {
    title: 'The billiard ball paradox',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: paradox3Img,
    id:9,
  },
  {
    title: 'Infinite hotel Paradox',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: paradox6Img,
    id:10,
  },
];

const paradoxData3 = [
  {
    title: "Zeno's Racetrack Paradox",
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: 'https://img.freepik.com/premium-photo/closeup-portrait-medieval-knight-black-backgroundgenerative-ai_391052-18569.jpg',
    id:11,
  },
  {
    title: 'Boltzmann Brain Paradox',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
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

    <h4 className="section5 d-flex align-items-center justify-content-center text-center">
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
 
    <TitleWithAnimation title="Last thing" />
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
