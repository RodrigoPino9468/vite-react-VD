import { NavLink, Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="py-3 mt-4">
      <div className="container">
        <ul className="nav justify-content-center border-bottom border-dark pb-3 ">
          <li className="nav-item">
            <NavLink to="/" className="nav-link">
              Inicio
            </NavLink>
          </li>
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
        <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between py-4 border-top border-dark">
          <h6 className="text-center px-3 px-md-0 my-2">Fundación Vida Independiente Chile © {new Date().getFullYear()}</h6>

          <div className="d-flex justify-content-center my-2 my-md-0">
            <img src="/icons/logo.png" alt="" style={{ height: "32px", width: "32px" }} />
          </div>

          <ul className="list-unstyled d-flex justify-content-center my-2 my-md-0">
            <li className="mx-2">
              <Link className="link-body-emphasis" to={import.meta.env.VITE_FVIC_INSTAGRAM}>
                <BsInstagram style={{ color: "black" }} size={20} />
              </Link>
            </li>
            <li className="mx-2">
              <Link className="link-body-emphasis" to={import.meta.env.VITE_FVIC_FACEBOOK}>
                <BsFacebook style={{ color: "black" }} size={20} />
              </Link>
            </li>
            <li className="mx-2">
              <Link className="link-body-emphasis" to={import.meta.env.VITE_FVIC_YOUTUBE}>
                <BsYoutube style={{ color: "black" }} size={20} />
              </Link>
            </li>
            <li className="mx-2">
              <Link className="link-body-emphasis" to={import.meta.env.VITE_FVIC_LINKEDIN}>
                <BsLinkedin style={{ color: "black" }} size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
