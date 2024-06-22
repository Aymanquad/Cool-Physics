import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

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
    <div>
      <br /><br /><br />
      <h1>{card.title}</h1>
      <img src={card.image} alt={card.title} />
      <p>{card.content}</p>
      <a href={card.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
    </div>
  );
};

export default CardDetail;
