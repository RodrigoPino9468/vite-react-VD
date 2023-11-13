import {} from "react";
import { Link } from "react-router-dom";

export default function Filtro({ children, NewTitle, NewUrl="agregar" }) {
  return (
    <section className="container">
      <nav className="navbar navbar-expand-lg bg-dark rounded" data-bs-theme="dark">
        <div className="container-fluid">
          {/* Brand button -> Agregar un nuevo item */}
          <Link to={NewUrl} className="navbar-brand btn btn-outline-success">
            {NewTitle}
          </Link>

          {/* Boton -> movil */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <section className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {/* Opciones del filtro */}
              {children}
            </ul>

            <form id="FiltroBusqueda" className="d-flex" role="search">
              <input type="search" className="form-control me-2" placeholder="..." aria-label="Search" />
              <button type="submit" className="btn btn-outline-success">
                Buscar
              </button>
            </form>
          </section>
        </div>
      </nav>
    </section>
  );
}
