import CuerpoQuienesSomos from "./CuerpoQuinesSomos";
import Emblema from "./Emblema";
import { Route, Routes } from "react-router-dom";

// Rutas
// "/quienes-somos/memorias" -> /quienes-somos/memorias/:id.pdf

export default function QuienesSomos() {
  return (
    <main>
      <Emblema ImgURL={"/img/fotos/Foto-1-QuienesSomos.png"} Titulo={"LAVINTITNO"} Texto={"ALOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO"} Persona={"soltedo"} Cargo={"MAESTRO"} Año={2023} />
      <CuerpoQuienesSomos />
    </main>
  );
}
