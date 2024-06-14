import React, { useEffect, useRef } from 'react';
import './section2.css';
import physicsImage from './assets/1st-law-img.jpg'; // Adjust the path to your image

const SecondSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.disconnect(); // Disconnect observer after first intersection
          }
        });
      },
      {
        threshold: 0.06, // Adjust the threshold as needed
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div className="second-section d-flex align-items-center">
      <div ref={containerRef} className="my-container d-flex flex-column flex-md-row align-items-center">
        <div className="text-content text-white text-center text-md-left">
          <h2>1st Law of Physics</h2>
          <br /><br />
          <p>
            Any Object remains in state of either rest or motion , <br /> unless acted upon by an unbalanced force.
          </p>
          <br /><br />
          <p className="animated-p">( Unless you hit the ball , it stays there )</p>
        </div>
        <div className="image-content">
          <img src={physicsImage} alt="Physics" className="img-fluid styled-image" />
        </div>
      </div>
    </div>
  );
};

export default SecondSection;
