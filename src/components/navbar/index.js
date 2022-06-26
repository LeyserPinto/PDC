import React from "react";
import { FaBars, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import {
  Nav,
  NavContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavA,
  NavRSocial,
} from "./navElements";

const Navbar = ({ toggle, seeNav, seeColor }) => {
  return (
    <>
      <Nav seeNav={seeNav} seeColor={seeColor}>
        <NavContainer seeColor={seeColor}>
          <NavLogo to="/" seeColor={seeColor}>Iglesia Puertas Del Cielo</NavLogo>
          <MobileIcon onClick={toggle} seeColor={seeColor}>
            <FaBars />
          </MobileIcon>
          <NavMenu >
            <NavItem >
              <NavLinks to="/" seeColor={seeColor}>Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Contenido"seeColor={seeColor}>Contenido</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Ministerios"seeColor={seeColor}>Ministerios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Predicas"seeColor={seeColor}>Predicas</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Eventos"seeColor={seeColor}>Eventos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Blog"seeColor={seeColor} >Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Contactanos"seeColor={seeColor}>Contactanos</NavLinks>
            </NavItem>
          </NavMenu>
          <NavRSocial>
            <NavItem>
              <NavA href="https://www.facebook.com" seeColor={seeColor}>
                <FaFacebookF />
              </NavA>
            </NavItem>
            <NavItem>
              <NavA href="https://www.facebook.com" seeColor={seeColor}>
                <FaYoutube />
              </NavA>
            </NavItem>
            <NavItem>
              <NavA href="https://www.facebook.com" seeColor={seeColor}>
                <FaWhatsapp />
              </NavA>
            </NavItem>
          </NavRSocial>
        </NavContainer>
      </Nav>
    </>
  );
};

export default Navbar;
