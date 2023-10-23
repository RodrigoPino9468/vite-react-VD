import {} from "react";

export default function OpćionesDonaciones() {
  return (
    <div className="container marketing">
      <hr className="featurette-divider" />
      <div className="row featurette">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">Transferencias programadas o únicas</h2>
          <p className="lead">Recomendamos este medio de donación, donde cada socio y socia puede realizar la transferencia desde su propia cuenta bancaria. Accede a la información haciendo clic en el botón:</p>
          <button type="button" className="btn btn-danger">
            Ingrese Aqui
          </button>
        </div>
        <div className="col-md-5">
          <img src="/img/donaciones/transferencias.jpg" alt="Hola" className="featurette-image img-fluid mx-auto" width="500" height="500" />
        </div>
      </div>

      <hr className="featurette-divider" />

      <div className="row featurette">
        <div className="col-md-7 order-md-2">
          <h2 className="featurette-heading fw-normal lh-1">Plataforma DonarOnline.org</h2>
          <p className="lead">Sistema especializado en donaciones para organizaciones sin fines de lucro, es rápido y seguro. ¡Puedes donar desde cualquier parte del mundo! Clic para más información:</p>
          <button type="button" className="btn btn-danger">
            Ingrese Aqui
          </button>
        </div>
        <div className="col-md-5 order-md-1">
          <img src="/img/donaciones/donar_online.jpg" alt="Hola" className="featurette-image img-fluid mx-auto" width="500" height="500" />
        </div>
      </div>
      <hr className="featurette-divider" />
    </div>
  );
}
