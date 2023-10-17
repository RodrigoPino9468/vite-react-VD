import { ProgramasData } from "../../data/datos";

import React, { useState } from "react";

export default function CuerpoServicios() {
  const [programaSeleccionado, setProgramaSeleccionado] = useState(null);

  const mostrarDetalles = (programa) => {
    if (programaSeleccionado?.id === programa.id) {
      setProgramaSeleccionado(null); // Si se hace clic en el mismo programa, cierra los detalles.
    } else {
      setProgramaSeleccionado(programa);
    }
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="container-fluid col-12 Fuente-Titulos d-flex flex-column justify-content-center align-items-center" style={{ color: "black" }}>
          Programas
        </div>

        {ProgramasData.map((programa, index) => (
          <div className="d-flex flex-column align-items-center col-lg-6 col-md-12" key={programa.id}>
            <img src={programa.Foto} alt={programa.NombrePrograma} style={{ margin: "10px 0", maxWidth: "100%", height: "auto", objectFit: "cover" }} />
            <h2 className="align-items-center">{programa.NombrePrograma}</h2>
            <button onClick={() => mostrarDetalles(programa)}>Más Información</button>
            {programa.id === programaSeleccionado?.id && (
              <p className="programa-detalles claro">
                {programa.Informacion.split("\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
