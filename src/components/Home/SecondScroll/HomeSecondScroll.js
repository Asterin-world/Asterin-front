import React from 'react';
import './HomeSecondScroll.css';
import canImage from './../../../assets/asterin-can1.png';
import { useSelector } from 'react-redux';

const HomeSecondSroll = ({isHomeScreen}) => {
  const { theme } = useSelector((state) => state.flavor);
  const classTheme = isHomeScreen ? 'about-section' : 'about-product-page'
  return (
    <section className={`${classTheme} ${theme}-background`}>
      {/* <div className="about-can-background">
        <img
          src={canImage}// Replace with the correct path to your can image
          alt="Asterin Mojito Can"
          className="can-background"
        />
      </div> */}
    <div className="about-container">
      <h3 className="about-subtitle p-10" style={{zIndex:11}}>ABOUT ASTERIN </h3>
      <div className="text-border"></div>
      <h2 className={`about-title p-10 ${theme}`}>
      Asterin welcomes you to the new era of energy drinks - a powerful fusion of flavor and energy that fuels your ambition.
      </h2>
      {!isHomeScreen && (
        <p className="p-10">
          The perfect fusion of energy, focus, and flavor. This isn’t just any energy drink; it’s a game-changer. Packed with the goodness of natural flavors, Asterin delivers a refreshing taste with low calories. Say goodbye to distractions and hello to enhanced energy levels, courtesy of caffeine and L-theanine. Asterin is crafted for those who demand more from their energy drink, setting the standard for a refreshing and invigorating experience.
        </p>
      )}
    </div>
    {isHomeScreen && (<div className="energy-drink-strip">
      <div className="about-border"></div>
      <div className="moving-dashed-line"></div>
      <p className="energy-drink-text">ASTERIN • ENERGY DRINK • ASTERIN • ENERGY DRINK • ASTERIN • ENERGY DRINK • ASTERIN • ENERGY DRINK • ASTERIN • ENERGY DRINK • ASTERIN • ENERGY DRINK • ASTERIN 
        • ENERGY DRINK • ASTERIN • ENERGY DRINK • ASTERIN • ENERGY DRINK • ASTERIN • ENERGY DRINK</p>
    </div>)}
  </section>
  );
};

export default HomeSecondSroll;
