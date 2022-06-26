import styled from "styled-components";

export const HeroContainer = styled.div`

  background: #56ccf2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px 30px;
  width:100%;
  margin:0 auto;
  height: 100vh;
  position: relative;
  z-index: 1;

  :before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: -webkit-linear-gradient(
      to right,
      rgba(47, 128, 237, 0.6),
      rgba(86, 204, 242, 0.8)
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to right,
      rgba(47, 128, 237, 0.6),
      rgba(86, 204, 242, 0.8)
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    z-index: 2;
  }
`;
export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #016aff;
`;
// export const BgOverLayout =styled.div`
// position:absolute;
// top:0;
// width:100%;
// height:100%;
// background:rgba(1, 106, 255, 0.7);
// `

export const HeroContent = styled.div`
  z-index: 2;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroImg = styled.img`
  width: 200px;
`;

export const HeroH2 = styled.p`
  font-family: "Open Sans";
  font-size: 3.5rem;
  color: #112d4e;
  font-weight: bold;
  text-align: center;
  margin: 0%;
  @media screen and (max-width: 800px) {
    font-size: 2.8rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2rem;
  }
`;
export const HeroH1 = styled.p`
  font-size: 7rem;
  color: #fff;
  font-weight: bold;
  text-align: center;
  margin: 0%;
  @media screen and (max-width: 800px) {
    font-size: 3.75rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 2.625rem;
  }
`;
export const HeroP = styled.p`
  font-size: 1.3125rem;

  color: #112d4e;
  @media screen and (max-width: 800px) {
    font-size: 1rem;
  }
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;
