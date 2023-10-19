export default function Colaborador({Foto, Nombre, Cargo, Descripcion}) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img src={Foto} className="bd-placeholder-img card-img-top" alt={Nombre} />
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="card-text">
            <small className="text-muted">{Cargo}</small>
          </p>
          <h4 className="card-title">{Nombre}</h4>
          <p className="card-text">{Descripcion}</p>
        </div>
      </div>
    </div>
  )
}
