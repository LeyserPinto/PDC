import styled from "styled-components";

import Img from "../../images/img1.webp";

import DonImg from "../../images/Donate.jpg";

//Div Principal Sobre Nosotros
export const InfoContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  min-height: 80vh;
  margin: 0 auto;
  padding: 10px;
`;
//Div Grid Layout: Hijo de InfoCOntainer
export const InfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: 1fr;

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`;

//Div Grid Columna: Hijo de InfoWrapper
<<<<<<< HEAD
export const Col1 = styled.div``;
//Div Grid Columna: Hijo de InfoWrapper
export const Col2 = styled.div``;
=======
export const Col1 = styled.div`
  
`;
//Div Grid Columna: Hijo de InfoWrapper
export const Col2 = styled.div`

`;
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
//Div para Texto: Hijo de Col1
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
//P  Area de texto, Superior En este Caso Sobre la Iglesia: Hijo de TextContainer
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
//H1  Area de texto,En este caso dice Iglesia Puertas del Cielo: Hijo de TextContainer
export const Heading = styled.h1`
  color: #112d4e;
  font-size: 48px;
  line-height: 1.1;
  margin-bottom: 24px;

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

//P  Area de texto, En este caso dice Resumen de la Iglesia: Hijo de TextContainer
export const Subtitle = styled.p`
  max-width: 600px;
  color: #0c0c0c;
  line-height: 20px;
  font-size: 14px;
  padding: 10px;
  @media screen and (max-width: 800px) {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    overflow: hidden;
    height: 70px;
  }
`;

//Div para Botones: Hijo de Col1
export const ActionContainer = styled.div`
  margin: 0 auto;
  width: 80%;
  height: 30%;
  //border: 1px solid #0c0c0c;
  display: flex;
  justify-content: space-around;
  @media screen and (max-width: 800px) {
<<<<<<< HEAD
    height: 40%;
=======
    
  height: 40%;
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
  }
`;
//Div ActionBox: Hijo de Col1
export const InfoBox = styled.div`
  width: 50%;
  height: 80%;
  padding: 5px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;
//Div ActionBox: Hijo de InfoBox
export const BoxIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: #5698ce;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 35px;
  color: #081d35;
  cursor: pointer;
  transition: all ease-in-out 0.5s;
  &:hover {
    transform: scale(1.2);
    color: #ffc305;
  }
`;

//H1 Area de texto, ActionBox: Hijo de InfoBox
export const BoxTextH1 = styled.h1`
  width: 100%;
  font-size: 14px;
  color: #ffc305;
`;

//P Area de texto, ActionBox: Hijo de InfoBox
export const BoxTextP = styled.p`
  width: 100%;
  font-size: 10px;
  color: #3c3c3c;
`;

//Div Boton Wrapper: Hijo de Col1
export const BtnWrap = styled.div`
<<<<<<< HEAD
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;
  @media screen and (max-width: 800px) {
    height: 10%;
  }
`;

=======
width: 80%;
margin: 0 auto;
display:flex;
justify-content:flex-start;
@media screen and (max-width: 800px) {
    height: 10% ;
    
  }

`;

>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
//Div Imagen Wrapper: Hijo de Col2
export const ImgWrap = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${Img});
  object-fit: cover;
  background-position: center;
  background-size: cover;

  @media screen and (max-width: 800px) {
    height: calc(100% - 25px);
<<<<<<< HEAD
    margin-top: 25px;
  }
`;

//Div: Donaciones
export const Donaciones = styled.div`
=======
    margin-top:25px;
    
  }
`;


//Div: Donaciones
export const Donaciones = styled.div`
  max-width: 1440px;
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
  width: 100%;
  height: 70vh;
  margin: 0 auto;

<<<<<<< HEAD
  position: relative;
`;

//Div: Donaciones Background: Hijo de Donaciones
export const DonBg = styled.div`
  width: 100%;
  height: 100%;
  background: url(${DonImg});
  background-position: center;
  background-size: cover;
  position: relative;

  &::before {
    content: "";
=======
  position:relative;
  
`;


//Div: Donaciones Background: Hijo de Donaciones
export const DonBg = styled.div`
 width:100%;
 height:100%;
 background: url(${DonImg});
 background-position: center;
 background-size: cover;
 position:relative;

 &::before{
  content: "";
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
<<<<<<< HEAD
    background: #091f38d9; /* Chrome 10-25, Safari 5.1-6 */
    z-index: 2;
  }
=======
    background:#091f38d9; /* Chrome 10-25, Safari 5.1-6 */
    z-index: 2;
 }
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
`;
//Div: Donaciones Background: Hijo de Donaciones
export const DonContent = styled.div`
  z-index: 2;
  width: 80%;
<<<<<<< HEAD
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  //50% -( 100% / 2)= 50% - 50%=0%;
  top: 10%;
  //50% -( 80% / 2)= 50% - 40%=10%;
  left: 10%;
  padding: 40px;
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80%;
    top: 10%;
    left: 0%;
=======
  height:100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position:absolute;
  top:0;
  left:10%;
  padding:40px;
  @media screen and (max-width: 800px) {
    width:100%;
    
  left:0;
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
  }
`;

//Img: Donaciones Logo Iglesia: Hijo de DonContent
<<<<<<< HEAD
export const DonateImg = styled.img`
  width: 150px;
=======
export const DonateImg = styled.img`  
  width:150px;  
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
`;

//P: Text Area: Hijo de DonContent
export const DonText = styled.p`
<<<<<<< HEAD
  padding: 20px;
  width: 80%;
  font-size: 1.6rem;
  color: #fff;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    width: 100%;
=======
  padding:20px;
  width:80%;
  font-size: 1.6rem;
  color: #FFF;
  text-align: center;
  font-weight:700;
  text-transform:uppercase;
  @media screen and (max-width: 800px) {
    font-size: 1.5rem;
    width:100%;
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
  }
  @media screen and (max-width: 600px) {
    font-size: 1rem;
  }
`;

//P: Text Area: Hijo de DonContent
export const DonP = styled.p`
  font-size: 1.3125rem;
<<<<<<< HEAD
  margin: 10px;
=======
  margin:10px;
>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
  color: #fff;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
//div:Area de Boton: Hijo de DonContent
export const DonBtnWrap = styled.div`
<<<<<<< HEAD
  margin-top: 20px;
  width: 80%;
`;

//div:Area de Boton: Hijo de DonContent
export const MinContainer = styled.div`
  width: 100%;
  height: 70vh;
  margin: 0 auto;
`;
=======
  width:80%;
`;

>>>>>>> f5bc19aa12baf9e3d21c110ef7ab6d428f6c91ab
