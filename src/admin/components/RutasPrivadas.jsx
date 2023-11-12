import { Navigate, Outlet } from "react-router-dom";
import { useAdministrador } from "../../contexts/AdministradorContext";

export default function RutasProtegidas({ Redireccionamiento = "login", children }) {
  const { adminCredenciales } = useAdministrador();
  if (!adminCredenciales) {
    return <Navigate to={Redireccionamiento} replace />;
  }
  return children ? children : <Outlet />;
}
