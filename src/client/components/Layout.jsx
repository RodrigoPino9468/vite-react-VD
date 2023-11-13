import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

import { useAccesibilidad } from "../../contexts/AccesibilidadContext";

import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  const { modoDeVista, grayScale, fondoBlanco, modoContraste, tamañoFuente, enlacesSubrayados } =
    useAccesibilidad();

  const [themeClass, setThemeClass] = useState("");
  const [tamaño, setTamaño] = useState("");
  const [subra, setSubra] = useState("");

  useEffect(() => {
    let newThemeClass = "";
    let newFuente = "";
    let subra = "";

    if (modoDeVista === "modo-oscuro") {
      newThemeClass = "dark-theme";
    }

    if (grayScale === "gris") {
      newThemeClass = "grayscale";
    }

    if (modoContraste === "contraste") {
      newThemeClass = "modo-contraste";
    }

    if (fondoBlanco === "blanco") {
      newThemeClass = "fondo-blanco";
    }

    if (tamañoFuente === "Grande") {
      newFuente = "fuente-grande";
    }

    if (enlacesSubrayados === "Subrayados") {
      subra = "Underlined";
    }

    setThemeClass(newThemeClass);
    setTamaño(newFuente);
    setSubra(subra);
  }, [modoDeVista, grayScale, fondoBlanco, modoContraste, tamañoFuente, enlacesSubrayados]);

  useEffect(() => {
    if (fondoBlanco === "blanco") {
      document.body.classList.add("cambiar-fuente");
    } else {
      document.body.classList.remove("cambiar-fuente");
    }
  }, [fondoBlanco]);

  useEffect(() => {
    if (modoDeVista === "modo-oscuro") {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("grayscale");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.remove("grayscale");
    }
  }, [modoDeVista]);

  useEffect(() => {
    if (grayScale === "gris") {
      document.body.classList.add("grayscale");
      document.body.classList.remove("dark-theme");
    } else {
      document.body.classList.remove("grayscale");
      document.body.classList.remove("dark-theme");
    }
  }, [grayScale]);

  return (
    <div className={`${themeClass} ${tamaño} ${subra}`}>
      <Header />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
