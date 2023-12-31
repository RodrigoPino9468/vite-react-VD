import { NavLink } from "react-router-dom";

import { AiOutlineHome } from "react-icons/ai";
import { BiBriefcaseAlt2, BiLogOut } from "react-icons/bi";
import { HiOutlineNewspaper } from "react-icons/hi2";
import { LiaHandsHelpingSolid } from "react-icons/lia";
import { FiUsers } from "react-icons/fi";
import { SlDocs } from "react-icons/sl";

import { useAdministrador } from "../../contexts/AdministradorContext";

export default function Menu() {
  const { LogoutAuth } = useAdministrador();

  return (
    <aside className="sidebar border border-right position-fixed p-0 h-100 col-md-3 col-xl-2">
      <div
        id="sidebarMenu"
        className="offcanvas-md offcanvas-end"
        tabIndex="-1"
        aria-labelledby="sidebarMenuLabel">
        {/* Sidebar Header */}
        <section className="offcanvas-header mt-5">
          <h2 className="offcanvas-title" id="sidebarMenuLabel">
            Fundacion Vida Independiente
          </h2>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"></button>
        </section>

        {/* Sidebar Body */}
        <section
          id="sidebarBody"
          className="offcanvas-body d-md-flex flex-column p-0 overflow-y-auto">
          {/* Elementos del menú */}
          <ul className="nav flex-column  ">
            <li className="nav-item">
              <NavLink
                to={""}
                end
                className={({ isActive }) =>
                  isActive
                    ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark"
                    : "nav-link d-flex align-items-center gap-2 text-dark"
                }
                aria-current="page">
                <AiOutlineHome className="bi" />
                Dashboard
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"noticias"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark"
                    : "nav-link d-flex align-items-center gap-2 text-dark"
                }
                aria-current="page">
                <HiOutlineNewspaper className="bi" />
                Noticias
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"recursos"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark"
                    : "nav-link d-flex align-items-center gap-2 text-dark"
                }
                aria-current="page">
                <SlDocs className="bi" />
                Recursos
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"servicios"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark"
                    : "nav-link d-flex align-items-center gap-2 text-dark"
                }
                aria-current="page">
                <BiBriefcaseAlt2 className="bi" />
                Servicios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"programas"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark"
                    : "nav-link d-flex align-items-center gap-2 text-dark"
                }
                aria-current="page">
                <LiaHandsHelpingSolid className="bi" />
                Programas
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to={"colaboradores"}
                className={({ isActive }) =>
                  isActive
                    ? "nav-link d-flex align-items-center gap-2 text-white border rounded bg-dark"
                    : "nav-link d-flex align-items-center gap-2 text-dark"
                }
                aria-current="page">
                <FiUsers className="bi" />
                Colaboradores
              </NavLink>
            </li>
          </ul>

          <hr className="my-3" />
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-2 mb-1 text-body-secondary text-uppercase">
            Opciones
          </h6>

          {/* Opciones */}
          <ul className="nav flex-column mb-auto">
            {/* Cerrar Sesion */}
            <li className="nav-item">
              <button
                id="logOutButtomAdmin"
                className="btn d-flex align-items-center w-100 gap-2"
                onClick={LogoutAuth}>
                <BiLogOut className="bi" />
                Cerrar Sesion
              </button>
            </li>
          </ul>
        </section>
      </div>
    </aside>
  );
}
