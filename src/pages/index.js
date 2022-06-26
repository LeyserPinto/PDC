import React from "react";
import EventsSection from "../components/events-section";
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import { HomeObjOne } from "../components/InfoSection/Data";
const Home = () => {
  

  return (
    <>      
      <HeroSection />
      <EventsSection />
      <InfoSection {...HomeObjOne} />
    </>
  );
};

export default Home;
