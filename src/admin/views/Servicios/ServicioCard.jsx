import {} from "react";

export default function ServicioCard({ Id, Titulo, Fecha, Autor, Descripcion, LogoUrl, LogoAlt }) {
  const fecha_publicacion = new Date(Fecha);

  const hanldeClick = (evento) => {
    const { name } = evento.target;
    console.log(`${name} -> ${Id}`);
  };

  return (
    <article className="col">
      <div className="card shadow-sm">
        <img src={LogoUrl} className="bd-placeholder-img card-img-top" alt={LogoAlt} width={"100%"} height={"225"} />
        <div className="card-body">
          <h5 className="card-title">{Titulo}</h5>
          <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <div className="d-flex justify-content-center align-items-center">
            <div className="btn-group">
              <button onClick={hanldeClick} name="ver" type="button" className="btn btn-sm btn-info mx-1 px-2 rounded">
                Ver
              </button>
              <button onClick={hanldeClick} name="editar" type="button" className="btn btn-sm btn-warning mx-1 px-2 rounded">
                Editar
              </button>
              <button onClick={hanldeClick} name="eliminar" type="button" className="btn btn-sm btn-danger mx-1 px-2 rounded">
                Eliminar
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
