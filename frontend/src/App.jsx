import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import FourthSection from './section4'
import TitleWithAnimation from './title';
import CardSection from './cards-section';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'intersection-observer';

import gravityImg from './assets/gravity-img.jpg';
import relativityImg from './assets/relativity-img.jpg';
import BlackholeImg from './assets/blackhole-img.jpg';
import quantomImg from './assets/quantommech.jpg';
import darkmatterImg from './assets/darkmatter-img.jpg';
import plasmaImg from './assets/plasma-img.jpg';
import GyroscopeImg from './assets/gyroscope-img.jpg';




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
    title: 'Quantom Mechanics',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis ',
    buttonText: 'Learn More',
  },
  // Add more cards as needed
];

function App() {
  

  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <FourthSection /> 

      <h4 className="section5 d-flex align-items-center justify-content-center text-center">
        With these laws , you're halfway <br />  done with physics. 
      </h4>    
      
      <TitleWithAnimation
        title="Cool Topics"
      />

      <CardSection cards={cardsData} />

      <TitleWithAnimation
        title="Interesting Theories and Paradoxes"
      />

    </>
  )
}

export default App
