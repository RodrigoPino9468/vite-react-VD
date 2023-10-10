import React from "react";
import datos from "../../public/Mocking/Data";
import Cards from "./Cards";

export default function CuerpoQuinesSomos() {
  return (
    <div className="Container-fluid">
      <div className="row" style={{ background: "#7D143B", color: "white" }}>
        <div className="col-md-6 col-sm-12">
          <div className="d-flex justify-content-center align-items-center p-5">
            <img src="/img/fotos/Foto-1-QuienesSomos.png" className="img-fluid" alt="logo fundacion"></img>
          </div>
        </div>
        <div className="container-fluid col-6 d-flex flex-column justify-content-center align-items-center">
          <p className="Fuente-Textos">“La FVI reconoce que cada persona tiene habilidades</p>
          <p className="Fuente-Textos">únicas y potencial para contribuir en el campo laboral,</p>
          <p className="Fuente-Textos">independientemente de su discapacidad. Su enfoque</p>
          <p className="Fuente-Textos">se basa en el principio de la vida independiente, que</p>
          <p className="Fuente-Textos">busca empoderar a las personas con discapacidades</p>
          <p className="Fuente-Textos">para que tomen decisiones y controlen su propia vida,</p>
          <p className="Fuente-Textos">incluyendo su participación en el mundo laboral”.</p>
          <p className="Fuente-Textos">ChatGPT, transformer conocido, 2023.</p>
        </div>
      </div>
      <div className="row">
        <div className="container-fluid col-12 d-flex flex-column justify-content-center align-items-center">
          <p className="Fuente-Titulos">Misión</p>
          <p className="Fuente-Textos">Desarrollar estrategias, programas y proyectos que</p>
          <p className="Fuente-Textos">permitan a las personas con discapacidad y personas</p>
          <p className="Fuente-Textos">mayores, desenvolverse de manera autónoma y alcanzar</p>
          <p className="Fuente-Textos">una vida independiente en los diversos ámbitos del</p>
          <p className="Fuente-Textos">quehacer humano.</p>
        </div>
        <div className="container-fluid col-12 d-flex flex-column justify-content-center align-items-center">
          <p className="Fuente-Titulos">Visión</p>
          <p className="Fuente-Textos">"Nuestra visión es construir un futuro inclusivo</p>
          <p className="Fuente-Textos">donde las personas con discapacidades tengan igualdad de</p>
          <p className="Fuente-Textos">oportunidades en el campo laboral. Queremos eliminar</p>
          <p className="Fuente-Textos">las barreras y estigmas, promoviendo entornos de</p>
          <p className="Fuente-Textos">trabajo accesibles y adaptados. Buscamos que las</p>
          <p className="Fuente-Textos">habilidades y talentos únicos de las personas con</p>
          <p className="Fuente-Textos">discapacidades sean reconocidos y valorados, inspirando</p>
          <p className="Fuente-Textos">un cambio duradero en la sociedad hacia la inclusión</p>
          <p className="Fuente-Textos">y diversidad laboral."</p>
        </div>
      </div>
      <div className="row">
        <div className="container-fluid col-12 Fuente-Titulos d-flex flex-column justify-content-center align-items-center" style={{ background: "#EC6272" }}>
          Directorio
        </div>
        {datos.data.getColaboradores.map((obj, index) => {
          return <Cards key={index} Foto={obj.Foto} Nombre={obj.Nombre} Descripcion={obj.Descripcion} Cargo={obj.Cargo}></Cards>;
        })}
      </div>
    </div>
  );
}
