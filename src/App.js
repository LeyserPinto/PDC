import React,{useEffect,useState} from 'react'
import './App.css';
import {BrowserRouter} from "react-router-dom";
import Home from './pages';
import Navbar from '../src/components/navbar';
import Sidebar from '../src/components/sidebar'


var LastScrollPosition = 0;

function App() {
  //Evento para Activar Toggle Buttom
  const [isOpen, setIsOpen] = useState(false);
  //Evento para detectar Scroll
  const [Scroll, SetScroll] = useState(0);
  //Evento para detectar Scroll
  const [seeNav, SetSeeNav] = useState(true);
  
  //Evento para Color de NavBar
  const [seeColor, SetSeeColor] = useState('transparent');

  function Scrolling() {
    SetScroll(window.pageYOffset);

    if (Scroll >= LastScrollPosition) {
      SetSeeNav(false);
      LastScrollPosition = Scroll;
      console.log(LastScrollPosition);
    } else {
      SetSeeNav(true);
      LastScrollPosition = Scroll;
      if(LastScrollPosition<500){
        SetSeeColor('1-');
        
      console.log(seeColor);
      }else{
        
        SetSeeColor('2-');
        
      console.log(seeColor);
      }
      
      console.log(LastScrollPosition);
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
    <BrowserRouter>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} seeNav={seeNav} seeColor={seeColor} />
      <Home />
    </BrowserRouter>
  );
}

export default App;
