import React from "react";
import { FaBars, FaFacebookF, FaYoutube, FaWhatsapp } from "react-icons/fa";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarExtLink,
  SidebarWrap,
  SidebarRoute,
} from "./sideElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="first" onClick={toggle}>
            Home
          </SidebarLink>
          <SidebarLink to="second" onClick={toggle}>
            Noticias
          </SidebarLink>
          <SidebarLink to="thrid" onClick={toggle}>
            Contenido
          </SidebarLink>
          <SidebarLink to="fourth" onClick={toggle}>
            Donaciones
          </SidebarLink>
        </SidebarMenu>
        <SidebarWrap>
          <SidebarExtLink to="*" onClick={toggle}>
            <FaFacebookF />
          </SidebarExtLink>
          <SidebarExtLink to="*" onClick={toggle}>
            <FaYoutube />
          </SidebarExtLink>
          <SidebarExtLink to="*" onClick={toggle}>
            <FaWhatsapp />
          </SidebarExtLink>
        </SidebarWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
