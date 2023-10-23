// Modulos
import {} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Layout from "./components/Layout";
import NotFound404 from "./components/Error404";

// Paginas
import Recursos from "./pages/Recursos/index";
import Inicio from "./pages/Inicio/index";
import Noticias from "./pages/Noticias/index";
import Contacto from "./pages/Contacto/index";
import Servicios from "./pages/Servicios/index";
import Programas from "./pages/Programas/index";
import Donaciones from "./pages/Donaciones/index";
import QuienesSomos from "./pages/QuienesSomos/index";

// Hoja de estilos
import "./assets/main.css";

// Funcion de Rutas principal de la App
const Application = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />

        {/* Sin subRutas */}
        <Route path="contacto" element={<Contacto />} />
        <Route path="recursos" element={<Recursos />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />

        {/* Con subRutas */}
        <Route path="noticias/*" element={<Noticias />} />
        <Route path="servicios/*" element={<Servicios />} />
        <Route path="programas/*" element={<Programas />} />
        <Route path="donaciones/*" element={<Donaciones />} />

        {/* Pagina de error */}
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
};

// Renderizado en el DOM
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Application />
  </BrowserRouter>
);
