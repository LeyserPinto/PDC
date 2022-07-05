import styled from "styled-components";

export const EventsContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LabelInputs = styled.div`
  margin-top: 10px;
  width: 80%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const RadioB = styled.label`
  background: #fff;
  padding: 5px;
  border-radius: 50%;
  border: 2px solid #00152f;
  z-index: 10;

  &:not(:last-child) {
    margin-right: 5px;
  }
  
  &:last-child {
    display:none;
    @media screen and (max-width:950px) {
    
      display:block;
  }
  }
  &:hover,
  :active {
    background-color: #00152f;
  }
`;
export const RButtom = styled.input``;
export const EventsLayout = styled.div`
  z-index: 5;
  position: absolute;
  top: -50px;
  width: 90%;
  height: 100%;
  overflow-x: hidden;
  padding: 10px;
  ${RButtom} {
    display: none;
  } 
`;


export const EventsGrid = styled.div`
  width: 200%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 100px;
  gap: 20px;
  transition: all 0.8s;

  @media screen and (max-width:780px) {
    
    
  grid-template-columns: repeat(4, 50%);
}
`;

export const EventItem = styled.div`
  position: relative;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-template-rows: 100%;
  padding: 10px;
  gap: 20px;
  border-radius: 5px; 
  box-shadow: 1px 1px 10px #0c0c0c40;
  background-color:#fff;

  @media screen and (max-width:500px){
    
  grid-template-columns: 1.2fr 3fr 0.5fr;
  }
`;


export const EventDate=styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`
export const TextDay=styled.p`
  width: 100%;
  height: 60%;
  background-color: #6aabe0;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  
  font-size:1.15rem;
  display: flex;
  align-items: center;
  justify-content:center;
  
    
`
export const TextTime=styled.p`
  width: 100%;
  height: 40%;
  background-color: #070f1d;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  text-align:center;
  color:#fff;
`

export const EventInfo=styled.div`
display: flex;
width:100%;
`
export const InfoText=styled.p`
  display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
`
export const Icon=styled.img`
    position: absolute;
    right: -10px;
    bottom: -15px;
    opacity: 35%;
    width: 7rem;
    transform: rotate(345deg);
    filter: grayscale(100%);/*Edge and Firefox*/
    -webkit-filter: grayscale(100%);/*Chrome and Safari*/    

`