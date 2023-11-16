import { Link } from "react-router-dom";

export default function CardNoticia({ Titulo, PublicadoPor, Fecha, ImgUrl, Alt, UrlNoticia }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img src={ImgUrl} className="bd-placeholder-img card-img-top" height={"300px"} alt={Alt} />
        <div className="card-body d-flex flex-column justify-content-between">
          <small className="card-text">{Fecha}</small>
          <h6 className="card-title">{PublicadoPor}</h6>
          <h5 className="card-text">{Titulo}</h5>
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <Link
                to={UrlNoticia}
                type="button"
                className="btn btn-sm btn-rounded btn-outline-danger">
                Leer noticia completa
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
