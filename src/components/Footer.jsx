import { BsInstagram, BsFacebook, BsLinkedin, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="container-fluid" style={{ background: "#BEB9BB" }}>
      <div className="row align-items-center">
        <div className="col-md-4 col-sm-12">
          <ul className="nav flex-column justify-content-center align-items-center">
            <li className="Fuente-Textos Footer">¿Quiénes somos?</li>
            <li className="Fuente-Textos Footer">Servicios</li>
            <li className="Fuente-Textos Footers">Cursos</li>
            <li className="Fuente-Textos Footer">Programas</li>
            <li className="Fuente-Textos Footer">noticias</li>
            <li className="Fuente-Textos Footer">Donaciones</li>
            <li className="Fuente-Textos Footer">Contactanos</li>
          </ul>
        </div>

        <div className="col-md-4 col-sm-12">
          <div className="d-flex justify-content-center align-items-center">
            <img src="/img/logos/fvic_colores.png" className="img-fluid" alt="logo fundacion"></img>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <ul className="nav flex-column justify-content-center align-items-center">
            <li className="Fuente-Titulos Footer-2">Contacto</li>
            <li className="Fuente-Textos Footer">Telefono:</li>
            <li className="Fuente-Textos Footer">+56 9 4993 3983</li>
            <li className="Fuente-Textos Footer">Correo</li>
            <li className="Fuente-Textos Footer">Hola@fundacionvidaindependiente.cl</li>
            <li className="Fuente-Textos Footer">Dirección </li>
            <li className="Fuente-Textos Footer">Antonio varas 880, Providencia</li>
          </ul>
        </div>
      </div>

      <div className="row align-items-center">
        <div className="col-6 text-center Fuente-Derechos Footer">Todos los derechos reservados @ 2023</div>
        <div className="col-6 text-center">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a className="nav-link" href={import.meta.env.VITE_FVIC_INSTAGRAM}>
                <BsInstagram style={{ color: "black" }} size={15}/>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="nav-link" href={import.meta.env.VITE_FVIC_FACEBOOK}>
                <BsFacebook style={{ color: "black" }} size={15}/>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="nav-link" href={import.meta.env.VITE_FVIC_YOUTUBE}>
                <BsYoutube style={{ color: "black" }} size={15}/>
              </a>
            </li>
            <li className="list-inline-item">
              <a className="nav-link" href={import.meta.env.VITE_FVIC_LINKEDIN}>
                <BsLinkedin style={{ color: "black" }} size={15}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
