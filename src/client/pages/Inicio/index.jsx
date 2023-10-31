import { ModulosInicioData } from "../../data/datos";

import Carousel from "./SubComponents/Carousel";
import Modulo from "./SubComponents/Modulo";

export default function Inicio() {
  return (
    <main className="container-fluid">
      {ModulosInicioData.map((modulo, index) => {
        return <Modulo key={index} Posicion={index % 2 === 0 ? "left" : "right"} UrlImg={modulo.urlimg} AltImg={modulo.alt} Titulo={modulo.titulo} Texto={modulo.texto} BotonURL={modulo.enlace} />;
      })}
      <Carousel />
    </main>
  );
}
