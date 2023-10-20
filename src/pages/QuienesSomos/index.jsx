import CuerpoQuienesSomos from "./CuerpoQuinesSomos";
import Emblema from "./Emblema";
import { Route, Routes } from "react-router-dom";
import { ColaboradoresData, QuienesSomosData } from "../../data/datos";
import Colaborador from "./Colaborador";

// Rutas
// "/quienes-somos/memorias" -> /quienes-somos/memorias/:id.pdf

export default function QuienesSomos() {
  return (
    <main className="container-fluid">
      {/* lema */}
      <section className="row p-4" style={{ background: "#7D143B", color: "white" }}>
        <article id="imagenLema" className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">
            Oh yeah, it’s that good. <span className="text-body-secondary">See for yourself.</span>
          </h2>
          <p className="lead">Another featurette? Of course. More placeholder content here to give you an idea of how this layout would work with some actual real-world content in place.</p>
        </article>
        <article id="textoLema" className="col-md-5 order-md-1">
          <img src="/img/fotos/Foto-1-QuienesSomos.png" className="featurette-image img-fluid mx-auto" width="auto" height="auto" alt="logo fundacion" />
        </article>
      </section>

      {/* mision */}
      <section className="row">
        <div className="px-4 py-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">{"Misión"}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{QuienesSomosData.mision}</p>
          </div>
        </div>
      </section>
      {/* vision */}
      <section className="row">
        <div className="px-4 py-5 text-center">
          <h1 className="display-5 fw-bold text-body-emphasis">{"Visión"}</h1>
          <div className="col-lg-6 mx-auto">
            <p className="lead mb-4">{QuienesSomosData.vision}</p>
          </div>
        </div>
      </section>
      {/* colaboradores */}
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

      {/* <CuerpoQuienesSomos /> */}
    </main>
  );
}
