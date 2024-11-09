import React from 'react';
import canImage from './../../../assets/our_product1.png'; // Replace with the correct path for the can image
import icon from './../../../assets/about-us/natural.png'; // Icon for natural ingredients
import icon2 from './../../../assets/about-us/delicious.png'; // Icon for delicious flavors
import icon3 from './../../../assets/about-us/sustainablity.png'; // Icon for sustainability
import './OurProducts.css'; // Custom CSS for styling
import { useSelector } from 'react-redux';

const OurProducts = () => {
  const { theme } = useSelector((state) => state.flavor);
  return (
    <div className="our-products-section container-fluid top-section">
      <div className="row align-items-center position-relative">
        
        {/* Can Image Section */}
        <div className="col-lg-6 col-md-12 d-flex justify-content-center align-items-center can-image-container">
          {/* <img src={canImage} alt="Asterin Can" className="can-image" /> */}
        </div>

        {/* Dotted Line in the Middle */}
        <div className="about-dotted-line"></div>

        {/* Text Content Section */}
        <div className="col-lg-6 col-md-12 text-section">
          <h3 className="product-title">OUR PRODUCT</h3>
          <h2 className={`main-heading ${theme}`}>ENERGIZE NATURALLY</h2>
          <p className="description-text">
            At Asterin, we believe that energy should empower you to conquer your day. Our premium energy drinks are crafted to fuel your ambitions, whether you're hitting the gym, grinding through work, or enjoying a night out with friends.
          </p>

          <h4 className="why-choose-heading">WHY CHOOSE ASTERIN?</h4>
          <ul className="why-choose-list">
            <li>
              <span className="icon"><img src={icon} alt="Natural Ingredients Icon" /></span>
              <div className="text-content">
                <span className="icon-title">Natural Ingredients</span>
                <p className="icon-description">
                  Asterin has natural caffeine and electrolytes for steady energy.
                </p>
              </div>
            </li>
            <li>
              <span className="icon"><img src={icon2} alt="Delicious Flavors Icon" /></span>
              <div className="text-content">
                <span className="icon-title">Delicious Flavors</span>
                <p className="icon-description">
                  Our flavors taste great—zesty citrus and tropical berry for everyone!
                </p>
              </div>
            </li>
            <li>
              <span className="icon"><img src={icon3} alt="Sustainably Sourced Icon" /></span>
              <div className="text-content">
                <span className="icon-title">Sustainably Sourced</span>
                <p className="icon-description">
                  We use eco-friendly ingredients and packaging to protect the planet while energizing you.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
