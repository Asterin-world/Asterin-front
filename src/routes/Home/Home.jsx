import React, { useMemo } from "react";
import { useSelector } from 'react-redux';
import "./Home.css";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import RollingCans from "../../components/Home/RollingCans";
import ClickToChange from "../../components/ChangeFlavor/ChangeFlavorButton";
import HomeFirstScroll from '../../components/Home/FirstScroll/HomeFirstScroll';
import HomeSecondScroll from '../../components/Home/SecondScroll/HomeSecondScroll';
import HomeThirdScroll from '../../components/Home/ThirdScroll/HomeThirdScroll';
import YoutubeVideo from './../../components/Home/YoutubeVideo';
import NutritionPage from '../../components/Home/Nutrition/Nutrition';

const Home = () => {
  const { theme, flavor } = useSelector((state) => state.flavor);
  console.log(theme, flavor);

  // Memoize large or static content to prevent unnecessary re-renders
  const memoizedFirstScroll = useMemo(() => <HomeFirstScroll />, []);
  const memoizedSecondScroll = useMemo(() => <HomeSecondScroll isHomeScreen={true} />, []);
  const memoizedThirdScroll = useMemo(() => <HomeThirdScroll />, []);
  const memoizedVideo = useMemo(() => <YoutubeVideo />, []);
  const memoizedNutrition = useMemo(() => <NutritionPage />, []);

  return (
    <>
      {memoizedFirstScroll}
      {memoizedSecondScroll}
      {memoizedThirdScroll}
      {memoizedVideo}
      {memoizedNutrition}
      <Testimonials />
      <RollingCans />
      <ClickToChange style={{padding: 0, margin: 0}} />
    </>
  );
};

export default Home;
