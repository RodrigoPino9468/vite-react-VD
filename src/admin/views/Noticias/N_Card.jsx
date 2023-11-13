import {} from "react";
import { Link } from "react-router-dom";

export default function NoticiaCard({ Id, Titulo, Fecha, Autor, Descripcion, LogoUrl, LogoAlt }) {
  const fecha_publicacion = new Date(Fecha);

  const hanldeClick = (evento) => {
    const { name } = evento.target;
    console.log(`${name} -> ${Id}`);
  };

  return (
    <article className="col">
      <div className="card shadow-sm">
        <img
          src={LogoUrl}
          alt={LogoAlt}
          width={"100%"}
          height={"225"}
          className="bd-placeholder-img card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{Titulo}</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in to additional
            content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <Link
                to={`${Id}`}
                name="ver"
                type="button"
                className="btn btn-sm btn-info mx-1 px-2 rounded">
                Ver
              </Link>
              <Link
                to={`${Id}/editar`}
                name="editar"
                type="button"
                className="btn btn-sm btn-warning mx-1 px-2 rounded">
                Editar
              </Link>
              <Link
                to={`${Id}/eliminar`}
                name="eliminar"
                type="button"
                className="btn btn-sm btn-danger mx-1 px-2 rounded">
                Eliminar
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
