// Modulos
import {} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import Layout from "./components/Layout";
import NotFound404 from "./components/Error404";

// Paginas
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
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="programas" element={<Programas />}></Route>
        <Route path="recursos" element={<h1>Recursos</h1>} />
        <Route path="donaciones" element={<Donaciones />} />
        <Route path="servicios" element={<Servicios />} />
        <Route path="noticias" element={<Noticias />} />
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
