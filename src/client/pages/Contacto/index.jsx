import { useState } from "react";
import { Alertas, validarCorreos, validarTextos, validarNombres } from "../../../utils/validarInputs";

export default function Index() {
  const [formularioDatos, setFormularioDatos] = useState({
    nombre: null,
    correo: null,
    asunto: null,
    mensaje: null,
  });

  const validadores = {
    nombre: validarNombres,
    correo: validarCorreos,
    asunto: validarTextos,
    mensaje: validarTextos,
  };

  const handleChange = (evento) => {
    const { name, value, classList } = evento.target;
    const alerta = document.getElementById(`alerta_${name}`);
    const validacion = validadores[name](value);

    setFormularioDatos({
      ...formularioDatos,
      [name]: value ? value : null,
    });

    if (validacion === true) {
      alerta.textContent = Alertas[name].valido;
    } else if (validacion === false) {
      alerta.textContent = Alertas[name].invalido;
    } else {
      alerta.textContent = Alertas[name].vacio;
    }

    alerta.classList.toggle("invalid-feedback", !validacion);
    alerta.classList.toggle("valid-feedback", validacion);
    classList.toggle("is-valid", validacion);
    classList.toggle("is-invalid", !validacion);
  };

  const handleReset = () => {
    const form = document.getElementById("formularioContacto");
    if (form) {
      form.reset();
    }
    setFormularioDatos({
      nombre: null,
      correo: null,
      asunto: null,
      mensaje: null,
    });

    Object.keys(formularioDatos).forEach((name) => {
      const input = document.getElementById(name);
      const alerta = document.getElementById(`alerta_${name}`);

      input.classList.remove("is-valid", "is-invalid");
      alerta.classList.remove("invalid-feedback", "valid-feedback");
      alerta.textContent = null;
    });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const SubmitValido = Object.entries(formularioDatos).every(([name, value]) => {
      return validadores[name](value);
    });

    if (SubmitValido) {
      console.log("fetch");
      console.log(formularioDatos);
      handleReset();
    }
  };

  return (
    <main className="container my-5 p-2">
      <div className="row mx-5 mx-sm-3">
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

        <section className="p-2 col-12 col-md-6">
          <h4 className="mb-3">Formulario de Contacto</h4>

          <form id="formularioContacto" className="needs-validation" onSubmit={handleSubmit} noValidate>
            <article className="row g-3">
              <section className="col-sm-6">
                <label htmlFor="nombre" className="form-label">
                  Nombre
                </label>
                <input id="nombre" name="nombre" type="text" className="form-control" autoComplete="off" required onChange={handleChange} />
                <p id="alerta_nombre" className=""></p>
              </section>

              <section className="col-sm-6">
                <label htmlFor="correo" className="form-label">
                  Correo Electronico
                </label>
                <input id="correo" name="correo" type="email" className="form-control" autoComplete="off" required onChange={handleChange} />
                <p id="alerta_correo" className=""></p>
              </section>

              <section className="col-12">
                <label htmlFor="asunto" className="form-label">
                  Asunto
                </label>
                <input id="asunto" name="asunto" type="text" className="form-control" autoComplete="off" required onChange={handleChange} />
                <p id="alerta_asunto" className=""></p>
              </section>

              <section className="col-12">
                <label htmlFor="mensaje" className="form-label">
                  Mensaje
                </label>
                <textarea id="mensaje" name="mensaje" className="form-control" autoComplete="off" cols="30" rows="7" placeholder="¡Escriba su mensaje que pronto estaremos comunicandonos con usted!" required onChange={handleChange} />
                <p id="alerta_mensaje" className=""></p>
              </section>
            </article>

            <section className="col-12 d-flex justify-content-center">
              <button name="submitContacto" className="btn btn-rounded mt-3" type="submit">
                Enviar Mensaje
              </button>
            </section>
          </form>
        </section>
      </div>
    </main>
  );
}
