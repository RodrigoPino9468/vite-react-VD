import { ColaboradoresData, QuienesSomosData } from "../../data/datos";
import Colaborador from "./Colaborador";
import ElementoCuerpo from "./ElementoCuerpo";

export default function CuerpoQuinesSomos() {
  return (
    <>
      <div className="container-fluid">
        
        <div className="row">
          <ElementoCuerpo Titulo={"Misión"} Descripcion={QuienesSomosData.mision} />

          <ElementoCuerpo Titulo={"Visión"} Descripcion={QuienesSomosData.vision} />
        </div>
      </div>

      <div className="container">
        <div className="row">
          <h3>Directorio</h3>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
          {ColaboradoresData.map((element, index) => (
            <Colaborador key={index} Foto={element.Foto} Nombre={element.Nombre} Cargo={element.Cargo} Descripcion={element.Descripcion} />
          ))}
        </div>
      </div>
    </>
  );
}
