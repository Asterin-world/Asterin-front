
import React from 'react';
import rollingCansImage from './../../assets/rolling-cans.jpg';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const RollingCans = () => {
  useGSAP(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hide the "Click to Change" button when RollingCans is in the viewport
    ScrollTrigger.create({
      trigger: '.rolling-can', // Class of the RollingCans section
      start: 'top bottom', // Start hiding when the top of the section reaches the center
      end: 'bottom top', // Continue hiding until the bottom of the section passes the center
      onEnter: () => gsap.to('.click-to-change', { opacity: 0,  ease: "back.out(0.1)" }), // Fade out when entering
      // onLeave: () => gsap.to('.click-to-change', { display: 'none',  ease: "back.out(0.1)" }), // Hide completely when leaving bottom
      onLeave: () => gsap.to('.tooltip-wrapper', { display: 'none',  ease: "back.out(0.1)" }),
      onEnterBack: () => gsap.to('.click-to-change', { opacity: 1, display: 'block',  ease: "back.out(0.1)"}), // Fade back in when scrolling up
      onLeaveBack: () => gsap.to('.click-to-change', { opacity: 1, display: 'block',  ease: "back.out(0.1)" }), // Fade in when scrolling back up
    });
  }, []);

  return (
    <section className="rolling-can"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${rollingCansImage})`, // Set the image as the background
        backgroundSize: 'cover', // Cover the entire container
        backgroundPosition: 'center', // Center the background image
        backgroundRepeat: 'no-repeat', // Do not repeat the background image
        position: 'relative', // Relative positioning (optional)
      }}
    >
    </section>
  );
};

export default RollingCans;
