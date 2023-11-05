import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { RiLockPasswordLine, RiShieldUserLine } from "react-icons/ri";
import { Alertas, validarContrasenas, validarCorreos } from "../../../utils/validarInputs";

export default function Login() {
  const navigate = useNavigate(); 
  const [adminCredenciales, setAdminCredenciales] = useState({
    username: null,
    password: null,
  });

  const validadores = {
    username: validarCorreos,
    password: validarContrasenas,
  };

  const handleChange = (evento) => {
    const { name, value, classList } = evento.target;

    const alerta = document.getElementById(`alerta_${name}`);
    const validacion = validadores[name](value);

    setAdminCredenciales({
      ...adminCredenciales,
      [name]: value ? value : null,
    });

    if (validacion === true) {
      alerta.textContent = Alertas[name].valido;
    } else if (validacion === false) {
      alerta.textContent = Alertas[name].invalido;
    } else {
      alerta.textContent = Alertas[name].vacio;
    }

    // console.log(`${name} -> ${value} -> ${classList}`);

    alerta.classList.toggle("invalid-feedback", !validacion);
    alerta.classList.toggle("valid-feedback", validacion);
    classList.toggle("is-valid", validacion);
    classList.toggle("is-invalid", !validacion);
  };

  const handleReset = () => {
    const form = document.getElementById("formularioAdministrador");
    if (form) {
      form.reset();
    }

    setAdminCredenciales({
      username: null,
      password: null,
    });

    Object.keys(adminCredenciales).forEach((name) => {
      const input = document.getElementById(name);
      const alerta = document.getElementById(`alerta_${name}`);

      input.classList.remove("is-valid", "is-invalid");
      alerta.classList.remove("invalid-feedback", "valid-feedback");
      alerta.textContent = null;
    });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    const SubmitValido = Object.entries(adminCredenciales).every(([name, value]) => {
      return validadores[name](value);
    });

    if (SubmitValido) {
      console.log("fetch");
      console.log(adminCredenciales);
      handleReset();
    }
  };

  return (
    <main className="d-flex min-vh-100">
      <div className="container m-auto p-4 p-sm-0">
        <div className="row justify-content-center">
          <section className="col-12 col-md-10 col-lg-8 col-xxl-6 p-sm-4 border rounded">
            <div className="text-center px-0 px-sm-5">
              <img src="/img/logos/fvic_colores.png" width={"200rem"} height={"100rem"} alt="logo" />
              <h4 className="my-3">Sistema de gestión</h4>
            </div>

            <form id="formularioAdministrador" className="needs-validation row g-3" noValidate onSubmit={handleSubmit}>
              <div className="col-12 px-sm-5">
                <label htmlFor="username" className="form-label">
                  Usuario
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <RiShieldUserLine />
                  </span>
                  <input id="username" name="username" onChange={handleChange} type="text" className="form-control" aria-describedby="inputGroupPrepend2" required autoComplete="off" />
                  <p id="alerta_username" className=""></p>
                </div>
              </div>

              <div className="col-12 px-sm-5">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend2">
                    <RiLockPasswordLine />
                  </span>
                  <input id="password" name="password" onChange={handleChange} type="password" className="form-control" aria-describedby="inputGroupPrepend2" required autoComplete="off" />
                  <p id="alerta_password" className=""></p>
                </div>
              </div>

              <div className="col-12 my-5 d-flex justify-content-center">
                <button
                  className="btn btn-primary btn-block gradient-custom-2 w-50"
                  type="submit"
                  onClick={() => {
                    navigate("../dashboard")
                  }}>
                  Iniciar sesión
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </main>
  );
}
