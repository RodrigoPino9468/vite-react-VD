import { Link } from "react-router-dom";

export default function Modulos({ Posicion, UrlImg, AltImg, Titulo, Texto, BotonURL }) {
  const imgSide = Posicion === "left" ? "col-12 col-sm-6 order-1" : "col-12 col-sm-6 order-1 order-sm-2";
  const textSide = Posicion === "left" ? "col-12 col-sm-6 order-2" : "col-12 col-sm-6 order-2 order-sm-1";

  return (
    <div className="row py-3 py-sm-0">
      <div className={`container ${imgSide} p-0 shadow`}>
        <img src={UrlImg} alt={AltImg} className="w-100 h-auto" />
      </div>
      <div className={`container ${textSide} d-flex flex-column justify-content-center align-items-center`}>
        <div className="container d-flex flex-column justify-content-center align-items-center">
          <h3 className="">{Titulo}</h3>
          <p className="">{Texto}</p>
        </div>
        <div className="container d-flex flex-row justify-content-center align-items-center">
          <div className="col-6 d-flex flex-row justify-content-center">
            <Link to={"/contacto"} className="btn btn-sm" style={{ background: "#B73B58", color: "white" }}>
              Contactanos
            </Link>
          </div>
          <div className="col-6 d-flex flex-row justify-content-center">
            <Link to={BotonURL} className="btn btn-sm" style={{ background: "#B73B58", color: "white" }}>
              Más información
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


