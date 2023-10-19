export default function ElementoCuerpo({Titulo, Descripcion}) {
  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold text-body-emphasis">{Titulo}</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">{Descripcion}</p>
      </div>
    </div>
  );
}
