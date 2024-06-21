import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './TheoryCard.css';

const TheoryCard = ({ title, content, image, order, id  }) => {
  return (
    <motion.div
      className={`theory-card ${order === 'reverse' ? 'reverse' : ''}` }
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      key={{id}}
      transition={{ duration: 0.4, delay: 0.03 }} 
    >
      <div className="theory-card-content">
        <h3 className="theory-card-title">{title}</h3>
        <p>{content}</p>
        <Link to={`/theorycards/${id}`}>
          <button className="theory-button">Know more!</button>
        </Link>
      </div>
      <img src={image} alt={title} className="theory-card-image" />
    </motion.div>
  );
};

TheoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  order: PropTypes.oneOf(['default', 'reverse']),
};

export default TheoryCard;
