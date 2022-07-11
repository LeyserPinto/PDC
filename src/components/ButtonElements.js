import styled from "styled-components";

import { Link } from "react-scroll";


//Boton
export const Button = styled(Link)`   
  width: 150px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  font-size: 14px;
  font-weight: 500;
  background-color:#112d4e;
  color: #fff;
  border-radius:2.5px;
  transition:all ease-in-out .5s;
  &:hover {
    border: 1px solid #112d4e;

    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 10px;
    background-color: #fff;
    color: #112d4e;
  }
`;


//Boton de Donaciones
export const DonateButton = styled(Link)`   
margin: 0 auto;
  width: 150px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor:pointer;
  font-size: 1.2rem;
  font-weight: 500;
  background-color:#5B8BD8;
  color: #FFF;
  border-radius:1.2px;
  transition:all ease-in-out .5s;
  &:hover {
    //border: 1px solid #112d4e;

    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 10px;
    background-color:#1759BD;
    color: #FFF;
  }
`;
