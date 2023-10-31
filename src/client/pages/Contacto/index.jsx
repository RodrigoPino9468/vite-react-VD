import { useEffect, useState, useRef } from "react";
import { validarCorreos, validarTextos, validarNombres } from "./../../utils/validarInputs";
// https://www.escuelafrontend.com/formularios-en-react

export default function Index() {
  const formulario = useRef();
  const [formularioDatos, setFormularioDatos] = useState({
    nombre: null,
    correo: null,
    asunto: null,
    mensaje: null,
  });

  const handleChange = (evento, validador) => {
    const { name, value, className } = evento.target;
    const esValido = value ? validador(value) : null;
    const nuevosDatos = {
      ...formularioDatos,
      [name]: esValido,
    };
    setFormularioDatos(nuevosDatos);
    evento.target.classList.toggle("is-valid", esValido);
    evento.target.classList.toggle("is-invalid", !esValido);
    // console.log(formularioDatos);
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();

    // Validar el formulario antes de enviar
    const formIsValid = Object.values(formularioDatos).every((value) => value !== null && value);

    if (formIsValid) {
      // El formulario es válido, puedes enviar los datos
      const FormularioData = new FormData(evento.target);
      const datos = Object.fromEntries(FormularioData);
      console.log(datos);
    } else {
      // El formulario es inválido, muestra un mensaje de error o realiza alguna acción
      console.log("Formulario inválido. Por favor, complete todos los campos.");
    }
  };

  return (
    <main className="container my-5 p-2">
      {/* Container de la pagina */}
      <div className="row mx-5 mx-sm-3">
        {/* Información de contacto */}
        <section className="p-2 col-12 col-md-6">
          <article>
            <h2>Teléfono</h2>
            <p>+56 9 4993 3983</p>
          </article>
          <article>
            <h2>Email</h2>
            <p>hola@fundacionvidaindependiente.cl</p>
          </article>
          <article>
            <h2>Ubicación</h2>
            <p>Antonio varas 880, Providencia.</p>
          </article>
          <article>
            <h2>Horario</h2>
            <p>
              Lunes a Viernes:
              <br />
              14:00 - 14:05
            </p>
          </article>
        </section>

        {/* Formulario de contacto */}
        <section className="p-2 col-12 col-md-6">
          <h4 className="mb-3">Formulario de Contacto</h4>

          <form id="formularioContacto" className="needs-validation" noValidate onSubmit={handleSubmit} ref={formulario}>
            <article className="row g-3">
              <section className="col-sm-6">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input id="nombre" onChange={(e) => handleChange(e, validarNombres)} type="text" className="form-control" name="nombre" placeholder="" required autoComplete="off" />
                <p className={`${formularioDatos.nombre ? "valid-feedback" : "invalid-feedback"}`}>{`${formularioDatos.nombre === true ? "clase-true" : formularioDatos.nombre === null ? "clase-null" : "clase-false"}`}</p>
              </section>

              <section className="col-sm-6">
                <label htmlFor="correo" className="form-label">
                  Correo Electronico
                </label>
                <input id="correo" onChange={(e) => handleChange(e, validarCorreos)} type="text" className="form-control" name="correo" placeholder="" required autoComplete="off" />
                <p className={`${formularioDatos.correo ? "valid-feedback" : "invalid-feedback"}`}>{`${formularioDatos.correo === true ? "clase-true" : formularioDatos.correo === null ? "clase-null" : "clase-false"}`}</p>
              </section>

              <section className="col-12">
                <label htmlFor="asunto" className="form-label">
                  Asunto
                </label>
                <input id="asunto" onChange={(e) => handleChange(e, validarTextos)} type="text" className="form-control" name="asunto" placeholder="" required autoComplete="off" />
                <p className={`${formularioDatos.asunto ? "valid-feedback" : "invalid-feedback"}`}>{`${formularioDatos.asunto === true ? "clase-true" : formularioDatos.asunto === null ? "clase-null" : "clase-false"}`}</p>
              </section>

              <section className="col-12">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea id="mensaje" onChange={(e) => handleChange(e, validarTextos)} name="mensaje" cols="30" rows="7" className="form-control" placeholder="¡Escriba su mensaje que pronto estaremos comunicandonos con usted!" required autoComplete="off" />
                <p className={`${formularioDatos.mensaje ? "valid-feedback" : "invalid-feedback"}`}>{`${formularioDatos.mensaje === true ? "clase-true" : formularioDatos.mensaje === null ? "clase-null" : "clase-false"}`}</p>
              </section>
            </article>

            <section className="col-12 d-flex justify-content-center">
              <button name="submitContacto" className="btn btn-primary mt-3" type="submit">
                Enviar mensaje
              </button>
            </section>
          </form>
        </section>
      </div>
    </main>
  );
}
