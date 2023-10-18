import Carousel from "./Carousel";
import Segmento from "./Segmento";
import Demo from "./Demo";
import { SegmentosData } from "../../data/datos";

export default function Inicio() {
  return (
    <main>
      <div className="container-fluid">
        {SegmentosData.map((segmento, index) => {
          return <Segmento key={index} Posicion={index % 2 === 0 ? "left" : "right"} UrlImg={segmento.urlimg} AltImg={segmento.alt} Titulo={segmento.titulo} Texto={segmento.texto} Botones={true} />;
        })}
      </div>

      {/* <Demo /> */}
      <Carousel />
    </main>
  );
}
