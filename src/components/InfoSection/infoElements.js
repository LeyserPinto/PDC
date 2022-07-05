import styled from "styled-components";

import Img from "../../images/img1.webp";

export const InfoContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 80vh;
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
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 60%;
  padding: 50px;
  margin-bottom: 30px;
  @media screen and (max-width: 800px) {
    height: 50%;
    
    margin-bottom: 20px;
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
  line-height: 20px;
  font-size: 14px;
  padding:10px;
  @media screen and (max-width: 800px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
    height:70px;
  }
`;
export const ActionContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 30%;
  //border: 1px solid #0c0c0c;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
    
  height: 50%;
  }
`;

export const InfoBox = styled.div`
  width: 50%;
  height: 80%;
  padding:5px;
  display:flex;
  flex-direction:column;
  flex-wrap:nowrap;
`;




export const BoxIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius:50%;
  background:#5698CE;
  display: flex;
  justify-content:center;
  align-items:center;
  font-size:35px;
  color:#081D35;
  cursor:pointer;
  transition: all ease-in-out .5s;
  &:hover{
    transform:scale(1.2);
    color: #FFC305;
  }
`;

export const BoxTextH1 = styled.h1`

  width: 100%;
  font-size:14px;
  color: #ffc305;
`;
export const BoxTextP = styled.p`
  width: 100%;
  font-size:10px;
  color:#3C3C3C;
`;


export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Img});
  object-fit: cover;
  background-position: center;
  background-size: cover;
`;