import React, { useState, createContext } from "react";

export const AccesibilidadContext = createContext();

export function AccesibilidadProvider({ children }) {
  const [ModoDeVista, setModoDeVista] = useState(false);
  const [GrayScale, setGrayScale] = useState(false);
  const [FondoBlanco, setFondoBlanco] = useState(false);
  const [ModoContraste, setModoContraste] = useState(false);
  const [TamañoFuente, setTamañoFuente] = useState(false);
  const [EnlacesSubrayados, setEnlaces] = useState(false);

  const handleModoDeVista = () => {
    setModoDeVista(ModoDeVista === false ? true : false);
    setGrayScale(false);
    setModoContraste(false);
    setFondoBlanco(false);
  };

  const cambiarGris = () => {
    setGrayScale(GrayScale === false ? true : false);
    setModoDeVista(false);
    setFondoBlanco(false);
    setModoContraste(false);
  };

  const cambiarFondoBlanco = () => {
    setFondoBlanco(FondoBlanco === false ? true : false);
    setModoDeVista(false);
    setGrayScale(false);
    setModoContraste(false);
  }

  const cambiarModoContraste = () => {
    setModoContraste(ModoContraste === false ? true : false);
    setModoDeVista(false);
    setGrayScale(false);
    setFondoBlanco(false);
  }

  const cambiarTamaño = () => {
    setTamañoFuente(TamañoFuente === false ? true : false)
  }

  const subrayarEnlaces = () => {
    setEnlaces(EnlacesSubrayados === false ? true : false);
  }

  return <AccesibilidadContext.Provider value={{ 
            modoDeVista: ModoDeVista, 
            handleModoDeVista: handleModoDeVista, 
            grayScale: GrayScale,
            cambiarGris: cambiarGris,
            fondoBlanco: FondoBlanco,
            cambiarFondoBlanco: cambiarFondoBlanco,
            modoContraste: ModoContraste,
            cambiarModoContraste: cambiarModoContraste,
            tamañoFuente: TamañoFuente,
            cambiarTamaño: cambiarTamaño,
            enlacesSubrayados: EnlacesSubrayados,
            subrayarEnlaces: subrayarEnlaces}}>
          {children}
        </AccesibilidadContext.Provider>;
}
