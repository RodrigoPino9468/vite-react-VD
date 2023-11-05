import { createContext, useContext, useState } from "react";

export const AccesibilidadContext = createContext();

export const AccesibilidadProvider = ({ children }) => {
  const [ModoDeVista, setModoDeVista] = useState("modo-inicial");
  const handleModoDeVista = (evento) => {
    setModoDeVista(evento.target.value);
  };
  return <AccesibilidadContext.Provider value={{ ModoDeVista, handleModoDeVista }}>{children}</AccesibilidadContext.Provider>;
};

export const useAccesibilidad = () => {
  return useContext(AccesibilidadContext);
};
