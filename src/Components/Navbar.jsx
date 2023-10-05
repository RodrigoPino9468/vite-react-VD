import React from "react";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-sm Fuente">
      <a href="http://localhost:5173">
        <img src="../Logo FVIC/Logo-Vic.png" class="p-3" alt="logo fundacion" width="200px"></img>
      </a>
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">
            <BsInstagram style={{ color: "black" }} size={30}></BsInstagram>
            <i class="bi bi-facebook"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <BsFacebook style={{ color: "black" }} size={30}></BsFacebook>
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <AiFillYoutube style={{ color: "black" }} size={30}></AiFillYoutube>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            <AiFillLinkedin style={{ color: "black" }} size={30}></AiFillLinkedin>
            <i class="fab fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <form class="d-flex">
        {/* <input class="form-control me-2" type="text" placeholder="Search"> */}
        <a class="btn Fuente-Texto Boton-Redondeado" style={{ background: "#B73B58", color: "white" }} type="button" href="http://localhost:8000">
          Login/Moodle
        </a>
      </form>
    </nav>
  );
};

export default Navbar;
