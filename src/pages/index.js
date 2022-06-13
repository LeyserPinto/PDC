import React, { useEffect, useState } from "react";
import EventsSection from "../components/events-section";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

var LastScrollPosition = 0;
const Home = () => {
  //Evento para Activar Toggle Buttom
  const [isOpen, setIsOpen] = useState(false);
  //Evento para detectar Scroll
  const [Scroll, SetScroll] = useState(0);
  //Evento para detectar Scroll
  const [seeNav, SetSeeNav] = useState(true);

  function Scrolling() {
    SetScroll(window.pageYOffset);

    if (Scroll >= LastScrollPosition) {
      SetSeeNav(false);
      LastScrollPosition = Scroll;
    } else {
      SetSeeNav(true);
      LastScrollPosition = Scroll;
    }
  }
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    function watchScroll() {
      window.addEventListener("scroll", Scrolling);
    }
    watchScroll();
    return () => {
      window.removeEventListener("scroll", Scrolling);
    };
  });

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} seeNav={seeNav} />
      <HeroSection />
      <EventsSection />
    </>
  );
};

export default Home;
