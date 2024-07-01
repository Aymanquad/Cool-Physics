import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CardDetail.css'; // Import the CSS file

// Import all images
import gravityImg from './assets/gravity-img.jpg';
import relativityImg from './assets/relativity-img.jpg';
import blackholeImg from './assets/blackhole-img.jpg';
import quantumImg from './assets/quantommech.jpg';
import darkmatterImg from './assets/darkmatter-img.jpg';
import plasmaImg from './assets/plasma-img.jpg';
import gyroscopeImg from './assets/gyroscope-img.jpg';
import arrowImg from './assets/downarrow.png';


// Mapping IDs to images
const images = {
  0: gravityImg,
  1: relativityImg,
  2: blackholeImg,
  3: darkmatterImg,
  4: plasmaImg,
  5: gyroscopeImg,
  6: quantumImg,
};

const CardDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:5000/cards/${id}`);
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

  if (error) return <div>Error: {error.message}</div>;
  if (!card) return <div>Loading...</div>;

  return (
    <div className="card-detail" style={{ backgroundImage: `url(${images[id]})` }}>
      <div className="card-detail-section">
        <h1>{card.title}</h1>
      </div>
      <div className="translucent">
        <div className="vertical-line"></div>
        <div className="text-section">
          <div className="my-hl"></div>
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

export default CardDetail;
