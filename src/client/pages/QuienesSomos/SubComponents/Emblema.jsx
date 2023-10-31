export default function Encabezado({ ImgURL, Titulo, Texto, Persona, Cargo, Año }) {
  return (
    <div className="container-fluid col-xxl-8 px-4 py-5">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={ImgURL} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="500" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">{Titulo}</h1>
          <p className="lead">{Texto}</p>
        </div>
      </div>
    </div>
  );
}
