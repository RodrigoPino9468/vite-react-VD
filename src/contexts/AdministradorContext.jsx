import { createContext, useContext, useState } from "react";

export const AdministradorContext = createContext();

export const AdministradorProvider = ({ children }) => {
  const [adminCredenciales, setAdminCredenciales] = useState(() => {
    try {
      const session_storage = sessionStorage.getItem("admin_credenciales");
      return JSON.parse(session_storage);
    } catch (error) {
      return null;
    }
  });
  const LoginAuth = (admin_credenciales) => {
    setAdminCredenciales(admin_credenciales);
    sessionStorage.setItem("admin_credenciales", JSON.stringify(admin_credenciales));
  };
  const LogoutAuth = () => {
    setAdminCredenciales(null);
    sessionStorage.removeItem("admin_credenciales");
  };
  return <AdministradorContext.Provider value={{ adminCredenciales, LogoutAuth, LoginAuth }}>{children}</AdministradorContext.Provider>;
};

export const useAdministrador = () => {
  return useContext(AdministradorContext);
};
