import React from "react";
import { FaPrayingHands, FaBookOpen } from "react-icons/fa";

import Logo from "../../images/LogoIPC-Amarillo.png";
import { Button, DonateButton } from "../ButtonElements";

import Logo from "../../images/LogoIPC-Amarillo.png";
import { Button,DonateButton } from "../ButtonElements";

import {
  InfoContainer,
  InfoWrapper,
  Col1,
  Col2,
  TextContainer,
  TopLine,
  Heading,
  Subtitle,
  ActionContainer,
  InfoBox,
  ImgWrap,
  BoxIcon,
  BoxTextH1,
<<<<<<< HEAD
  BoxTextP,
=======
  BoxTextP,  
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
  BtnWrap,
  Donaciones,
  DonBg,
  DonContent,
  DonateImg,
  DonText,
  DonP,
<<<<<<< HEAD
  DonBtnWrap,
  MinContainer,
=======
  DonBtnWrap
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
} from "./infoElements";

const InfoSection = ({ topLine, headLine, description }) => {
  return (
<<<<<<< HEAD
    <>
      {
        //Sobre Nosotros Seccion
      }
      <InfoContainer>
        <InfoWrapper>
          <Col1>
            <TextContainer>
              <TopLine>{topLine}</TopLine>
              <Heading>{headLine}</Heading>
              <Subtitle>{description}</Subtitle>
            </TextContainer>
            <ActionContainer>
              <InfoBox>
                <BoxIcon>
                  <FaPrayingHands />
                </BoxIcon>
                <BoxTextH1>PETICIÓN DE ORACIÓN</BoxTextH1>
                <BoxTextP>
                  Lorem ipsum dolor, consectetur elit, sed do tempor incididunt
                  labore.
                </BoxTextP>
              </InfoBox>
              <InfoBox>
                <BoxIcon>
                  {" "}
                  <FaBookOpen />
                </BoxIcon>
                <BoxTextH1>ESTUDIOS BIBLICOS</BoxTextH1>
                <BoxTextP>
                  Lorem ipsum dolor, consectetur elit, sed do tempor incididunt
                  labore.
                </BoxTextP>
              </InfoBox>
            </ActionContainer>
            <BtnWrap>
              <Button
                to="home"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                NUESTRA HISTORIA
              </Button>
            </BtnWrap>
          </Col1>
          <Col2>
            <ImgWrap></ImgWrap>
          </Col2>
        </InfoWrapper>
      </InfoContainer>

      {
        //Donaciones Seccion
      }

      <Donaciones>
        <DonBg />
        <DonContent>
          <DonateImg src={Logo} />
          <DonText>
            "Cada uno debe dar según el deseo de su corazón, No con tristeza, ni
            por Necesidad, ¡Dios Ama al que da con Alegría!"
          </DonText>
          <DonP>2 CORINTIOS 9:7</DonP>
          <DonBtnWrap>
            <DonateButton
              to="Donate"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              ¡Donar!
            </DonateButton>
          </DonBtnWrap>
        </DonContent>
      </Donaciones>

      {
        //Ministerios Seccion
      }

      <MinContainer></MinContainer>
    </>
=======

    <>
    {
      //Sobre Nosotros Seccion
    }
    <InfoContainer>
      <InfoWrapper>
        <Col1>
          <TextContainer>
            <TopLine>{topLine}</TopLine>
            <Heading>{headLine}</Heading>
            <Subtitle>{description}</Subtitle>
          </TextContainer>
          <ActionContainer>
            <InfoBox>
              <BoxIcon><FaPrayingHands /></BoxIcon>
              <BoxTextH1>PETICIÓN DE ORACIÓN</BoxTextH1>
              <BoxTextP>Lorem ipsum dolor, consectetur elit, sed do tempor incididunt labore.</BoxTextP>
            </InfoBox>
            <InfoBox>
              <BoxIcon> <FaBookOpen /></BoxIcon>
              <BoxTextH1>ESTUDIOS BIBLICOS</BoxTextH1>
              <BoxTextP>Lorem ipsum dolor, consectetur elit, sed do tempor incididunt labore.</BoxTextP>
            </InfoBox>
          </ActionContainer>
          <BtnWrap>
                  <Button
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    NUESTRA HISTORIA
                  </Button>
                </BtnWrap>
        </Col1>
        <Col2>
          <ImgWrap></ImgWrap>
        </Col2>
      </InfoWrapper>
    </InfoContainer>
    
    {
      //Ministerios Seccion
    }

    <Donaciones>
    <DonBg />
    <DonContent>
        <DonateImg src={Logo} />
        <DonText>"Cada uno debe dar según el deseo de su corazón,
          No con tristeza, ni por Necesidad, 
          ¡Dios Ama al que da con Alegría!"
        </DonText>
        <DonP>2 CORINTIOS 9:7</DonP>
        <DonBtnWrap>
                  <DonateButton
                    to="Donate"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    ¡Donar!
                  </DonateButton>
                </DonBtnWrap>
      </DonContent>
    </Donaciones>
    </>
    
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
  );
};

export default InfoSection;
