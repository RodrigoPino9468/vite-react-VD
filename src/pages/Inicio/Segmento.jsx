import SegmentoBotones from "./SegmentoBotones";

export default function Segmento({ Posicion, UrlImg, AltImg, Titulo, Texto, Botones }) {
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
        {Botones && (
          <div className="container d-flex flex-row justify-content-center align-items-center">
            <SegmentoBotones Titulo={"Más información"} />
            <SegmentoBotones Titulo={"Contáctanos"} />
          </div>
        )}
      </div>
    </div>
  );
}
