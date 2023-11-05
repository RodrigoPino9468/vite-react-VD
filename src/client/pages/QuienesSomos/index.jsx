import { ColaboradoresData, QuienesSomosData } from "../../../../data/datos";
import Colaborador from "./SubComponents/Colaborador";

export default function Index() {
  return (
    <main className="container-fluid mb-5 pb-5">
      {/* lema */}
      <section className="lema-fundacion row p-4 p-sm-5">
        <article id="imagenLema" className="col-md-7 order-md-2 p-sm-5">
          <h6 className="text-start ">{QuienesSomosData.cita_principal.texto}</h6>
          <h4 className="my-3">Fundación Vida Independiente Chile, {new Date().getFullYear()}.</h4>
        </article>
        <article id="textoLema" className="col-md-5 order-md-1">
          <img src="/img/fotos/Foto-1-QuienesSomos.png" className="featurette-image img-fluid mx-auto h-100 rounded" alt="Texto conmemorativo para representar la fundación" />
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
        <div className="row my-3">
          <h1 className="text-center fw-bold">Directorio</h1>
        </div>
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
          {ColaboradoresData.map((colaborador, index) => (
            <Colaborador key={index} Foto={colaborador.fotografia} Nombre={colaborador.nombre} Cargo={colaborador.cargo} Descripcion={colaborador.descripcion} Linkedin={colaborador.linkedin} />
          ))}
        </div>
      </div>
    </main>
  );
}
