import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ seeNav }) => (seeNav ? "transparent" : "transparent")};
  height: 80px;
  margin-top: -80px;
  display: ${({ seeNav }) => (seeNav ? "flex" : "none")};
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  transition: all 0.5s ease-in-out;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-in-out;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100vw;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
`;

export const NavLogo = styled(LinkR)`
  cursor: pointer;
  font-size: 1.12rem;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  margin-left: 24px;
  font-weight: 400;
  text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover {
    color: #ffcd38;
  }
`;

export const MobileIcon = styled.nav`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  justify-self: flex-end;
  align-items: center;
  list-style: none;
  text-align: none;
  margin-right: 22px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled(LinkS)`
  position: relative;
  color: #fff;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin: 0;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffcd38;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    color: #010606;
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    &::before {
      transform: scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
`;
export const NavA = styled.a`
  position: relative;
  color: #fff;
  font-weight: 400;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  margin: 0;
  height: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &::before {
    content: "";
    position: absolute;
    top: 60px;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #ffcd38;
    transform: scale(0);
    transition: all 0.2s ease-in-out;
  }
  &:hover {
    color: #010606;
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    &::before {
      transform: scale(1.2);
      transition: all 0.2s ease-in-out;
    }
  }
`;
export const NavRSocial = styled.div`
  display: flex;
  justify-self: flex-end;
  align-items: center;
  list-style: none;
  text-align: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;