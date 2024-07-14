import React from 'react';
import Pin from './MasonaryPin.jsx';
import './MasonryLayout.css';

import more1 from './assets/more1.jpg'; //The Banach–Tarski Paradox
import more2 from './assets/more2.jpg'; //entropy 
import more3 from './assets/more3.jpg'; //is the universe infinite ?
import more4 from './assets/more4.jpg'; //Schrödinger's cat
import more5 from './assets/more5.jpg'; //Why Going Faster-Than-Light Leads to Time Paradoxes
import more6 from './assets/more6.jpg';  //The Theory of Everything
import more7 from './assets/more7.jpg';  //The arrow of Time
import more8 from './assets/more8.jpg';  //Multiverse Theory
import more9 from './assets/more9.jpg';  //game theory

function MasonryLayout() {
  return (
    <div className="section5">
      <div className='pin_container'>
        <Pin size='large' imgSrc={more3} link='https://www.youtube.com/watch?v=isdLel273rQ' />
        <Pin size='small' imgSrc={more5} link='https://www.youtube.com/watch?v=an0M-wcHw5A' />
        <Pin size='medium' imgSrc={more2} link='https://www.youtube.com/watch?v=DxL2HoqLbyA&t=588s' />  
        <Pin size='small' imgSrc={more1} link='https://www.youtube.com/watch?v=s86-Z-CbaHA&t=275s' />  
        <Pin size='medium' imgSrc={more4} link='https://www.youtube.com/watch?v=UjaAxUO6-Uw' />
        <Pin size='small' imgSrc={more7} link='https://www.youtube.com/watch?v=GdTMuivYF30' />
        <Pin size='medium' imgSrc={more6} link='https://www.youtube.com/watch?v=cBfd0GQRVhc' />
      <Pin size='large' imgSrc={more9} link='https://www.youtube.com/watch?v=PsLaI4jDftA' />
      <Pin size='medium' imgSrc='https://cdn.goturkiye.com/goturkiye/300x400-45.jpg' link='https://example-video5.com' />
      <Pin size='large' imgSrc='https://i.pinimg.com/736x/b6/95/5a/b6955a289f2e6cb2ec0e7b603e7ebdb7.jpg' link='https://example-article6.com' />
        <Pin size='small' imgSrc={more8} link='https://www.youtube.com/watch?v=kTXTPe3wahc' />
      <Pin size='medium' imgSrc='https://cdn.goturkiye.com/goturkiye/300x400-45.jpg' link='https://example-video6.com' />
      </div>
    </div>
    
  );
}

export default MasonryLayout;
