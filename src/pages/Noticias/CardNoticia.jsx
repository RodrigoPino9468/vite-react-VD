import { Link } from "react-router-dom";

export default function CardNoticia({ Titulo, Texto, Fecha, ImgUrl, Alt, UrlNoticia }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img src={ImgUrl} className="bd-placeholder-img card-img-top" alt={Alt} />
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text">
            <small className="text-muted">{Fecha}</small>
          </p>
          <h6 className="card-title">{Titulo}</h6>
          <p className="card-text">{Texto}</p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <Link  to={UrlNoticia} ype="button" className="btn btn-sm btn-outline-danger">
                Leer noticia completa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
