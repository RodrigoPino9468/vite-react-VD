import React, { useState } from "react";

export default function CardServicios(props) {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <div className="card card-servicio claro card-servicio">
        <div className="modal" id="myModal">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">{props.Nombre}</h4>
                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">{props.Descripcion}</div>
              <div className="modal-footer">
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal">
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>

        <img className="card-img-top img-servicio" src={props.Foto} alt="Card image"></img>
        <div className="card-body">
          <h4 className="card-title">{props.Nombre}</h4>
          <a className="btn btn-primary Boton-Redondeado " data-bs-toggle="modal" data-bs-target="#myModal">
            Mas informacion
          </a>
        </div>
      </div>
    </div>
  );
}
