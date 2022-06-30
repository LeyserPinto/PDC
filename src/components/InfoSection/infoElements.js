import styled from "styled-components";

import Img from "../../images/img1.webp";

export const InfoContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  height: 80vh;
  margin: 0 auto;
  padding: 10px;
`;

export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.8fr 1fr;
  }
`;
export const Col1 = styled.div`
  padding: 15px;
`;
export const Col2 = styled.div`
  border: 1px solid #0c0c0c;
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 60%;
  border: 1px solid #0c0c0c;
  padding: 50px;
  margin-bottom: 15px;
  @media screen and (max-width: 800px) {
    height: 65%;
  }
`;

export const TopLine = styled.p`
  color: #112d4e;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: "Open Sans", "Montserrat", sans-serif;
`;

export const Heading = styled.h1`
  color: #112d4e;
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 24px;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;
export const Subtitle = styled.p`
  max-width: 600px;
  color: #0c0c0c;
  line-height: 24px;
  font-size: 16px;
  margin-bottom: 35px;
  @media screen and (max-width: 800px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
  }
`;
export const ActionContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 30%;
  border: 1px solid #0c0c0c;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const PrayBox = styled.div`
  width: 40%;
  height: 80%;
  border: 1px solid #0c0c0c;
`;

export const ReadBox = styled.div`
  width: 40%;
  height: 80%;
  border: 1px solid #0c0c0c;
`;

export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Img});
  object-fit: cover;
  background-position: center;
  background-size: cover;
`;
