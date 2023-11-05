import Servicio from "./SubComponents/Servicio";
import { ServiciosData } from "../../../../data/datos";

export default function Index() {
  return (
    <main className="container my-5">
      <div className="row my-4">
        <h1 className="text-center">Servicios</h1>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {ServiciosData.map((servicio) => {
          return <Servicio key={servicio.id} Id={servicio.id} Foto={servicio.fotografia} Nombre={servicio.nombre} Descripcion={servicio.descripcion} />;
        })}
      </div>
    </main>
  );
}
