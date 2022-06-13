import styled from "styled-components";

import { Link } from "react-scroll";

export const Button = styled(Link)`
  width: 200px;
  height: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 500;
  outline: 0px solid;
  outline-color: rgba(255, 255, 255, 0.5);
  outline-offset: 0px;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transition: all 0.2s ease-in-out;
  color: #fff;
  &:hover {
    border: 1px solid #fff;

    outline: 1px solid;
    outline-color: rgba(255, 255, 255, 0);
    outline-offset: 10px;
    background-color: #fff;
    color: #0d6efd;
  }
`;
