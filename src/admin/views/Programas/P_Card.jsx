import {} from "react";
import { Link } from "react-router-dom";

export default function ProgramaCard({ Id, Titulo, Descripcion, Texto, ImgUrl }) {
  return (
    <article className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5">
        {/* Imagen */}
        <section className="col-10 col-sm-8 col-lg-6">
          <img
            src={ImgUrl}
            width="700"
            height="500"
            alt="Bootstrap Themes"
            className="d-block mx-sm-auto img-fluid rounded"
          />
        </section>
        {/* Descripcion */}
        <section className="col-lg-6">
          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{Titulo}</h2>
          <p className="lead">{Descripcion}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <Link name="ver" type="button" className="btn btn-outline-primary" to={`${Id}`}>
              Ver detalles
            </Link>
            <Link
              name="editar"
              type="button"
              className="btn btn-outline-success"
              to={`${Id}/editar`}>
              Editar
            </Link>
            <Link
              name="eliminar"
              type="button"
              className="btn btn-outline-danger"
              to={`${Id}/eliminar`}>
              Eliminar
            </Link>
          </div>
        </section>
      </div>
    </article>
  );
}
