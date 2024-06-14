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


const cardsData = [
  {
    image: 'https://via.placeholder.com/300x200',
    text: 'Card 1 Description',
    buttonText: 'Learn More',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    text: 'Card 2 Description',
    buttonText: 'Learn More',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    text: 'Card 1 Description',
    buttonText: 'Learn More',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    text: 'Card 2 Description',
    buttonText: 'Learn More',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    text: 'Card 1 Description',
    buttonText: 'Learn More',
  },
  {
    image: 'https://via.placeholder.com/300x200',
    text: 'Card 2 Description',
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

    </>
  )
}

export default App
