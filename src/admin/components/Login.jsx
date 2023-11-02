import {} from "react";
import { RiLockPasswordLine, RiShieldUserLine } from "react-icons/ri";

export default function Login() {
  return (
    <main className="container m-auto p-4 p-sm-0">
      <div className="row justify-content-center">
        <section className="col-12 col-md-10 col-lg-8 col-xxl-6 p-sm-4 border rounded">
          <div className="text-center px-0 px-sm-5">
            <img src="/img/logos/fvic_colores.png" width={"200rem"} height={"100rem"} alt="logo" />
            <h4 className="my-3">Sistema de gestión</h4>
          </div>

          <form className="row g-3">
            <div className="col-12 px-sm-5">
              <label htmlFor="validationDefaultUsername" className="form-label">
                Usuario
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">
                  <RiShieldUserLine />
                </span>
                <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required autoComplete="off" />
              </div>
            </div>

            <div className="col-12 px-sm-5">
              <label htmlFor="validationDefaultPassword" className="form-label">
                Contraseña
              </label>
              <div className="input-group">
                <span className="input-group-text" id="inputGroupPrepend2">
                  <RiLockPasswordLine />
                </span>
                <input type="password" className="form-control" id="validationDefaultPassword" aria-describedby="inputGroupPrepend2" required autoComplete="off" />
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
    </main>
  );
}
