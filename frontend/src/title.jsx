import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import './title.css'; // Import your CSS file for styling

const TitleWithAnimation = ({ title }) => {
  const lineRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.width = '40%'; // Adjust width as needed
            observer.disconnect();
          }
        });
      },
      { threshold: 0.7 } // Trigger animation when 50% of the line is visible
    );

    if (lineRef.current) {
      observer.observe(lineRef.current);
    }

    return () => {
      if (lineRef.current) {
        observer.unobserve(lineRef.current);
      }
    };
  }, []);

  return (
    <div className="section5 title-container">
      <h4 className="animated-title2">{title}</h4>
      <span ref={lineRef} className="horizontal-line"></span>
    </div>
  );
};

TitleWithAnimation.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleWithAnimation;
