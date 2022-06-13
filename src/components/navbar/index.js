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

const Navbar = ({ toggle, seeNav }) => {
  return (
    <>
      <Nav seeNav={seeNav}>
        <NavContainer>
          <NavLogo to="/">Iglesia Puertas Del Cielo</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="/">Inicio</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Contenido">Contenido</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Ministerios">Ministerios</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Predicas">Predicas</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Eventos">Eventos</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Blog">Blog</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/Contactanos">Contactanos</NavLinks>
            </NavItem>
          </NavMenu>
          <NavRSocial>
            <NavItem>
              <NavA href="https://www.facebook.com">
                <FaFacebookF />
              </NavA>
            </NavItem>
            <NavItem>
              <NavA href="https://www.facebook.com">
                <FaYoutube />
              </NavA>
            </NavItem>
            <NavItem>
              <NavA href="https://www.facebook.com">
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
