import React from 'react';
import {BsInstagram} from "react-icons/bs";
import {BsFacebook} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai";
import {AiFillYoutube} from "react-icons/ai";

const Footer = () => {
    return (
        <footer class='container-fluid' style={{background:"#BEB9BB"}}>
            <div class='row align-items-center'>
                <div class='col-md-4 col-sm-12'>
                    <ul class="nav flex-column justify-content-center align-items-center">
                        <li class="Fuente-Textos Footer">¿Quiénes somos?</li>
                        <li class="Fuente-Textos Footer">Servicios</li>
                        <li class="Fuente-Textos Footers">Cursos</li>
                        <li class="Fuente-Textos Footer">Programas</li>
                        <li class="Fuente-Textos Footer">noticias</li>
                        <li class="Fuente-Textos Footer">Donaciones</li>
                        <li class="Fuente-Textos Footer">Contactanos</li>
                    </ul>
                </div>

                <div class='col-md-4 col-sm-12'>
                    <div class='d-flex justify-content-center align-items-center'>
                        <img src="../Logo FVIC/Logo-Vic.png" class="img-fluid" alt="logo fundacion"></img>
                    </div>
                </div>

                <div class='col-md-4 col-sm-12'>
                    <ul class="nav flex-column justify-content-center align-items-center">
                        <li class="Fuente-Titulos Footer-2">Contacto</li>
                        <li class="Fuente-Textos Footer">Telefono:</li>
                        <li class="Fuente-Textos Footer">+56 9 4993 3983</li>
                        <li class="Fuente-Textos Footer">Correo</li>
                        <li class="Fuente-Textos Footer">Hola@fundacionvidaindependiente.cl</li>
                        <li class="Fuente-Textos Footer">Dirección </li>
                        <li class="Fuente-Textos Footer">Antonio varas 880, Providencia</li>
                    </ul>
                </div>
            </div>

            <div class='row align-items-center'>
                <div class='col-6 text-center Fuente-Derechos Footer'>Todos los derechos reservados @ 2023
                </div>

                <div class='col-6 text-center'>
                    <ul class="list-inline">
                        <li class="list-inline-item"> {/*<!-- Agregamos la clase d-inline -->*/}
                            <a class="nav-link" href="#"><BsInstagram style={{color:'black'}} size={15}></BsInstagram></a>
                        </li>
                        <li class="list-inline-item"> 
                            <a class="nav-link" href="#"><BsFacebook style={{color:'black'}} size={15}></BsFacebook></a>
                        </li>
                        <li class="list-inline-item">
                            <a class="nav-link" href="#"><AiFillYoutube style={{color:'black'}} size={15}></AiFillYoutube></a>
                        </li>
                        <li class="list-inline-item"> 
                            <a class="nav-link" href="#"><AiFillLinkedin style={{color:'black'}} size={15}></AiFillLinkedin></a>
                        </li>
                    </ul>
                </div>

            </div>

        </footer>
        
    );
};

export default Footer;