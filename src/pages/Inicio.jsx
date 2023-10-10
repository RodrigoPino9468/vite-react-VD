import React from "react";

import Navbar from "../components/Navbar";
import MainMenu from "../components/MainMenu";
import Cuerpo from "../components/Cuerpo";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";

export default function Inicio() {
  return (
    <>
      <Navbar></Navbar>
      <MainMenu></MainMenu>
      <Cuerpo></Cuerpo>
      <Carousel></Carousel>
      <Footer></Footer>
    </>
  );
}
