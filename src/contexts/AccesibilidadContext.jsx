import React, { useState, createContext } from "react";

export const AccesibilidadContext = createContext();

export function AccesibilidadProvider({ children }) {
  const [ModoDeVista, setModoDeVista] = useState("modo-inicial");
  const handleModoDeVista = (evento) => {
    setModoDeVista(evento.target.value);
  };

  return (
    <AccesibilidadContext.Provider value={{ ModoDeVista, handleModoDeVista }}>
      {children}
    </AccesibilidadContext.Provider>
  );
}
