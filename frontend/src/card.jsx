import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './card.css'; // Import your CSS file for styling

const Card = ({ image, title, text, buttonText, id }) => {
  return (
    <div className="card">
      <img src={image} alt="Card" className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-p-text">{text}</p>
        <Link to={`/cards/${id}`}>
          <button className="card-button">{buttonText}</button>
        </Link>
        
      </div>
    </div>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Card;
