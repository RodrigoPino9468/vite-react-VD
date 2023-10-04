import React from 'react';
import Navbar from './Navbar';
import MainMenu from './MainMenu';
import Footer from './Footer';
import CuerpoQuienesSomos from './CuerpoQuinesSomos';

function QuienesSomos() {
  return (
    <div>
      <Navbar></Navbar>
      <MainMenu></MainMenu> 
      <CuerpoQuienesSomos></CuerpoQuienesSomos>
      <Footer></Footer>
      
    </div>
  );
}

export default QuienesSomos;
