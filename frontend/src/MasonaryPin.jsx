import React from 'react';

function Pin({ size, imgSrc, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" style={{ ...styles.card, ...styles[size] }}>
      <img src={imgSrc} alt="Pin" style={styles.img} />
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
};

export default Pin;
