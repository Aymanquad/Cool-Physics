import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import FourthSection from './section4'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'intersection-observer';




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
      
    </>
  )
}

export default App
