import React from 'react';
import datos from '../Mocking/Data';
import Cards from './Cards';


function CuerpoQuienesSomos() {
  return (
    <div className='Container-fluid'>
        <div className='row' style={{background:"#7D143B", color:"white"}}>
            <div class='col-md-6 col-sm-12'>
                <div class='d-flex justify-content-center align-items-center p-5'>
                    <img src="../Fotos/Foto-1-QuienesSomos.png" class="img-fluid" alt="logo fundacion"></img>
                </div>
            </div>
            <div class='container-fluid col-6 d-flex flex-column justify-content-center align-items-center'>
                <p class="Fuente-Textos">“La FVI reconoce que cada persona tiene habilidades</p>
                <p class="Fuente-Textos">únicas y potencial para contribuir en el campo laboral,</p>
                <p class="Fuente-Textos">independientemente de su discapacidad. Su enfoque</p>
                <p class="Fuente-Textos">se basa en el principio de la vida independiente, que</p>
                <p class="Fuente-Textos">busca empoderar a las personas con discapacidades</p>
                <p class="Fuente-Textos">para que tomen decisiones y controlen su propia vida,</p>
                <p class="Fuente-Textos">incluyendo su participación en el mundo laboral”.</p>
                <p class="Fuente-Textos">ChatGPT, transformer conocido, 2023.</p>
            </div>

        </div>
        <div className='row'>
            <div className='container-fluid col-12 d-flex flex-column justify-content-center align-items-center'>
                <p class="Fuente-Titulos">Misión</p>
                <p class="Fuente-Textos">Desarrollar estrategias, programas y proyectos que</p>
                <p class="Fuente-Textos">permitan a las personas con discapacidad y personas</p>
                <p class="Fuente-Textos">mayores, desenvolverse de manera autónoma y alcanzar</p>
                <p class="Fuente-Textos">una vida independiente en los diversos ámbitos del</p>
                <p class="Fuente-Textos">quehacer humano.</p>
            </div>

            <div className='container-fluid col-12 d-flex flex-column justify-content-center align-items-center'>
                <p class="Fuente-Titulos">Visión</p>
                <p class="Fuente-Textos">"Nuestra visión es construir un futuro inclusivo</p>
                <p class="Fuente-Textos">donde las personas con discapacidades tengan igualdad de</p>
                <p class="Fuente-Textos">oportunidades en el campo laboral. Queremos eliminar</p>
                <p class="Fuente-Textos">las barreras y estigmas, promoviendo entornos de</p>
                <p class="Fuente-Textos">trabajo accesibles y adaptados. Buscamos que las</p>
                <p class="Fuente-Textos">habilidades y talentos únicos de las personas con</p>
                <p class="Fuente-Textos">discapacidades sean reconocidos y valorados, inspirando</p>
                <p class="Fuente-Textos">un cambio duradero en la sociedad hacia la inclusión</p>
                <p class="Fuente-Textos">y diversidad laboral."</p>
            </div>

        </div>
        <div className='row'>
            <div className='container-fluid col-12 Fuente-Titulos d-flex flex-column justify-content-center align-items-center' style={{background:"#EC6272"}}>Directorio

            </div>
            {
                datos.data.getColaboradores.map(obj =>{
                    return(
                        <Cards Foto={obj.Foto} Nombre={obj.Nombre} Descripcion={obj.Descripcion} Cargo={obj.Cargo}></Cards>
                    )
                })
            }

        </div>
    </div>
  );
}

export default CuerpoQuienesSomos;