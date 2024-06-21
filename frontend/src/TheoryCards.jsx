import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import TheoryCard from './TheoryCard';
import { motion, useAnimation } from 'framer-motion';
import './TheoryCards.css';

const TheoryCards = ({ cards = [], order}) => {
  const controls = useAnimation();
  const cardsRef = useRef([]);

  const handleScroll = () => {
    cardsRef.current.forEach((card, index) => {
      if (card.getBoundingClientRect().top < window.innerHeight * 0.98) {
        controls.start(i => ({
          opacity: 1,
          y: 0,
          transition: { delay: i * 0.053, duration: 0.54 },
        }));
      } else {
        controls.start({
          opacity: 0,
          y: 30,
        });
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial animation state
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  return (
    <div className="theory-cards">
      {cards.map((card, index) => (
        <motion.div
          key={index}
          ref={el => (cardsRef.current[index] = el)}
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
        >
          <TheoryCard
            title={card.title}
            content={card.content}
            image={card.image}
            order={order}
            id={card.id}
          />
        </motion.div>
      ))}
    </div>
  );
};

TheoryCards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
  order: PropTypes.oneOf(['default', 'reverse']),
};

export default TheoryCards;
