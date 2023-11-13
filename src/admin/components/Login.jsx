import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RiLockPasswordLine, RiShieldUserLine } from "react-icons/ri";

import { useAdministrador } from "../../contexts/AdministradorContext";

export default function Login() {
  const { LoginAuth, adminCredenciales } = useAdministrador();
  const [adminLogin, setAdminLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (evento) => {
    const { name, value } = evento.target;
    setAdminLogin({
      ...adminLogin,
      [name]: value,
    });
  };

  const handleReset = () => {
    const formulario = document.getElementById("formularioAdministrador");
    if (formulario) {
      formulario.reset();
    }
    setAdminLogin({
      username: null,
      password: null,
    });
  };

  const handleSubmit = (evento) => {
    evento.preventDefault();
    console.log(adminLogin);
    LoginAuth(adminLogin);
    handleReset();
    navigate("/sistema-de-gestion/dashboard");
  };

  useEffect(() => {
    if (adminCredenciales) {
      navigate("/sistema-de-gestion/dashboard");
    }
  }, []);

  return (
    <main className="d-flex min-vh-100">
      <div className="container m-auto p-4 p-sm-0">
        <div className="row justify-content-center">
          <section className="col-12 col-md-10 col-lg-8 col-xxl-6 p-sm-4 border rounded">
            <div className="text-center px-0 px-sm-5">
              <Link to={"/"}>
                <img
                  src="/img/logos/fvic_colores.png"
                  width={"200rem"}
                  height={"100rem"}
                  alt="logo"
                />
              </Link>
              <h3 className="my-3">Sistema de gestión</h3>
            </div>
            <form
              id="formularioAdministrador"
              className="needs-validation row g-3"
              onSubmit={handleSubmit}>
              <div className="col-12 px-sm-5">
                <label htmlFor="username" className="form-label">
                  Usuario
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputIDusername">
                    <RiShieldUserLine />
                  </span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    autoComplete="off"
                    className="form-control"
                    aria-describedby="inputIDusername"
                    required
                    onChange={handleChange}
                    value={adminLogin.username}
                  />
                </div>
              </div>

              <div className="col-12 px-sm-5">
                <label htmlFor="password" className="form-label">
                  Contraseña
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputIDpassword">
                    <RiLockPasswordLine />
                  </span>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="form-control"
                    aria-describedby="inputIDpassword"
                    autoComplete="off"
                    required
                    onChange={handleChange}
                    value={adminLogin.password}
                  />
                </div>
              </div>

              <div className="col-12 my-5 d-flex justify-content-center">
                <button className="btn btn-primary btn-block gradient-custom-2 w-50" type="submit">
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
