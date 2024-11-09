import React from 'react';
// import { gsap } from 'gsap';
// import { useGSAP } from '@gsap/react';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

const YoutubeVideo = () => {
    // useGSAP(() => {
    //     // Register ScrollTrigger plugin
    //     gsap.registerPlugin(ScrollTrigger);

    //     // Hide the "Click to Change" button when RollingCans is in the viewport
    //     ScrollTrigger.create({
    //         trigger: '.youtube-section', // Class of the RollingCans section
    //         start: 'top center', // Start hiding when the top of the section reaches the center
    //         end: 'bottom center', // Continue hiding until the bottom of the section passes the center
    //         onEnter: () => gsap.to('.click-to-change', { opacity: 0,  ease: "back.out(0.1)" }), // Fade out when entering
    //         onLeave: () => gsap.to('.click-to-change', { opacity: 1, ease: "back.out(0.1)" }), // Fade in when leaving
    //         onEnterBack: () => gsap.to('.click-to-change', { opacity: 0, display: 'block', ease: "back.out(0.1)"}), // Fade out when scrolling back
    //         onLeaveBack: () => gsap.to('.click-to-change', { opacity: 1, display: 'block',  ease: "back.out(0.1)" }), // Fade in when scrolling back up
    //     });
    // }, []);
    return (
        <section className="youtube-section" style={{
            position: 'relative',
            padding: '0px 0',
            height: '100vh',
            width: '100%',
            zIndex: 2
        }}>
            <div className="embed-responsive embed-responsive-21by9">
                <iframe
                    className="embed-responsive-item"
                    style={{ height: '100vh', width: '100%' }}
                    src="https://www.youtube.com/embed/84ZpD5FaLT4?autoplay=1&mute=1&playlist=84ZpD5FaLT4&loop=1"
                    frameborder="0"
                    allowfullscreen>
                </iframe>
            </div>
        </section>
    );
};

export default YoutubeVideo;
