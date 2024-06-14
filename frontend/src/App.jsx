import { useState } from 'react'
import './App.css'
import Navbar from './Navbar'
import Section1 from './section1'
import Section2 from './section2'
import Section3 from './section3'
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS
import 'intersection-observer';




function App() {
  

  return (
    <>
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
    </>
  )
}

export default App
