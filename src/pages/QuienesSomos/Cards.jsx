export default function Cards(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <img className="card-img-top" src={props.Foto} alt="Card image"></img>
      <div className="card-body">
        <h4 className="card-title Fuente-Titulos">{props.Nombre}</h4>
        <p className="card-text Fuente-Textos">{props.Cargo}</p>
        <p className="card-text Fuente-Textos">{props.Descripcion}</p>
      </div>
    </div>
  );
}
