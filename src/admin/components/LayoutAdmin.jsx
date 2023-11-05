import { NavLink, Outlet } from "react-router-dom";

import { LuMailSearch, LuSettings } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { GrDocumentPdf } from "react-icons/gr";
import { BiBriefcaseAlt2, BiLogOut } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";

import Header from "./HeaderAdmin";
import Menu from "./MenuAdmin";

export default function LayoutAdmin() {
  return (
    <div>
      <Header />

      <div className="container-fluid">
        <div className="row">
          {/* Menu */}
          <aside className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary position-absolute">
            <div id="sidebarMenu" className="offcanvas-md offcanvas-end bg-body-tertiary" tabIndex="-1" aria-labelledby="sidebarMenuLabel">
              {/* Sidebar Header */}
              <section className="offcanvas-header">
                <h5 className="offcanvas-title" id="sidebarMenuLabel">
                  Fundacion Vida Independiente
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" data-bs-target="#sidebarMenu" aria-label="Close"></button>
              </section>

              {/* Sidebar Body */}
              <section id="sidebarBody" className="offcanvas-body d-md-flex flex-column p-0 pt-lg-3 overflow-y-auto">
                {/* Rutas */}
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink to={""} end className={({ isActive }) => (isActive ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark" : "nav-link d-flex align-items-center gap-2 text-dark")} aria-current="page">
                      <AiOutlineHome className="bi" />
                      Dashboard
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to={"noticias"} className={({ isActive }) => (isActive ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark" : "nav-link d-flex align-items-center gap-2 text-dark")} aria-current="page">
                      <HiOutlineNewspaper className="bi" />
                      Noticias
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to={"recursos"} className={({ isActive }) => (isActive ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark" : "nav-link d-flex align-items-center gap-2 text-dark")} aria-current="page">
                      <GrDocumentPdf className="bi" />
                      Recursos
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to={"servicios"} className={({ isActive }) => (isActive ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark" : "nav-link d-flex align-items-center gap-2 text-dark")} aria-current="page">
                      <BiBriefcaseAlt2 className="bi" />
                      Servicios
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to={"mensajes-de-contacto"} className={({ isActive }) => (isActive ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark" : "nav-link d-flex align-items-center gap-2 text-dark")} aria-current="page">
                      <LuMailSearch className="bi" />
                      Mensajes
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to={"programas"} className={({ isActive }) => (isActive ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark" : "nav-link d-flex align-items-center gap-2 text-dark")} aria-current="page">
                      <LiaHandsHelpingSolid className="bi" />
                      Programas
                    </NavLink>
                  </li>

                  <li className="nav-item">
                    <NavLink to={"colaboradores"} className={({ isActive }) => (isActive ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark" : "nav-link d-flex align-items-center gap-2 text-dark")} aria-current="page">
                      <FiUsers className="bi" />
                      Colaboradores
                    </NavLink>
                  </li>
                </ul>

                <hr className="my-3" />

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-body-secondary text-uppercase">Opciones</h6>

                {/* Sign Up */}
                <ul className="nav flex-column mb-auto">{/* ... (tus elementos de opciones) */}</ul>
              </section>
            </div>
          </aside>
          {/* Views */}
          <main id="dashboard_viewer" className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
