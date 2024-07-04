import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './TheoryCardDetail.css'; // Import the CSS file

// Import all images
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

import arrowImg from './assets/downarrow.png';


// Mapping IDs to images
const theoryimages = {
  1: theory1Img,
  2: theory2Img,
  3: 'https://miro.medium.com/v2/resize:fit:786/format:webp/1*6ehwW04jwunImzrhYKRlbQ.gif',
  4: theory4Img,
  5: theory5Img,
  6: theory6Img,
  7: paradox1Img,
  8: paradox2Img,
  9: paradox3Img,
  10: paradox6Img,
  11:paradox5Img,
  12: paradox4Img
};

const TheoryCard = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/theorycards/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCard(data);
      } catch (error) {
        console.error('Error fetching card:', error);
        setError(error);
      }
    };

    fetchData();
  }, [id]);

  if (error) return <div> <br /><br /><br /><br /> Error: {error.message}</div>;
  if (!card) return <div>Loading...</div>;

  return (
    <div className="tp-card-detail" style={{ backgroundImage: `url(${theoryimages[id]})` }}>
      <div className="tp-card-detail-section">
        <h1 >{card.title}</h1>
      </div>
      <div className="tp-translucent">
        <div className="vertical-line"></div>
        <div className="text-section">
          <div className="my-tp-hl"></div>
          <p>{card.content1}</p>
          <p>{card.content2}</p>
          <p>{card.content3}</p>
          <br /><br />
          
          <h3>best video about it !!</h3>

          <img className='mydownarrow' src={arrowImg} alt="arrow img" height={220} width={160} />

          <iframe
            src={card.videoLink}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Video"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default TheoryCard;
