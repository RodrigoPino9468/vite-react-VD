import { useState, useEffect, useContext } from "react";
import { AccesibilidadContext } from "../contexts/AccesibilidadContext";
import { NavLink } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const { ModoDeVista, handleModoDeVista } = useContext(AccesibilidadContext);

  useEffect(() => {
    console.log(ModoDeVista);
  }, [ModoDeVista]);

  return (
    <>
      {/* Contenedor Navbar  */}
      <nav className="sticky-top navbar navbar-color navbar-expand-md justify-content-center py-2">
        <div className="container-fluid">
          {/* Icono de configuracion de accesibilidad */}
          <NavLink className="navbar-brand m-0 p-0" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <img src="/icons/logo.png" alt="Configuracion de accesibilidad" style={{ height: "32px", width: "32px" }} />
          </NavLink>

          {/* Inico hamburguesa del menu desplegable */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
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
                <NavLink to="/quienes-somos" className="nav-link">
                  ¿Quiénes somos?
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/servicios" className="nav-link">
                  Servicios
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/programas" className="nav-link">
                  Programas
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/recursos" className="nav-link">
                  Recursos
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/noticias" className="nav-link">
                  Noticias
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/donaciones" className="nav-link">
                  Donaciones
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/contacto" className="nav-link">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Modal de configuracion de accesibilidad */}
      <section className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-sm">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Accesibilidad
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form id="accesibilidad-checkers">
                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ModoVisita" id="escala-de-grises" value="escala-de-grises" onChange={handleModoDeVista} />
                  <label className="form-check-label" htmlFor="escala-de-grises">
                    Escala de grises
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ModoVisita" id="alto-contraste" value="alto-contraste" onChange={handleModoDeVista} />
                  <label className="form-check-label" htmlFor="alto-contraste">
                    Alto Contraste
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ModoVisita" id="fondo-claro" value="fondo-claro" onChange={handleModoDeVista} />
                  <label className="form-check-label" htmlFor="fondo-claro">
                    Fondo Claro
                  </label>
                </div>

                <div className="form-check">
                  <input className="form-check-input" type="radio" name="ModoVisita" id="fuente-legible" value="fuente-legible" onChange={handleModoDeVista} />
                  <label className="form-check-label" htmlFor="fuente-legible">
                    Fuente Legible
                  </label>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-outline-primary"
                value="modo-inicial"
                data-bs-dismiss="modal"
                onClick={(e) => {
                  handleModoDeVista(e);
                  document.getElementById("accesibilidad-checkers").reset();
                }}>
                Restaurar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
