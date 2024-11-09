import React, { lazy } from 'react';
import './Footer.css';
import logo from './../../assets/ASTERIN-FOOTER-LOGO.png';
import amazonLogo from './../../assets/amazon-logo.svg';
import NewsLetter from '../NewsLetter/NewsLetter.js';
import { useSelector } from 'react-redux';

const Footer = () => {
  const { theme } = useSelector((state) => state.flavor);

  return (
    <>
      <NewsLetter />
      <footer className="footer">
        <div className="footer-container">

          {/* First Column: Logo, Description, and Social Media */}
          <div className="footer-left">
            <img src={logo} alt="Asterin Logo" className="footer-logo" />
            <p>
              At Asterin Energy Drink, we’re passionate about delivering high-quality energy drinks that enhance your focus and vitality.
              Our expertly crafted formula combines premium ingredients to fuel your day and keep you at your best.
            </p>
            <div className={`social-media ${theme}`}>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-pinterest"></i></a>
            </div>
          </div>

          {/* Second and Third Columns: Customer Services and Useful Links */}
          <div className="footer-services-links">
            {/* Customer Services */}
            <div className="footer-section">
              <h3>Customer Services</h3>
              <div className="underline"></div>
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Blogs</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            {/* Useful Links */}
            <div className="footer-section">
              <h3>Useful Links</h3>
              <div className="underline"></div>
              <ul>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Refund and Returns Policy</a></li>
                <li><a href="#">Shipping Policy</a></li>
              </ul>
              <h3>Also Available At</h3>
              <div className="underline"></div>
              <img src={amazonLogo} alt="Amazon" className="amazon-logo" />
            </div>
          </div>

          {/* Fourth Column: Contact Us Section */}
          <div className="footer-section contact">
            <h3>Contact Us</h3>
            <div className="underline"></div>
            <p><i className="fas fa-map-marker-alt"></i> 1103/04, Rio Empire, Adajan, Surat-395009, Gujarat, India</p>
            <p><i className="fas fa-phone-alt"></i> +91 99784 02125</p>
            <p><i className="fas fa-envelope"></i> customer.care@asterin.world</p>
          </div>
        </div>

        {/* White stripe before "Powered by" */}
        <div className="footer-stripe"></div>

        <div className="footer-bottom">
          <p>POWERED BY KOLADIYA INDUSTRIES PVT LTD</p>
        </div>
      </footer>
    </>

  );
};

export default Footer;
