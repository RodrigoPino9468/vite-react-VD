import Servicio from "./Servicio";
import { ServiciosData } from "../../data/datos";

export default function QuienesSomos() {
  return (
    <main className="container">
      <div className="row">
        <h1>Servicios</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {ServiciosData.map((element, index) => {
          return <Servicio key={index} Foto={element.Foto} Nombre={element.Nombre} Descripcion={element.Descripcion} />;
        })}
      </div>
      {/* <CuerpoServicios /> */}
    </main>
  );
}
