import React from 'react';
import { Link } from 'react-router-dom';

import Navbar from '../Components/Navbar';
import MainMenu from './MainMenu';
import Cuerpo from '../Components/Cuerpo';
import Carousel from '../Components/Carousel';
import Footer from '../Components/Footer';
import QuienesSomos from './QuienesSomos';

function PaginaInicio() {
  return (
    <div>
      <Navbar></Navbar>
      <MainMenu></MainMenu>
      <Cuerpo></Cuerpo>
      <Carousel></Carousel>
      <Footer></Footer>    
    </div>
  );
}

export default PaginaInicio;
