import React, { useContext, useEffect, useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { AccesibilidadContext } from "../../contexts/AccesibilidadContext";

export default function Layout() {
  const { modoDeVista, grayScale, fondoBlanco, modoContraste, tamañoFuente, enlacesSubrayados} = useContext(AccesibilidadContext);

  useEffect(() => {

    if (modoDeVista === true){
      document.body.classList.add("dark-theme");
      document.getElementById("mySwitch2").checked = false;
      document.getElementById("mySwitch3").checked = false;
      document.getElementById("mySwitch4").checked = false;
    }else{
      document.body.classList.remove("dark-theme");
    }

    if (grayScale === true){
      document.body.classList.add("grayscale");
      document.getElementById("mySwitch1").checked = false;
      document.getElementById("mySwitch3").checked = false;
      document.getElementById("mySwitch4").checked = false;
    }else{
      document.body.classList.remove("grayscale");
    }

    if (modoContraste === true){
      document.body.classList.add("modo-contraste");
      document.getElementById("mySwitch1").checked = false;
      document.getElementById("mySwitch2").checked = false;
      document.getElementById("mySwitch4").checked = false;
    }else{
      document.body.classList.remove("modo-contraste");
    }

    if (fondoBlanco === true){
      document.body.classList.add("fondo-blanco");
      document.getElementById("mySwitch1").checked = false;
      document.getElementById("mySwitch2").checked = false;
      document.getElementById("mySwitch3").checked = false;
    }else{
      document.body.classList.remove("fondo-blanco");
    }

    if (tamañoFuente === true){
      document.body.classList.add("fuente-grande");
    }else{
      document.body.classList.remove("fuente-grande");
    }

    if (enlacesSubrayados === true){
      document.body.classList.add("Underlined");
    }else{
      document.body.classList.remove("Underlined");
    }
    
  }, [modoDeVista,grayScale, modoContraste, fondoBlanco, tamañoFuente, enlacesSubrayados]);

  
  return (
    <main >
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}
