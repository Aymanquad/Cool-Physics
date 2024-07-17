import React from 'react';
import Pin from './MasonaryPin.jsx';
import './MasonryLayout.css';

import more1 from './assets/more1.jpg'; //The Banach–Tarski Paradox
import more2 from './assets/more2.jpg'; //Entropy 
import more3 from './assets/more3.jpg'; //Is the Universe Infinite ?
import more4 from './assets/more4.jpg'; //Schrödinger's cat
import more5 from './assets/more5.jpg'; //Why Going Faster-Than-Light Leads to Time Paradoxes
import more6 from './assets/more6.jpg';  //The Theory of Everything
import more7 from './assets/more7.jpg';  //The Arrow of Time
import more8 from './assets/more8.jpg';  //Multiverse Theory
import more9 from './assets/more9.jpg';  //Game theory
import more10 from './assets/more10.jpg'; //Birthday paradox
import more11 from './assets/more11.jpg'; //Cicada 3301: An Internet Mystery
import more12 from './assets/more12.jpg'; //The Riddle That Seems Impossible Even If You Know The Answer
import more13 from './assets/more13.webp'; //Klein Bottle (No volume)?
import more14 from './assets/more14.jpg'; //something weird happens when You keep Squeezing 
import more15 from './assets/more15.jpg'; //The Surprising Secret of Synchronization
import more16 from './assets/more16.jpg';  //Wormholes
import more17 from './assets/more17.jpg';  //Knot theory
import more18 from './assets/more18.jpg';  //Conspiracy?

function MasonryLayout() {
  return (
    <div id='mindDanglingConcepts' className="lastsection">
      <div className='pin_container'>
        <Pin size='large' imgSrc={more3} link='https://www.youtube.com/watch?v=isdLel273rQ' title='Is the Universe Infinite ?'  />
        <Pin size='small' imgSrc={more5} link='https://www.youtube.com/watch?v=an0M-wcHw5A' title='Faster-Than-Light?'/>
        <Pin size='medium' imgSrc={more2} link='https://www.youtube.com/watch?v=DxL2HoqLbyA&t=588s' title='Entropy'/>  
        <Pin size='small' imgSrc={more1} link='https://www.youtube.com/watch?v=s86-Z-CbaHA&t=275s' title='The Banach–Tarski Paradox'/>  
        <Pin size='medium' imgSrc={more4} link='https://www.youtube.com/watch?v=UjaAxUO6-Uw' title="Schrödinger's cat"/>
        <Pin size='small' imgSrc={more7} link='https://www.youtube.com/watch?v=GdTMuivYF30' title='The Arrow of Time'/>
        <Pin size='medium' imgSrc={more6} link='https://www.youtube.com/watch?v=cBfd0GQRVhc' title='The Theory of Everything'/>
        <Pin size='large' imgSrc={more9} link='https://www.youtube.com/watch?v=n3viX-IXfi0' title='Game theory'/>
        <Pin size='medium' imgSrc={more11} link='https://www.youtube.com/watch?v=I2O7blSSzpI' title='An Internet Mystery'/>
        <Pin size='large' imgSrc={more12} link='https://www.youtube.com/watch?v=iSNsgj1OCLA' title='Riddle That Seems Impossible'/>
        <Pin size='small' imgSrc={more8} link='https://www.youtube.com/watch?v=kTXTPe3wahc' title='Multiverse Theory'/>
        <Pin size='medium' imgSrc={more10} link='https://www.youtube.com/watch?v=ofTb57aZHZs' title='Birthday paradox'/>

        <Pin size='medium' imgSrc={more16} link='https://www.youtube.com/watch?v=9P6rdqiybaw' title='Wormholes'/>
        <Pin size='medium' imgSrc={more14} link='https://www.youtube.com/watch?v=NqabT21d8VM' title='How much can we Squeeze'/>
        <Pin size='large' imgSrc={more15} link='https://www.youtube.com/watch?v=t-_VPRCtiUg' title='Synchronization Secret'/>
        <Pin size='large' imgSrc={more17} link='https://www.youtube.com/watch?v=8DBhTXM_Br4' title='Knot theory'/>
        <Pin size='small' imgSrc={more13} link='https://www.youtube.com/watch?v=9Bqg-6nzkzw' title='Klein Bottle (No volume)?'/>
        <Pin size='medium' imgSrc={more18} link='https://www.youtube.com/watch?v=j5v8D-alAKE' title='Conspiracy?'/>
      </div>
    </div>
    
  );
}

export default MasonryLayout;
