import { createContext, useContext, useState } from "react";

export const AccesibilidadContext = createContext();

export const AccesibilidadProvider = ({ children }) => {
  const [ModoDeVista, setModoDeVista] = useState("modo-inicial");

  const [GrayScale, setGrayScale] = useState("normal");
  const [FondoBlanco, setFondoBlanco] = useState("normal");
  const [ModoContraste, setModoContraste] = useState("normal");
  const [TamañoFuente, setTamañoFuente] = useState("Fuente-normal");
  const [EnlacesSubrayados, setEnlaces] = useState("Enlaces-normales");

  const handleModoDeVista = () => {
    setModoDeVista(ModoDeVista === "normal" ? "modo-oscuro" : "normal");
  };

  const cambiarGris = () => {
    setGrayScale(GrayScale === "normal" ? "gris" : "normal");
  };

  const cambiarFondoBlanco = () => {
    setFondoBlanco(FondoBlanco === "normal" ? "blanco" : "normal");
  };

  const cambiarModoContraste = () => {
    setModoContraste(ModoContraste === "normal" ? "contraste" : "normal");
  };

  const cambiarTamaño = () => {
    setTamañoFuente(TamañoFuente === "Fuente-normal" ? "Grande" : "Fuente-normal");
  };

  const subrayarEnlaces = () => {
    setEnlaces(EnlacesSubrayados === "Enlaces-normales" ? "Subrayados" : "Enlaces-normales");
  };

  return (
    <AccesibilidadContext.Provider
      value={{
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
        subrayarEnlaces: subrayarEnlaces,
      }}>
      {children}
    </AccesibilidadContext.Provider>
  );
};

export const useAccesibilidad = () => {
  return useContext(AccesibilidadContext);
};
