import React from 'react';
import './ProductBanner.css'; // Custom CSS for layout
import canBanner1 from '../../../assets/our_product_banner1.png';
import canBanner2 from '../../../assets/our_product1.png';

const bannerSliderData = [
  {
    id: 1,
    imgSrc: canBanner1,
  },
  {
    id: 2,
    imgSrc: canBanner2,
  },
  {
    id: 3,
    imgSrc: canBanner1,
  },
  {
    id: 4,
    imgSrc: canBanner2,
  },
];

const ProductBanner = () => {
  const carouselData = bannerSliderData;

  return (
    <div id="carouselVideoExample" className="carousel slide carousel-fade carousel-dark" data-bs-ride="carousel">
      {/* Indicators */}
      <div className="carousel-indicators">
        {carouselData.map((item, index) => (
          <button
            key={item.id}
            type="button"
            data-bs-target="#carouselVideoExample"
            data-bs-slide-to={index}
            className={index === 0 ? 'active' : ''}
            aria-current={index === 0 ? 'true' : 'false'}
            aria-label={`Slide ${index + 1}`}
            style={{ backgroundColor: '#f9f3ee' }}
          ></button>
        ))}
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {carouselData.map((item, index) => (
          <div key={item.id} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
            <div className="banner-slide">
              <img className="d-block w-100 carousel-image" src={item.imgSrc} alt={`Slide ${index + 1}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductBanner;