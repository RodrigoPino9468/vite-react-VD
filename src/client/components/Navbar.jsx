import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { useAccesibilidad } from "../../contexts/AccesibilidadContext";

export default function Navbar() {
  const {
    handleModoDeVista,
    cambiarGris,
    cambiarFondoBlanco,
    cambiarTamaño,
    cambiarModoContraste,
    subrayarEnlaces,
  } = useAccesibilidad();

  return (
    <>
      {/* Contenedor Navbar  */}
      <nav className="sticky-top navbar navbar-color navbar-expand-md justify-content-center py-2">
        <div className="container-fluid">
          {/* Icono de configuracion de accesibilidad */}
          <NavLink
            className="navbar-brand m-0 p-0"
            data-bs-toggle="offcanvas"
            data-bs-target="#demo">
            <img
              src="/icons/logo.png"
              alt="Configuracion de accesibilidad"
              style={{ height: "32px", width: "32px" }}
            />
          </NavLink>

          {/* Inico hamburguesa del menu desplegable */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <GiHamburgerMenu className="navbar-toggler-icon" size={30} />
          </button>

          {/* Enlaces */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="quienes-somos" className="nav-link">
                  ¿Quiénes somos?
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="servicios" className="nav-link">
                  Servicios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="programas" className="nav-link">
                  Programas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="recursos" className="nav-link">
                  Recursos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="noticias" className="nav-link">
                  Noticias
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="donaciones" className="nav-link">
                  Donaciones
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="contacto" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Offcanvas de configuracion de accesibilidad */}
      <section>
        <div class="offcanvas offcanvas-start" id="demo">
          <div class="offcanvas-header">
            <h1 class="offcanvas-title">Configuración de accesibilidad</h1>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div class="offcanvas-body">
            <ul>
              <li>
                <span onClick={handleModoDeVista}>Modo Oscuro</span>
              </li>
              <li>
                <span onClick={cambiarGris}>Escala de grises</span>
              </li>
              <li>
                <span onClick={cambiarModoContraste}>Alto Contraste</span>
              </li>
              <li>
                <span onClick={cambiarFondoBlanco}>Fondo Blanco</span>
              </li>
              <li>
                <span onClick={cambiarTamaño}>Aumentar Fuente</span>
              </li>
              <li>
                <span onClick={subrayarEnlaces}>Subrayar Enlaces</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
