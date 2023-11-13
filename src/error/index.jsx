import { Link } from "react-router-dom";
import { GoAlert } from "react-icons/go";
import { useAdministrador } from "../contexts/AdministradorContext";

export default function Eror404() {
  const { adminCredenciales } = useAdministrador();

  return (
    <main className="container text-center py-5">
      <div className="row justify-content-center">
        <section className="col-lg-6 p-2">
          <GoAlert className="bi bi-exclamation-triangle display-1 text-danger" />
          <h1 className="display-1">Error 404</h1>
          <h2 className="mb-4">Page Not Found</h2>
          <h5 className="mb-4">Lo sentimos, ¡la página que has buscado no existe en nuestro sitio web! ¿Quizás ir a nuestra página de inicio o intentar utilizar una búsqueda?</h5>
        </section>
        <section className="d-grid gap-2 col-12 justify-content-center p-2">
          <Link to={"/"} className="btn btn-sm btn-danger rounded-pill py-2 px-5">
            Ir al Inicio
          </Link>
          {adminCredenciales && (
            <Link to={"/sistema-de-gestion"} className="btn btn-sm btn-danger rounded-pill py-2 px-5">
              Ir al Dashboard
            </Link>
          )}
        </section>
      </div>
    </main>
  );
}
