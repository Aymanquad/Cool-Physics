import React from 'react';

function Pin({ size, imgSrc, link, title }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ ...styles.card, ...styles[size] }}>
      <img src={imgSrc} alt="Pin" style={styles.img} />
      <div className="overlay" style={styles.overlay}>
        <h5 style={styles.title}>{title}</h5>
      </div>
    </a>
  );
}

const styles = {
  card: {
    display: 'block',
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    overflow: 'hidden',
    position: 'relative',
    transition: 'transform 0.3s',
  },
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    color: 'white',
    fontSize: '1.2em',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
    borderRadius: '8px', /* Rounds the corners of the background */
  },
  
};

export default Pin;
