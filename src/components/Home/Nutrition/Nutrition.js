import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import canImage from './../../../assets/asterin-can1.png';
import './Nutrition.css'; // Import the updated custom styles
import energyFocus from './../../../assets/nutrition/energy-focus.png';
import lowCalorie from './../../../assets/nutrition/low-calorie.png';
import deliciousTaste from './../../../assets/nutrition/delicious-taste.png';
import flavorVariety from './../../../assets/nutrition/flavor-variety.png';
import { useSelector } from 'react-redux';

const NutritionPage = () => {
  const { theme } = useSelector((state) => state.flavor);

  return (
    <div className={`${theme} nutrition-section container-fluid p-5`}>
      <h2 className="text-center mb-5">NUTRITIONS</h2>
      <div className="row align-items-center justify-content-center">
        
        {/* Left Column */}
        <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-between align-items-center">
          <div className={`card ${theme} nutrition-card shadow-sm mb-4`}>
            <img src={energyFocus} className="mt-4" style={{ alignSelf: 'center', width: '60px' }} alt="Energy & Focus" />
            <div className="card-body" style={{ padding: '0px 20px 20px' }}>
              <h5 className="card-title">ENERGY & FOCUS</h5>
              <p className="card-text">
                Caffeine is a natural stimulant that can help increase alertness, improve mood, and enhance cognitive function.
              </p>
            </div>
          </div>
          <div className={`card ${theme} nutrition-card shadow-sm`}>
            <img src={deliciousTaste} className="mt-4" style={{ alignSelf: 'center', width: '60px' }} alt="Delicious Taste" />
            <div className="card-body" style={{ padding: '0px 20px 20px' }}>
              <h5 className="card-title">DELICIOUS TASTE</h5>
              <p className="card-text">
                Taurine may help lower blood pressure, reduce inflammation, and improve cholesterol levels, maintaining heart health.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Column with CAN Image */}
        <div className="col-lg-3 col-md-4 col-sm-12 text-center mb-4 d-flex justify-content-center align-items-center">
          {/* <img src={canImage} alt="Asterin Mojito Can" className="img-fluid can-image" /> */}
        </div>

        {/* Right Column */}
        <div className="col-lg-3 col-md-4 col-sm-12 d-flex flex-column justify-content-between align-items-center">
          <div className={`card ${theme} nutrition-card shadow-sm mb-4`}>
            <img src={lowCalorie} className="mt-4" style={{ alignSelf: 'center', width: '60px' }} alt="Low Calorie" />
            <div className="card-body" style={{ padding: '0px 20px 20px' }}>
              <h5 className="card-title">LOW CALORIE</h5>
              <p className="card-text">
                Supports healthy skin and digestion, essential for energy production and metabolism. Helps maintain healthy nerve function and may improve brain function.
              </p>
            </div>
          </div>
          <div className={`card ${theme} nutrition-card shadow-sm`}>
            <img src={flavorVariety} className="mt-4" style={{ alignSelf: 'center', width: '60px' }} alt="Flavor Variety" />
            <div className="card-body" style={{ padding: '0px 20px 20px' }}>
              <h5 className="card-title">FLAVOR VARIETY</h5>
              <p className="card-text">
                Carbohydrates are the primary source of energy for the body, providing the fuel needed for physical activity and daily functions.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default NutritionPage;
