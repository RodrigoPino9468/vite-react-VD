import { NavLink } from "react-router-dom";
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";

export default function Header() {
  return (
    <header className="d-flex flex-wrap align-items-end justify-content-center justify-content-md-between py-5">
      {/* Logo de la fundacion */}
      <section className="col-12 col-md-5">
        <NavLink to="/" className="d-flex justify-content-center">
          <img src="/img/logos/fvic_colores.png" className="logo-fundacion-header" alt="Fundación Vida Independiente Chile" />
        </NavLink>
      </section>

      {/* Iconos de redes sociales */}
      <section className="col-12 col-md-4">
        <ul className="nav d-flex justify-content-center">
          <li className="nav-item">
            <NavLink className="nav-link" to={import.meta.env.VITE_FVIC_INSTAGRAM}>
              <BsInstagram className="redes-sociales-header" size={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={import.meta.env.VITE_FVIC_FACEBOOK}>
              <BsFacebook className="redes-sociales-header" size={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={import.meta.env.VITE_FVIC_YOUTUBE}>
              <BsYoutube className="redes-sociales-header" size={30} />
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={import.meta.env.VITE_FVIC_LINKEDIN}>
              <BsLinkedin className="redes-sociales-header" size={30} />
            </NavLink>
          </li>
        </ul>
      </section>

      {/* Login del Moodle */}
      <section className="col-12 col-md-3">
        <div className="d-flex justify-content-center mx-auto">
          <NavLink className="btn btn-sm  btn-rounded px-4" to={import.meta.env.VITE_MOODLE_URL}>
            <MdOutlineLibraryBooks />
            Login
          </NavLink>
        </div>
      </section>
    </header>
  );
}
