import {} from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

export default function HeaderAdmin() {
  return (
    <header className="navbar sticky-top bg-dark flex-md-nowrap p-0 shadow" data-bs-theme="dark">
      <Link to={"/"} className="navbar-brand col-md-3 col-lg-2 me-0 px-3 fs-6 text-white">
        Fundacion Vida Independiente
      </Link>
      <ul className="navbar-nav flex-row d-md-none">
        <li className="nav-item text-nowrap">
          <button
            className="nav-link px-3 text-white"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <AiOutlineHome />
          </button>
        </li>
      </ul>
    </header>
  );
}
