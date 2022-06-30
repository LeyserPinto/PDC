import React from "react";
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
  PrayBox,
  ReadBox,
  ImgWrap,
} from "./InfoElements";

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
            <PrayBox></PrayBox>
            <ReadBox></ReadBox>
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
