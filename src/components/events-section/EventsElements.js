import styled from "styled-components";

export const EventsContainer = styled.div`
  width: 100%;
  height: 150px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const EventsLayout = styled.div`
  z-index: 10;
  position: absolute;
  top: -50px;
  width: 90%;
  height: 90%;
  overflow-x: auto;
  padding: 10px;
`;

export const EventsGrid = styled.div`
  width: 300%;
  height: 100%;
  display: grid;
  grid-template-columns: 30% 30% 30% 30% 30% 30%;
  gap: 20px;
`;

export const EventItem = styled.div`
  height: 100%;

  border: 1px solid #0c0c0c;
`;
