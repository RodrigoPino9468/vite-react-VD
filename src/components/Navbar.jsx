// modulos
import { Link } from "react-router-dom";
import React from "react";

// Iconos
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm Fuente">
      <Link to="/">
        <img src="/img/logos-fvic/Logo-Vic.png" className="p-3" alt="logo fundacion" width="200px"></img>
      </Link>
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" href={import.meta.env.VITE_FVIC_INSTAGRAM}>
            <BsInstagram style={{ color: "black" }} size={30}></BsInstagram>
            <i className="bi bi-facebook"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={import.meta.env.VITE_FVIC_FACEBOOK}>
            <BsFacebook style={{ color: "black" }} size={30}></BsFacebook>
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={import.meta.env.VITE_FVIC_YOUTUBE}>
            <AiFillYoutube style={{ color: "black" }} size={30}></AiFillYoutube>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href={import.meta.env.VITE_FVIC_LINKEDIN}>
            <AiFillLinkedin style={{ color: "black" }} size={30}></AiFillLinkedin>
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <form className="d-flex">
        {/* <input className="form-control me-2" type="text" placeholder="Search"> */}
        <a className="btn Fuente-Texto Boton-Redondeado" style={{ background: "#B73B58", color: "white" }} type="button" href={import.meta.env.VITE_MOODLE_URL}>
          Login/Moodle
        </a>
      </form>
    </nav>
  );
}
