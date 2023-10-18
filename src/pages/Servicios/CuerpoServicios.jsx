import { ServiciosData } from "../../data/datos";
import CardServicios from "./CardServicios";

export default function CuerpoServicios() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container-fluid col-12 Fuente-Titulos d-flex flex-column justify-content-center align-items-center" style={{ color: "white" }}>
          Servicios
        </div>
        {ServiciosData.map((obj, index) => {
          return <CardServicios key={index} Foto={obj.Foto} Nombre={obj.NombreServicio} Descripcion={obj.DescripcionServicio}></CardServicios>;
        })}
      </div>
    </div>
  );
}
