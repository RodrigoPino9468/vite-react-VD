import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const MainMenu = (props) => {
  return (
    <nav class="navbar navbar-expand-sm justify-content-center" style={{ background: "#EC6272" }}>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#topNavbar">
        <GiHamburgerMenu class="navbar-toggler-icon" style={{ color: "black" }}></GiHamburgerMenu>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="topNavbar">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item">
            <Link to="/second" class="nav-link">
              ¿Quiénes somos?
            </Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">
              Servicios
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">
              Programas
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">
              Noticias
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">
              Cursos
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">
              Donaciones
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="javascript:void(0)">
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default MainMenu;
