export default function Cards({ Foto, Alt, Nombre, Cargo, Descripcion }) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <img className="card-img-top" src={Foto} alt={Alt} />
      <div className="card-body">
        <h4 className="card-title Fuente-Titulos">{Nombre}</h4>
        <p className="card-text Fuente-Textos">{Cargo}</p>
        <p className="card-text Fuente-Textos">{Descripcion}</p>
      </div>
    </div>
  );
}
