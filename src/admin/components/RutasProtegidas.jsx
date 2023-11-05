import { Navigate, Outlet } from "react-router-dom";

export default function RutasProtegidas({ Autorizacion, Redireccionamiento, children }) {
  if (!Autorizacion) {
    return <Navigate to={Redireccionamiento} replace />;
  }
  return children ? children : <Outlet />;
}
