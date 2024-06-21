import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const TheoryCardDetail = () => {
  const { id } = useParams();
  const [theoryCard, setTheoryCard] = useState(null);

  useEffect(() => {
    // Replace with your actual data fetching logic
    fetch(`https://your-backend-api.com/theorycards/${id}`)
      .then(response => response.json())
      .then(data => setTheoryCard(data));
  }, [id]);

  if (!theoryCard) return <div>Loading...</div>;

  return (
    <div>
      <h1>{theoryCard.title}</h1>
      <img src={theoryCard.image} alt={theoryCard.title} />
      <p>{theoryCard.content}</p>
      <a href={theoryCard.videoLink} target="_blank" rel="noopener noreferrer">Watch Video</a>
    </div>
  );
};

export default TheoryCardDetail;
