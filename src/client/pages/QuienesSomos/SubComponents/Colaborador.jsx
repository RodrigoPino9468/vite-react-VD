import { Link } from "react-router-dom";

export default function Colaborador({ Foto, Nombre, Cargo, Descripcion, Linkedin }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img src={Foto} className="card-img-top rounded-circle border border-4" alt={Nombre} />
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text">
            <h6 className="">{Cargo}</h6>
          </p>
          <h4 className="card-title">{Nombre}</h4>
          <p className="card-text">{Descripcion}</p>
          {Linkedin && (
            <Link to={Linkedin} className="btn btn-rounded" target="_blank">
              Linkedin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
