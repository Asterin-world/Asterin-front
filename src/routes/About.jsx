import React from 'react';
import OurProducts from '../components/About/OurProducts/OurProducts';
import HomeSecondScroll from '../components/Home/SecondScroll/HomeSecondScroll';
import ProductBanner from '../components/About/ProductBanner/ProductBanner';
import ViewAboutCanvas from '../components/Animation/ViewAboutCanvas';
// import Navbar from './Navbar'

const About = () => {
  return (
    <div>
        {/* <Navbar /> */}
        <ViewAboutCanvas />
        <HomeSecondScroll /> 
        <OurProducts />
        <ProductBanner />
    </div>
  )
}

export default About;