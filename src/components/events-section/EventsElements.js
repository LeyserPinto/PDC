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
  z-index: 50;

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
  z-index: 10;
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
  height: 100%;
  border: 1px solid #0c0c0c;
`;
