import React from "react";

import Navbar from "../components/Navbar";
import MainMenu from "../components/MainMenu";
import Footer from "../components/Footer";
import CuerpoQuienesSomos from "../components/CuerpoQuinesSomos";

export default function QuienesSomos() {
  return (
    <>
      <Navbar></Navbar>
      <MainMenu></MainMenu>
      <CuerpoQuienesSomos></CuerpoQuienesSomos>
      <Footer></Footer>
    </>
  );
}
