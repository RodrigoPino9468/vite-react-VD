import { NavLink, Link } from "react-router-dom";
import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

import { validarCorreos } from "./../utils/validarInputs";

export default function Footer() {
  const handleSubcripcion = (evento) => {
    evento.preventDefault();
    const correo = evento.currentTarget.elements.correoSubcripcion.value;
    let res = validarCorreos(correo);
    console.log(`${correo} -> ${res}`);
  };

  return (
    <footer className="border">
      <div className="container p-3 p-md-5">
        <article className="row mb-3">
          <section className="col-4 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to={"/"} className="nav-link p-0 text-body-secondary">
                  Inicio
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to={"quienes-somos"} className="nav-link p-0 text-body-secondary">
                  Quienes Somos
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to={"servicios"} className="nav-link p-0 text-body-secondary">
                  Servicios
                </NavLink>
              </li>
            </ul>
          </section>

          <section className="col-4 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to={"recursos"} className="nav-link p-0 text-body-secondary">
                  Recursos
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to={"noticias"} className="nav-link p-0 text-body-secondary">
                  Noticias
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to={"programas"} className="nav-link p-0 text-body-secondary">
                  Programas
                </NavLink>
              </li>
            </ul>
          </section>

          <section className="col-4 col-md-2 mb-3">
            <ul className="nav flex-column">
              <li className="nav-item mb-2">
                <NavLink to={"donaciones"} className="nav-link p-0 text-body-secondary">
                  Donaciones
                </NavLink>
              </li>
              <li className="nav-item mb-2">
                <NavLink to={"contacto"} className="nav-link p-0 text-body-secondary">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </section>

          <section className="col-12 col-md-5 offset-md-1 mb-3">
            <form onSubmit={handleSubcripcion} id="formularioSubcripcion">
              <h4>Subcríbete a nuestro boletín</h4>
              <p>Al enviar su información, nos otorga permiso para enviarle un correo electrónico. Puedes darte de baja en cualquier momento.</p>
              <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                <label htmlFor="correoSubcripcion" className="visually-hidden">
                  Correo electrónico
                </label>
                <input id="correoSubcripcion" type="text" className="form-control" placeholder="Ingrese su correo electrónico..." autoComplete="off" />
                <button className="btn btn-primary" type="submit">
                  Subcribirme
                </button>
              </div>
            </form>
          </section>
        </article>

        <article className="d-flex flex-column flex-sm-row justify-content-center justify-content-sm-between py-4 border-top border-dark">
          <h6 className="text-center px-3 px-md-0 my-2">Fundación Vida Independiente Chile © {new Date().getFullYear()}</h6>

          <div className="d-flex justify-content-center my-2 my-md-0">
            <img src="/icons/logo.png" alt="" style={{ height: "32px", width: "32px" }} />
          </div>

          <ul className="list-unstyled d-flex justify-content-center my-2 my-md-0">
            <li className="mx-2">
              <Link className="link-body-emphasis" to={import.meta.env.VITE_FVIC_INSTAGRAM}>
                <BsInstagram style={{ color: "black" }} size={20} />
              </Link>
            </li>
            <li className="mx-2">
              <Link className="link-body-emphasis" to={import.meta.env.VITE_FVIC_FACEBOOK}>
                <BsFacebook style={{ color: "black" }} size={20} />
              </Link>
            </li>
            <li className="mx-2">
              <Link className="link-body-emphasis" to={import.meta.env.VITE_FVIC_YOUTUBE}>
                <BsYoutube style={{ color: "black" }} size={20} />
              </Link>
            </li>
            <li className="mx-2">
              <Link className="link-body-emphasis" to={import.meta.env.VITE_FVIC_LINKEDIN}>
                <BsLinkedin style={{ color: "black" }} size={20} />
              </Link>
            </li>
          </ul>
        </article>
      </div>
    </footer>
  );
}
