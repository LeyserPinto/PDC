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
        </Col1>
        <Col2></Col2>
      </InfoWrapper>
    </InfoContainer>
  );
};

export default InfoSection;
