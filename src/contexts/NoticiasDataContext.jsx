import { createContext, useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import NoticiasData from "../../data/Noticias.json";

export const NoticiasDataContext = createContext();

export const NoticiasDataProvider = ({ children }) => {
  const { noticias } = NoticiasData;

  const filtrarNoticia = (ruta) => {
    const noticiaId = noticias.find((obj) => obj.ruta === ruta);

    if (!noticiaId) {
      return { error: "Error: noticia no encontrada" };
    }

    return noticiaId;
  };

  return (
    <NoticiasDataContext.Provider value={{ noticias, filtrarNoticia }}>
      {children ? children : <Outlet />}
    </NoticiasDataContext.Provider>
  );
};

export const useNoticieroData = () => {
  return useContext(NoticiasDataContext);
};
