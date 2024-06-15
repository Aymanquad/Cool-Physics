import React from 'react';
import Card from './card';
import './cards-section.css'; // Import your CSS file for styling

const CardSection = ({ cards }) => {
  return (
    <div className="card-section">
      {cards.map((card, index) => (
        <Card key={index} image={card.image} title={card.title} text={card.text} buttonText={card.buttonText} />
      ))}
    </div>
  );
};

export default CardSection;
