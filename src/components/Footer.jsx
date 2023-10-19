import { NavLink, Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="py-4 mt-5">
      <div className="container">
        <div className="row">
          <div className="nav col-md-4 col-sm-12">
            <ul className="navbar-nav flex-column justify-content-center align-items-center align-items-md-start">
              <li className="nav-item">
                <NavLink to="/quienes-somos" className="nav-link">
                  ¿Quienes Somos?
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
                <NavLink to="/noticias" className="nav-link">
                  {" "}
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

          <div className="col-md-4 col-sm-12">
            <div className="d-flex justify-content-center align-items-center">
              <img src="/img/logos/fvic_color_blanco.png" className="img-fluid" alt="logo fundacion" height={"30em"} width={"300em"} />
            </div>
          </div>

          <div className="nav col-md-4 col-sm-12 justify-content-end m-0">
            <ul className="navbar-nav justify-content-center align-items-end">
              <h3 className="nav-item text-white">Contacto</h3>
              <li className="nav-item text-white">Telefono:</li>
              <li className="nav-item text-white">+56 9 4993 3983</li>
              <li className="nav-item text-white">Correo:</li>
              <li className="nav-item text-white">hola@fundacionvidaindependiente.cl</li>
              <li className="nav-item text-white">Dirección:</li>
              <li className="nav-item text-white">Antonio varas 880, Providencia</li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-6 text-center Fuente-Derechos Footer">Todos los derechos reservados @ {new Date().getFullYear()}</div>
          <div className="col-6 text-center">
            <ul className="list-inline">
              <li className="list-inline-item mx-2">
                <Link className="nav-link" href={import.meta.env.VITE_FVIC_INSTAGRAM}>
                  <BsInstagram style={{ color: "black" }} size={20} />
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className="nav-link" href={import.meta.env.VITE_FVIC_FACEBOOK}>
                  <BsFacebook style={{ color: "black" }} size={20} />
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className="nav-link" href={import.meta.env.VITE_FVIC_YOUTUBE}>
                  <BsYoutube style={{ color: "black" }} size={20} />
                </Link>
              </li>
              <li className="list-inline-item mx-2">
                <Link className="nav-link" href={import.meta.env.VITE_FVIC_LINKEDIN}>
                  <BsLinkedin style={{ color: "black" }} size={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
