import { Link } from "react-router-dom";
import { GoAlert } from "react-icons/go";

export default function Eror404() {
  return (
    <main className="container text-center py-5">
      <div className="row justify-content-center">
        <div className="col-lg-6">
          <GoAlert className="bi bi-exclamation-triangle display-1 text-danger" />
          <h1 className="display-1">404</h1>
          <h1 className="mb-4">Page Not Found</h1>
          <p className="mb-4">Lo sentimos, ¡la página que has buscado no existe en nuestro sitio web! ¿Quizás ir a nuestra página de inicio o intentar utilizar una búsqueda?</p>
          <Link to="/" className="btn btn-sm btn-danger rounded-pill py-2 px-5">
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
