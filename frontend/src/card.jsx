import React from 'react';
import PropTypes from 'prop-types';
import './card.css'; // Import your CSS file for styling

const Card = ({ image, text, buttonText }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <p>{text}</p>
        <button className="card-button">{buttonText}</button>
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Card;
