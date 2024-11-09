import React, { useEffect } from 'react';
import gsap from 'gsap';
import './HomeFirstScroll.css';
import ViewCanvas from '../../Animation/ViewCanvas';
import { useSelector } from 'react-redux';

const HomeFirstScroll = () => {
    const { flavor, theme } = useSelector((state) => state.flavor);

    useEffect(() => {
        // GSAP animations for "INDIA'S FIRST"
        const asterinChars = document.querySelectorAll('.asterin-hero-labels .char');
        const mojitoChars = document.querySelectorAll('.mojito-labels .char');
        const energyDrinkLabel = document.querySelector('.energy-drink-labels');
        const numChars = mojitoChars.length;
        const tl = gsap.timeline();

        // Step 1: Fade in "INDIA'S FIRST" character by character
        tl.fromTo(asterinChars, 
            { opacity: 0, y: 0 }, 
            { opacity: 1, y: 0, stagger: 0.1, duration: 0.05, ease: "power2.out" }
        )
        // Step 2: Hold the "INDIA'S FIRST" text for 0.5 second
        .to(asterinChars, { opacity: 1, duration: 0.1 }, "+=0.5")
        
        // Step 3: Fade out "INDIA'S FIRST" character by character
        .to(asterinChars, 
            { opacity: 0, y: 0, stagger: 0.1, duration: 0.05, ease: "power2.in" }
        )

        .fromTo(
            mojitoChars,
            { opacity: 0, y: -50 },
            {
                opacity: 1,
                y: 0,
                stagger: function(index) {
                    return Math.abs(index - (numChars - 1) / 2) * 0.2; // Stagger first/last, second/second-last, etc.
                },
                duration: 1,
                ease: "power2.out",
                onStart: () => {
                    // Start the can intro animation from Scene when mojitoChars animation begins
                    gsap.globalTimeline.addLabel("startCans", "-=0.5");
                }
            },
        )
        // Step 5: Fade in "ENERGY DRINK"
        .fromTo(energyDrinkLabel, 
            { opacity: 0, y: -50 }, 
            { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, 
            "+=0.2"  // Starts slightly after "MOJITO"/"CLASSIC" appears
        );
    }, [flavor]);

    const text = "INDIA'S FIRST";
    const characters1 = text.split("").map((char, index) => (
      <span key={index} className="char">{char === " " ? "\u00A0" : char}</span>
    ));

    const text2 = flavor === 'mojito' ? "MOJITO" : "CLASSIC";
    const characters2 = text2.split("").map((char, index) => (
      <span key={index} className="char">{char}</span>
    ));

    const text3 = "ENERGY DRINK";

    return (
        <div className="asterin-hero" style={{ position: 'relative'}}>
            {/* <View className="size-20 mt-300" >
                <Scene />
            </View> */}
            <div className="asterin-hero-inner">
                {/* India's First Text */}
                {flavor === 'mojito' && <p className={`asterin-hero-labels centered-text`}>
                    {characters1}
                </p> }

                {/* Mojito/Classic and Energy Drink Text */}
                <div className="text-container">
                    <p className={`mojito-labels ${theme}`}>
                        {characters2}
                    </p>
                    <p className={`energy-drink-labels ${theme}`}>
                        {text3}
                    </p>
                </div>

                <div className="banner">
                    <div className="product">
                        <div className="soda">
                            <ViewCanvas />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFirstScroll;
