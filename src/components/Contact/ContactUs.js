import React, { useState } from 'react';
import './ContactUs.css';
import { useSelector } from 'react-redux';

const ContactUs = () => {
  const { theme } = useSelector((state) => state.flavor);

  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  // State for handling the response status
  const [status, setStatus] = useState(null);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(process.env.REACT_APP_API_KEY)
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.REACT_APP_API_KEY
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        alert('Your message has been sent!');
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        setStatus('error');
        alert('There was an error sending your message. Please try again later.');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
      alert('There was an error sending your message. Please try again later.');
    }
  };

  return (
    <>
      <div className={`contact-page ${theme}-background`}>
        <div className="container contact-section">
          <div className="row align-items-center justify-content-center py-10">
            {/* Left Section - Contact Info */}
            <div className="col-lg-6 col-md-12 contact-info">
              <h3 className="contact-title">CONTACT US</h3>
              <h2 className={`contact-heading ${theme}`}>WE'RE HERE TO HELP!</h2>
              <p className="contact-description">
                Have questions or feedback? Reach out via our contact form or email us at <strong>customer.care@asterin.world</strong>. Follow us on social media for updates and
                special offers. We're here to keep you energized!
              </p>

              <ul className="contact-details">
                <li className="d-flex align-items-start mb-3">
                  <img className="contact-info-bullets me-2" src="/contact/location.png" alt="Location" />
                  <div>
                    <span className="contact-label">Our Location</span>
                    <span> 1103/04, Rio Empire, Adajan, Surat-395009, Gujarat, India</span>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <img className="me-2" src="/contact/phone.png" alt="Phone" />
                  <div>
                    <span className="contact-label">Phone Number</span>
                    <span>+91 99794 02125</span>
                  </div>
                </li>
                <li className="d-flex align-items-start mb-3">
                  <img className="me-2" src="/contact/email.png" alt="Email" />
                  <div>
                    <span className="contact-label">Email</span>
                    <span>customer.care@asterin.world</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Section - Contact Form */}
            <div className="col-lg-6 col-md-12 contact-form">
              <div className="form-container">
                <h4 className="form-title">Get in Touch</h4>
                <p className="form-subtitle">
                  Have a question or feedback? Please fill out the form below, and we'll respond soon!
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    type="text"
                    name="name"
                    className="form-control mb-3"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    className="form-control mb-3"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                  <input
                    type="text"
                    name="phone"
                    className="form-control mb-3"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                  <textarea
                    name="message"
                    className="form-control mb-3"
                    placeholder="Message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                  <button type="submit" className={`btn btn-primary ${theme}-send-btn w-100`}>Send</button>
                </form>
                {status === 'success' && <p className="text-success mt-3">Thank you! Your message has been sent.</p>}
                {status === 'error' && <p className="text-danger mt-3">There was an error sending your message. Please try again.</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="location-container" style={{ display: "flex", alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
        <div className="map-container" style={{ width: "100%", height: "100vh" }}>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.2416710207353!2d72.77785017600141!3d21.182556482477025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04dcfe4b26f95%3A0x34c9ee0796a7f641!2sRio%20Empire!5e0!3m2!1sen!2sin!4v1729053361857!5m2!1sen!2sin" width="100%" height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
