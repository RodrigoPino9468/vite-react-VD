import { NavLink } from "react-router-dom";

export default function Colaborador({ Foto, Nombre, Cargo, Descripcion, Linkedin }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100" style={{backgroundColor: "#f1f2f6"}}>
        <img src={Foto} className="card-img-top rounded-circle border border-4" alt={Nombre} />
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text">
            <small className="text-muted">{Cargo}</small>
          </p>
          <h4 className="card-title">{Nombre}</h4>
          <p className="card-text">{Descripcion}</p>
          {Linkedin && (
            <NavLink to={Linkedin} className="btn btn-primary" target="_blank">
              Linkedin
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
