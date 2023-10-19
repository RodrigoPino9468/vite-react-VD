import {} from "react";

export default function Servicio({ Foto, Nombre, Descripcion }) {
  return (
    <div className="col">
      <div className="card shadow-sm h-100">
        <img className="card-img-top img-servicio" src={Foto} alt="Card image" />
        <div className="modal" id={`${Nombre}-modal`}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{Nombre}</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">{Descripcion}</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <h4 className="card-title">{Nombre}</h4>
          <a className="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#${Nombre}-modal`}>
            Mas informacion
          </a>
        </div>
      </div>
    </div>
  );
}