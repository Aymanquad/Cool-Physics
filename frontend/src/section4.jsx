import React, { useEffect, useRef } from 'react';
import './section2.css';
import physicsImage from './assets/3rd-law-img.jpg'; // Adjust the path to your image

const FourthSection = () => {
  const containerRef = useRef(null);

  const ptext = "( The air inside the balloon is heated, it becomes <br> lighter than  the cooler air outside, Hence rising upwards )";


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
        threshold: 0.03, // Adjust the threshold as needed
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
    <div className="fourth-section d-flex align-items-center">
      <div ref={containerRef} className="my-container d-flex flex-column flex-md-row align-items-center">
        <div className="text-content2 text-white text-center text-md-left">
          <h2>3rd Law of Physics</h2>
          <br /><br />
          <p>
          For every action, there is an equal and opposite reaction.
          </p>
          <br /><br />
                <p className="animated-p" dangerouslySetInnerHTML={{ __html: ptext }}></p>       
        </div>
        <div className="image-content2">
          <img src={physicsImage} alt="Physics" className="img-fluid styled-image2" />
        </div>
      </div> 
    </div>
  );
};

export default FourthSection;
