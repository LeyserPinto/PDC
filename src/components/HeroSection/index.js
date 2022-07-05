import React from "react";
import Video from "../../videos/Clouds.mp4";
import Logo from "../../images/Logo-IPC.png";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroImg,
  HeroH1,
  HeroH2,
  HeroP,
} from "./HeroElements";

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroImg src={Logo} />
        <HeroH1>PUERTAS DEL CIELO</HeroH1>
        <HeroP>Adora en Espiritu y Verdad Junto a Nosotros</HeroP>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
