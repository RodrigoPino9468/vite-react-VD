import React from 'react';


const Cuerpo = () => {
    return (
        <div class='container-fluid'>
            {/* primera foto*/}
            <div class='row'>
                <div class='container col-6 p-0'>{/* p-0 dejo la imagen al principio del container*/}
                    <img src="../Fotos/Foto-1.png" alt="logo fundacion" class="w-100 h-auto">{/* w-100 h-auto hace q la imagen ocupe todo el container*/}</img>
                </div>
                <div class='container col-6 d-flex flex-column justify-content-center align-items-center'>
                    <div class='container d-flex flex-column justify-content-center align-items-center'>
                        <p class="Fuente-Titulos">Lema de la fundación</p>
                        <p class="Fuente-Textos">"Promover el derecho a vivir de</p>
                        <p class="Fuente-Textos">forma autónoma e independiente,</p>
                        <p class="Fuente-Textos">es aportar a la justicia social desde</p>
                        <p class="Fuente-Textos">la inclusión".</p>
                    </div>

                    <div class='container d-flex flex-row justify-content-center align-items-center'>
                        <div class='col-6 d-flex flex-row justify-content-center'>
                            <button class="btn Fuente-Textos Boton-Redondeado" style={{background:"#B73B58", color:"white"}}>Más informacion</button>
                        </div>
                        <div class='col-6 d-flex flex-row justify-content-center'>
                            <button class="btn Fuente-Textos Boton-Redondeado" style={{background:"#B73B58", color:"white"}}>Contactanos</button>
                        </div>
                    </div>
                </div>
            </div>

            {/* segunda foto*/}
            <div class='row'>
                <div class='container col-6 d-flex flex-column justify-content-center align-items-center'>
                    <div class='container d-flex flex-column justify-content-center align-items-center'>
                        <p class="Fuente-Titulos">Servicios</p>
                        <p class="Fuente-Textos">Nuestra fundación ofrece los siguientes</p>
                        <p class="Fuente-Textos">servicios enfocados en pomover la</p>
                        <p class="Fuente-Textos">inclusiónn social de personas con</p>
                        <p class="Fuente-Textos">discapacidad.</p>
                    </div>

                    <div class='container d-flex flex-row justify-content-center align-items-center'>
                        <div class='col-12 d-flex flex-row justify-content-center'>
                            <button class="btn Fuente-Textos Boton-Redondeado" style={{background:"#B73B58", color:"white"}}>Más informacion</button>
                        </div>
                    </div>
                </div>
                <div class='container col-6 p-0'>
                    <img src="../Fotos/Foto-2.png" alt="logo fundacion" class="w-100 h-auto"></img>
                </div>
            </div>

            {/* tercera foto*/}
            <div class='row'>
                <div class='container col-6 p-0'>
                    <img src="../Fotos/Foto-3.png" alt="logo fundacion" class="w-100 h-auto"></img>
                </div>
                <div class='container col-6 d-flex flex-column justify-content-center align-items-center'>
                    <div class='container d-flex flex-column justify-content-center align-items-center'>
                        <p class="Fuente-Titulos">Programas</p>
                        <p class="Fuente-Textos">Difusión de emprendimientos de venta de</p>
                        <p class="Fuente-Textos">productos o prestación de servicios</p>
                        <p class="Fuente-Textos">entregados por personas con discapacidad,</p>
                        <p class="Fuente-Textos">sus familias u organizaciones.</p>
                    </div>

                    <div class='container d-flex flex-row justify-content-center align-items-center'>
                        <div class='col-12 d-flex flex-row justify-content-center'>
                            <button class="btn Fuente-Textos Boton-Redondeado" style={{background:"#B73B58", color:"white"}}>Más informacion</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default Cuerpo;