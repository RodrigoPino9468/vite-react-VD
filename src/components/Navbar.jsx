import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md justify-content-center bg-body-tertiary p-0 shadow rounded">
      <div className="container-fluid navbar-color px-4 py-2 px-sm-3">
        <Link className="navbar-brand m-0 p-1">
          <img src="/icons/logo.png" alt="" style={{ height: "32px", width: "32px" }} />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <GiHamburgerMenu className="navbar-toggler-icon" size={30} />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
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
      </div>
    </nav>
  );
}
