import React, { useEffect, useRef } from 'react';
import './section3.css';
import physicsImage from './assets/2nd-law-img.jpg'; // Adjust the path to your image

const ThirdSection = () => {
  const sectionRef = useRef(null);

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
        threshold: 0.4, // Adjust the threshold as needed
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="third-section d-flex align-items-center" >
      <div ref={sectionRef} className="my-container d-flex flex-column flex-md-row align-items-center">
        <div className="image-content order-md-1">
          <img src={physicsImage} alt="Physics" className="img-fluid styled-image" />
        </div>
        <div className="text-content text-white text-center text-md-left order-md-2">
          <h2>2nd Law of Physics</h2>
          <br /><br />
          <p>
            The acceleration of an object is directly proportional to the net force acting on it and inversely proportional to its mass.
          </p>
          <br /><br />
          <p className="animated-p">( Simply put ... F = ma )</p>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
