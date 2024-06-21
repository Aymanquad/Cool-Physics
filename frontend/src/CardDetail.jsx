import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CardDetail = () => {
  const { id } = useParams();
  const [card, setCard] = useState(null);

  useEffect(() => {
    // Replace with your actual data fetching logic
    fetch(`https://your-backend-api.com/cards/${id}`)
      .then(response => response.json())
      .then(data => setCard(data));
  }, [id]);

  if (!card) return <div>Loading...</div>;

  return (
    <div>
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} />
      <p>{card.content}</p>
      <a href={card.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
    </div>
  );
};

export default CardDetail;
