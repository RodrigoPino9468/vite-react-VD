import {} from "react";
import { Link } from "react-router-dom";

export default function ColaboradorCard({ Id, Nombre, Cargo, Descripcion, FotoUrl, ContactoUrl }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100" style={{ backgroundColor: "#f1f2f6" }}>
        <img
          src={FotoUrl}
          alt={Nombre}
          className="card-img-top border border-dark rounded-circle"
        />
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text">
            <small className="text-muted">{Cargo}</small>
          </p>
          <h4 className="card-title">{Nombre}</h4>
          <p className="card-text">{Descripcion}</p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group">
              {ContactoUrl && (
                <Link
                  to={ContactoUrl}
                  target="_blank"
                  name="ContactoUrl"
                  className="btn btn-sm btn-info mx-1 px-2 rounded">
                  Linkedin
                </Link>
              )}
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
    </div>
  );
}
