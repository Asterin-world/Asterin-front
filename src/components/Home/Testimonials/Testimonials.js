import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './Testimonials.css';
import canImage from './../../../assets/asterin-can1.png';
import { useSelector } from 'react-redux';

// Testimonials data (simplified for the example)
const testimonials = [
  {
    name: "Shirley M. Fuller",
    image: '/profiles/profile.png',
    text: "I get a constant energy boost from asterin without the crash! I adore that I can drink it to be alert and focused during the workday.",
  },
  {
    name: "Jarret Buckridge",
    image: '/profiles/profile.png',
    text: "We are grateful for Asterin's consistent supply and timely deliveries. It’s crucial for us as distributors to maintain stock levels, and Asterin has never let us down.",
  },
  {
    name: "Jeffery Johnston",
    image: '/profiles/profile.png',
    text: "Finally, it's an energy drink without an odd aftertaste! Drinking asterin at any moment is delightful because to its smooth and refreshing nature.",
  },
  {
    name: "Sharon Hessel",
    image: '/profiles/profile.png',
    text: "I use Asterin as fuel for my workouts because I'm an athlete. It helps me persevere through my most difficult training sessions and keeps me motivated.",
  },
  {
    name: "Loren Beier",
    image: '/profiles/profile.png',
    text: "According to our retail partners, Asterin has been selling well and has been receiving positive feedback from customers.",
  },
  {
    name: "Joany Mante",
    image: '/profiles/profile.png',
    text: "As a fitness enthusiast, I'm always on the lookout for healthy and refreshing energy options. Asterin Mojito has become my pre-workout ritual. The taste is fantastic!",
  },
  {
    name: "John S.",
    image: '/profiles/profile.png',
    text: "Exceptional craftsmanship and affordable prices.",
  },
  {
    name: "Emma P.",
    image: '/profiles/profile.png',
    text: "A beautiful collection that exceeded my expectations.",
  },
  {
    name: "Michael C.",
    image: '/profiles/profile.png',
    text: "Helpful, informative, and affordable, Asterin is the place to go for my energy drink.",
  },
  {
    name: "Champo M.",
    image: '/profiles/profile.png',
    text: "The taste is AMAZING. It's an eye catcher for everyone. Extremely well made and I very love it.",
  },
  {
    name: "Champo M.",
    image: '/profiles/profile.png',
    text: "The taste is AMAZING. It's an eye catcher for everyone. Extremely well made and I very love it.",
  },
  {
    name: "Champo M.",
    image: '/profiles/profile.png',
    text: "The taste is AMAZING. It's an eye catcher for everyone. Extremely well made and I very love it.",
  },
];

const Testimonials = () => {
  const { theme } = useSelector((state) => state.flavor);
  // Split testimonials into groups of 6 for each slide
  const groupedTestimonials = [];
  for (let i = 0; i < testimonials.length; i += 6) {
    groupedTestimonials.push(testimonials.slice(i, i + 6));
  }

  return (
    <section className={`${theme}-background testimonials-section`}>
      {/* Background Can Image */}
      <div className="about-can-background">
        {/* <img src={canImage} alt="Asterin Mojito Can" className="can-background" /> */}
      </div>

      {/* Testimonials Header */}
      <div className="text-center my-5">
        <h3 className="about-subtitle">TESTIMONIALS</h3>
        <h2 className={`${theme} about-title`}>WHAT OUR CLIENTS SAY</h2>
      </div>

      {/* Testimonials Carousel */}
      <div id="testimonialCarousel" className={`carousel slide ${theme}`} data-bs-ride="carousel" data-bs-interval="5000">
        <div className="carousel-inner">
          {/* Create carousel items */}
          {groupedTestimonials.map((group, groupIndex) => (
            <div
              className={`carousel-item ${groupIndex === 0 ? 'active' : ''}`}
              key={groupIndex}
              style={{ height: '500px' }} // Fixed height to keep page size static
            >
              <div className="container">
                <div className="row justify-content-center">
                  {/* Loop through the group and create 3 columns with 2 stacked cards each */}
                  {Array.from({ length: 3 }).map((_, colIndex) => (
                    <div className="col-md-4 d-flex flex-column mb-4" key={colIndex}>
                      {/* First card in the column */}
                      {group[colIndex * 2] && (
                        <div className="card testimonial-card p-3 mb-4">
                          <div className="d-flex align-items-center">
                            <img
                              src={group[colIndex * 2].image}
                              alt={group[colIndex * 2].name}
                              className="testimonial-img rounded-circle me-3"
                            />
                            <h5 className="mb-0">{group[colIndex * 2].name}</h5>
                          </div>
                          <p className="testimonial-text mt-3">{group[colIndex * 2].text}</p>
                        </div>
                      )}
                      {/* Second card in the column */}
                      {group[colIndex * 2 + 1] && (
                        <div className="card testimonial-card p-3">
                          <div className="d-flex align-items-center">
                            <img
                              src={group[colIndex * 2 + 1].image}
                              alt={group[colIndex * 2 + 1].name}
                              className="testimonial-img rounded-circle me-3"
                            />
                            <h5 className="mb-0">{group[colIndex * 2 + 1].name}</h5>
                          </div>
                          <p className="testimonial-text mt-3">{group[colIndex * 2 + 1].text}</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Indicators */}
        <ol className="carousel-indicators">
          {groupedTestimonials.map((_, index) => (
            <li
              key={index}
              data-bs-target="#testimonialCarousel"
              data-bs-slide-to={index}
              className={index === 0 ? 'active' : ''}
            ></li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Testimonials;
