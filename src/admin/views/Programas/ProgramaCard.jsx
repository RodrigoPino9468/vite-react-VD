import React from "react";

export default function ProgramaCard({ Id, Titulo, Descripcion, Texto, ImgUrl }) {
  const handleClick = (evento) => {
    const { name } = evento.target;
    console.log(`${name} -> ${Id}`);
  };

  return (
    <article className="container px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center justify-content-center g-5">
        {/* Imagen */}
        <section className="col-10 col-sm-8 col-lg-6">
          <img src={ImgUrl} className="d-block mx-sm-auto img-fluid rounded" alt="Bootstrap Themes" width="700" height="500" />
        </section>
        {/* Descripcion */}
        <section className="col-lg-6">
          <h2 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{Titulo}</h2>
          <p className="lead">{Descripcion}</p>
          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button name="verDetalles" type="button" className="btn btn-outline-primary" onClick={handleClick}>
              Ver detalles
            </button>
            <button name="editar" type="button" className="btn btn-outline-success" onClick={handleClick}>
              Editar
            </button>
            <button name="eliminar" type="button" className="btn btn-outline-danger" onClick={handleClick}>
              Eliminar
            </button>
          </div>
        </section>
      </div>
    </article>
  );
}
