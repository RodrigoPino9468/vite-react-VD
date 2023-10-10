import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function MainMenu() {
  return (
    <nav className="navbar navbar-expand-sm justify-content-center" style={{ background: "#EC6272" }}>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbar">
        <GiHamburgerMenu className="navbar-toggler-icon" style={{ color: "black" }}></GiHamburgerMenu>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="topNavbar">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item">
            <Link to="/quienes-somos" className="nav-link">
              ¿Quiénes somos?
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/servicios" className="nav-link">
              Servicios
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/programas" className="nav-link">
              Programas
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/noticias" className="nav-link">
              Noticias
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/donaciones" className="nav-link">
              Donaciones
            </Link>
          </li>

          <li className="nav-item">
            <Link to="/contacto" className="nav-link">
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
