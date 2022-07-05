import React from "react";
import {FaPrayingHands, FaBookOpen} from 'react-icons/fa'

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
  BoxTextP,
} from "./infoElements";

const InfoSection = ({ topLine, headLine, description }) => {
  return (
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
        </Col1>
        <Col2>
          <ImgWrap></ImgWrap>
        </Col2>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
