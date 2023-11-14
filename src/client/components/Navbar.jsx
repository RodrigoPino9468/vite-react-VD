import { useContext, useState } from "react";
import { AccesibilidadContext} from "../../contexts/AccesibilidadContext";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  const { handleModoDeVista, modoDevista, cambiarGris, grayScale, cambiarFondoBlanco, fondoBlanco, cambiarTamaño, tamañoFuente, cambiarModoContraste, modoContraste, subrayarEnlaces, enlacesSubrayados} = useContext(AccesibilidadContext);

  return (
    <>
      {/* Contenedor Navbar  */}
      <nav className="sticky-top navbar navbar-color navbar-expand-md justify-content-center py-2">
        <div className="container-fluid">
          {/* Icono de configuracion de accesibilidad */}
          <NavLink className="navbar-brand m-0 p-0" data-bs-toggle="offcanvas" data-bs-target="#demo">
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
        <div className="offcanvas offcanvas-start" id="demo">
          <div className="offcanvas-header">
            <h3 className="offcanvas-title">Configuración de accesibilidad</h3>
            <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
          </div>
          <div className="offcanvas-body">
            <ul>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="mySwitch1" name="darkmode" value="yes" checked={modoDevista} onChange={handleModoDeVista}/>
                  <label className="form-check-label" for="mySwitch1">Modo oscuro</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="mySwitch2" name="graymode" value="yes" checked={grayScale} onChange={cambiarGris}/>
                  <label className="form-check-label" for="mySwitch2">Escala de grises</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="mySwitch3" name="constrastemode" value="yes" checked={modoContraste} onChange={cambiarModoContraste}/>
                  <label className="form-check-label" for="mySwitch3">Alto contraste</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="mySwitch4" name="blancomode" value="yes" checked={fondoBlanco} onChange={cambiarFondoBlanco}/>
                  <label className="form-check-label" for="mySwitch4">Fondo blanco</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="mySwitch5" name="fuentegrande" value="yes" checked={tamañoFuente} onChange={cambiarTamaño}/>
                  <label className="form-check-label" for="mySwitch5">Aumentar fuente</label>
                </div>
              </li>
              <li>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" id="mySwitch6" name="subrayar" value="yes" checked={enlacesSubrayados} onChange={subrayarEnlaces}/>
                  <label className="form-check-label" for="mySwitch6">Subrayar enlaces</label>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
