import {} from "react";

import Programa from "./ProgramaCard";
import { ProgramasData } from "../../../../data/datos";

export default function Programas() {
  return (
    <div>
      {
        ProgramasData.map((programa) => (
          <Programa
            key={programa.id}
            Id={programa.id}
            Titulo={programa.NombrePrograma}
            Descripcion={programa.DescripcionPrograma}
            Texto={programa.Informacion}
            ImgUrl={programa.Foto}
          />
        ))
      }
    </div>
  );
}

