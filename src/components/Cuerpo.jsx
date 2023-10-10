import React from "react";

export default function Cuerpo() {
  return (
    <div className="container-fluid">
      {/* primera foto*/}
      <div className="row">
        <div className="container col-6 p-0">
          {/* p-0 dejo la imagen al principio del container*/}
          <img src="/img/fotos/Foto-1.png" alt="logo fundacion" className="w-100 h-auto">
            {/* w-100 h-auto hace q la imagen ocupe todo el container*/}
          </img>
        </div>
        <div className="container col-6 d-flex flex-column justify-content-center align-items-center">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <p className="Fuente-Titulos">Lema de la fundación</p>
            <p className="Fuente-Textos">"Promover el derecho a vivir de</p>
            <p className="Fuente-Textos">forma autónoma e independiente,</p>
            <p className="Fuente-Textos">es aportar a la justicia social desde</p>
            <p className="Fuente-Textos">la inclusión".</p>
          </div>

          <div className="container d-flex flex-row justify-content-center align-items-center">
            <div className="col-6 d-flex flex-row justify-content-center">
              <button className="btn Fuente-Textos Boton-Redondeado" style={{ background: "#B73B58", color: "white" }}>
                Más informacion
              </button>
            </div>
            <div className="col-6 d-flex flex-row justify-content-center">
              <button className="btn Fuente-Textos Boton-Redondeado" style={{ background: "#B73B58", color: "white" }}>
                Contactanos
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* segunda foto*/}
      <div className="row">
        <div className="container col-6 d-flex flex-column justify-content-center align-items-center">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <p className="Fuente-Titulos">Servicios</p>
            <p className="Fuente-Textos">Nuestra fundación ofrece los siguientes</p>
            <p className="Fuente-Textos">servicios enfocados en pomover la</p>
            <p className="Fuente-Textos">inclusiónn social de personas con</p>
            <p className="Fuente-Textos">discapacidad.</p>
          </div>

          <div className="container d-flex flex-row justify-content-center align-items-center">
            <div className="col-12 d-flex flex-row justify-content-center">
              <button className="btn Fuente-Textos Boton-Redondeado" style={{ background: "#B73B58", color: "white" }}>
                Más informacion
              </button>
            </div>
          </div>
        </div>
        <div className="container col-6 p-0">
          <img src="/img/fotos/Foto-2.png" alt="logo fundacion" className="w-100 h-auto"></img>
        </div>
      </div>

      {/* tercera foto*/}
      <div className="row">
        <div className="container col-6 p-0">
          <img src="/img/fotos/Foto-3.png" alt="logo fundacion" className="w-100 h-auto"></img>
        </div>
        <div className="container col-6 d-flex flex-column justify-content-center align-items-center">
          <div className="container d-flex flex-column justify-content-center align-items-center">
            <p className="Fuente-Titulos">Programas</p>
            <p className="Fuente-Textos">Difusión de emprendimientos de venta de</p>
            <p className="Fuente-Textos">productos o prestación de servicios</p>
            <p className="Fuente-Textos">entregados por personas con discapacidad,</p>
            <p className="Fuente-Textos">sus familias u organizaciones.</p>
          </div>

          <div className="container d-flex flex-row justify-content-center align-items-center">
            <div className="col-12 d-flex flex-row justify-content-center">
              <button className="btn Fuente-Textos Boton-Redondeado" style={{ background: "#B73B58", color: "white" }}>
                Más informacion
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
