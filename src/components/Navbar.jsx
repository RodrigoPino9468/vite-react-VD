import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="sticky-top navbar navbar-expand-md justify-content-center p-0">
      <div className="container-fluid navbar-color px-4 py-2 px-sm-3">
        <NavLink className="navbar-brand m-0 p-1">
          <img src="/icons/logo.png" alt="" style={{ height: "32px", width: "32px" }} />
        </NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <GiHamburgerMenu className="navbar-toggler-icon" size={30} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav mx-auto">
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
  );
}
