import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import './TheoryCard.css';

const TheoryCard = ({ title, content, image }) => {
  return (
    <motion.div
      className="theory-card"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.03 }} 
    >
      <div className="theory-card-content">
        <h3 className="theory-card-title">{title}</h3>
        <p>{content}</p>
      </div>
      <img src={image} alt={title} className="theory-card-image" />
    </motion.div>
  );
};

TheoryCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default TheoryCard;
