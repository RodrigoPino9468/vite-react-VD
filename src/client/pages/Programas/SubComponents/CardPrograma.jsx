import { NavLink } from "react-router-dom";
export default function CardPrograma({ UrlImg, Nombre, Descripcion, UrlInfo }) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={UrlImg} className="card-img-top" height={400} width={100} alt={Descripcion} />
        <div className="card-body">
          <h2 className="card-title">{Nombre}</h2>
          <p className="card-text">{Descripcion}</p>
        </div>
        <div className="d-flex justify-content-center m-4">
          <NavLink type="button" className="btn btn-sm btn-rounded" to={UrlInfo}>
            Más información
          </NavLink>
        </div>
      </div>
    </div>
  );
}
