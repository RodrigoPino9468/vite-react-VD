import { Outlet } from "react-router-dom";
import CuerpoProgramas from "./CuerpoProgramas";

export default function Programas() {
  return (
    <main>
      <Outlet />
      <CuerpoProgramas />
    </main>
  );
}
