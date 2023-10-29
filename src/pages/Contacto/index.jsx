import { useEffect, useState } from "react";
// https://www.escuelafrontend.com/formularios-en-react
export default function Index() {

  const [camposInvalidos, setCamposInvalidos] = useState({
    nombre: false,
    correo: false,
    asunto: false,
    mensaje: false,
  });

  const verificarDatos = ({ nombre, correo, asunto, mensaje }) => {

  }

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const { nombre, correo, asunto, mensaje } = evento.target.elements;
    const datos = {
      nombre: nombre.value,
      correo: correo.value,
      asunto: asunto.value,
      mensaje: mensaje.value,
    };
    console.log(datos);
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
          <form
            id="formularioContacto"
            className="needs-validation"
            noValidate
            onSubmit={handleSubmit}
          >
            <article className="row g-3">
              <section className="col-sm-6">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input
                  id="nombre"
                  type="text"
                  className="form-control"
                  name="nombre"
                  placeholder=""
                  required
                  autoComplete="off"
                />
                <p className="invalid-feedback">
                  Valid first name is required.
                </p>
              </section>

              <section className="col-sm-6">
                <label htmlFor="correo" className="form-label">
                  Correo Electronico
                </label>
                <input
                  id="correo"
                  type="text"
                  className="form-control"
                  name="correo"
                  placeholder=""
                  required
                  autoComplete="off"
                />
                <p className="invalid-feedback">
                  Valid first name is required.
                </p>
              </section>

              <section className="col-12">
                <label htmlFor="asunto" className="form-label">
                  Asunto
                </label>
                <input
                  id="asunto"
                  type="text"
                  className="form-control"
                  name="asunto"
                  placeholder=""
                  required
                  autoComplete="off"
                />
                <p className="invalid-feedback">
                  Valid first name is required.
                </p>
              </section>

              <section className="col-12">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="¡Escriba su mensaje que pronto estaremos comunicandonos con usted!"
                  required
                  autoComplete="off"
                ></textarea>
                <p className="invalid-feedback">
                  Valid first name is required.
                </p>
              </section>
            </article>
            <div className="col-12 d-flex justify-content-center">
              <button
                name="submitContacto"
                className="btn btn-primary mt-3"
                type="submit"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
