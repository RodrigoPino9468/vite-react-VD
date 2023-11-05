import { createContext, useContext, useState } from "react";

export const AdministradorContext = createContext();

export const AdministradorProvider = ({ children }) => {
  const [adminUser, setAdminUser] = useState(null);
  const [autenticacion, setAutenticacion] = useState(false);

  const LoginAuth = () => {
    setAutenticacion(true);
  };

  const LogoutAuth = () => {
    setAutenticacion(false);
  };

  return <AdministradorContext.Provider value={{ autenticacion, LogoutAuth, LoginAuth }}>{children}</AdministradorContext.Provider>;
};

export const useAdministrador = () => {
  return useContext(AdministradorContext);
};
