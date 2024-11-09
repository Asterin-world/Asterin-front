import React, { useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomeThirdScroll.css';
import canImage from './../../../assets/asterin-can1.png';
import { useSelector } from 'react-redux';
const HomeThirdSroll = () => {
    const { theme } = useSelector((state) => state.flavor);
    const [activePack, setActivePack] = useState(6); // Default pack size is 6

    const selectPack = (packSize) => {
        console.log("hrere");
        setActivePack(packSize);
    };

    return (
        <section className="product-section">
            <div className="product-page">
                <div className="left-section">
                    <h2>DISCOVER OUR DRINKS</h2>
                    <h1 className={`${theme}`}>REFRESHING MOJITO FLAVOR</h1>
                    <div className="description">
                        <h3>DESCRIPTION</h3>
                        <p>
                        Introducing the first-ever Mojito Flavoured Energy Drink—a refreshing blend of classic mojito flavor and energizing caffeine. Enjoy a delicious boost that enhances concentration and alertness, all in a low-calorie formula. Perfect for any time you need an energy lift, this unique mojito energy drink is ideal for health-conscious individuals seeking a caffeine boost that’s both refreshing and energizing.
                        </p>
                    </div>
                </div>

                <div className="dotted-line left"></div>

                <div className="center-section">
                    {/* <div className="can-image-container">
                        <img src={canImage} alt="Asterin Mojito Can" className="can-image" />
                    </div> */}
                </div>

                <div className="dotted-line right"></div>

                <div className="right-section">
                    <div className="plus-points">
                        <h2>PLUS POINTS</h2>
                        <p>Enjoy a delicious, low-calorie energy drink that delivers an instant energy boost, perfect for staying energized throughout your day!</p>
                        <div className="nutrition-info">
                            <div className={`nutrition-item ${theme}-nutrition-item`}>
                                <span className="label"><strong>Calories</strong></span>
                                <span className={`value ${theme}`}>138.22 kcal</span>
                            </div>

                            <div className={`nutrition-item ${theme}-nutrition-item`}>
                                <span className="label"><strong>Caffeine</strong></span>
                                <span className={`value ${theme}`}>75 mg</span>
                            </div>

                            <div className={`nutrition-item ${theme}-nutrition-item`}>
                                <span className="label"><strong>Carbohydrate</strong></span>
                                <span className={`value ${theme}`}>34.37 gm 5%</span>
                            </div>

                            <div className={`nutrition-item ${theme}-nutrition-item`}>
                                <span className="label"><strong>Vitamin</strong></span>
                                <span className={`value ${theme}`}>B2 | B6 | B12</span>
                            </div>
                        </div>

                        <div className="quantity-selector">
                            <h3>QUANTITY</h3>
                            <div className={`${theme} quantity-options`}>
                                <span
                                    className={`quantity-option ${activePack === 6 ? 'active' : ''}`}
                                    onClick={() => selectPack(6)}
                                >
                                    Pack of 6
                                </span>
                                <span
                                    className={`${theme} quantity-option ${activePack === 10 ? 'active' : ''}`}
                                    onClick={() => selectPack(10)}
                                >
                                    Pack of 10
                                </span>
                                <span
                                    className={`quantity-option ${activePack === 24 ? 'active' : ''}`}
                                    onClick={() => selectPack(24)}
                                >
                                    Pack of 24
                                </span>
                            </div>
                            <button className={`${theme} add-to-cart-btn`}>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeThirdSroll;
