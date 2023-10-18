import { Link, NavLink } from "react-router-dom";
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

export default function Header() {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between p-3">
      <div className="col-md-3 mb-2 mb-md-0">
        <Link to="/" className="d-inline-flex link-body-emphasis text-decoration-none">
          <img src="/img/logos/fvic_colores.png" className="p-3" alt="logo fundacion" width="300em" height="200em" />
        </Link>
      </div>
      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li className="nav-item">
          <NavLink className="nav-link" to={import.meta.env.VITE_FVIC_INSTAGRAM}>
            <BsInstagram style={{ color: "black" }} size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={import.meta.env.VITE_FVIC_FACEBOOK}>
            <BsFacebook style={{ color: "black" }} size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={import.meta.env.VITE_FVIC_YOUTUBE}>
            <BsYoutube style={{ color: "black" }} size={30} />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to={import.meta.env.VITE_FVIC_LINKEDIN}>
            <BsLinkedin style={{ color: "black" }} size={30} />
          </NavLink>
        </li>
      </ul>
      <div className="col-md-3 text-end">
        <NavLink className="btn btn-rounded btn-sm" to={import.meta.env.VITE_MOODLE_URL} style={{ background: "#B73B58", color: "white" }}>
          <small>Login/Moodle</small>
        </NavLink>
      </div>
    </header>
  );
}
