import React from "react";

export default function Transferencias() {
  return (
    <main className="container p-5">
      {/* Titulo */}
      {/* <section className="row py-5 text-center">
        <h2>Transferencias</h2>
        <p className="">Te recomendamos realizar transferencias en dos modalidades, de acuerdo a lo que más te acomode:</p>
        <ul>
          <li>Transferencia programada: puedes generar un depósito de pago automático con tu tarjeta de débido o crédito, directamente desde tu cuenta bancaria personal. La programación puede ser semanal, mensual, bimensual, trimestral, cuatrimestral, semestral o anual, según sea tu interés.</li>
          <li>Transferencia única: realizas una transferencia sólo una vez, como un donativo especial.</li>
        </ul>
      </section> */}

      <div className="row g-5">
        {/* Datos de transferencia */}
        <div className="col-md-5 col-lg-4 order-md-last">

          {/* Datos cuenta bancaria */}
          <h4 className="d-flex justify-content-between align-items-center mb-3">
            <h3 className="">Cuenta bancaria de la fundación</h3>
          </h4>

          <ul className="list-group mb-3">
            <li className="list-group-item d-flex justify-content-between lh-sm info-fundacion">
              <div>
                <h6 className="my-0">Nombre</h6>
                <small className="info-fundacion">Fundación Vida Independiente Chile</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm info-fundacion">
              <div>
                <h6 className="my-0">RUT</h6>
                <small className="info-fundacion">65.194.552-6</small>
              </div>
            </li>
            <li className="list-group-item d-flex justify-content-between lh-sm info-fundacion">
              <div>
                <h6 className="my-0">Banco</h6>
                <small className="info-fundacion">Banco Estado</small>
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-sm info-fundacion">
              <div>
                <h6 className="my-0">Tipo de cuenta</h6>
                <small className="info-fundacion">Chequera Electrónica (Cuenta Vista)</small>
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-sm info-fundacion">
              <div>
                <h6 className="my-0">Número de cuenta</h6>
                <small className="info-fundacion">329-7-290782-0</small>
              </div>
            </li>

            <li className="list-group-item d-flex justify-content-between lh-sm info-fundacion">
              <div>
                <h6 className="my-0">Correo electrónico</h6>
                <small className="info-fundacion">fundacionvichile@gmail.com</small>
              </div>
            </li>
          </ul>
        </div>

        {/* Formulario  */}
        <div className="col-md-7 col-lg-8">
          <h4 className="mb-3">Formulario registro de donaciones</h4>
          <form className="needs-validation" noValidate="">
            <div className="row g-3">
              <div className="col-sm-6">
                <label htmlFor="firstName" className="form-label">
                  Nombre
                </label>
                <input type="text" className="form-control" id="firstName" placeholder="" defaultValue="" required="" />
                <div className="invalid-feedback">Valid first name is required.</div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="lastName" className="form-label">
                  Apellido
                </label>
                <input type="text" className="form-control" id="lastName" placeholder="" defaultValue="" required="" />
                <div className="invalid-feedback">Valid last name is required.</div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="email" className="form-label">
                  Correo electrónico
                </label>
                <input type="email" className="form-control" id="email" placeholder="correo.electronico@ejemplo.com" />
                <div className="invalid-feedback">Please enter a valid email address for shipping updates.</div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="address" className="form-label">
                  Número de teléfono
                </label>
                <input type="text" className="form-control" id="address" placeholder="+56 9 1234 5678" required="" />
                <div className="invalid-feedback">Please enter your shipping address.</div>
              </div>

              <div className="col-md-6">
                <label htmlFor="country" className="form-label">
                  Tipo de donación
                </label>
                <select className="form-select" id="country" required="">
                  <option defaultValue="">Elegir...</option>
                  <option value={"semanal"}>Semanal</option>
                  <option value={"mensual"}>Mensual</option>
                  <option value={"bimensual"}>Bimensual</option>
                  <option value={"trimestral"}>Trimestral</option>
                  <option value={"cuatrimestral"}>Cuatrimestral</option>
                  <option value={"semestral"}>Semestral</option>
                  <option value={"anual"}>Anual</option>
                  <option value={"unica-vez"}>Única vez</option>
                </select>
                <div className="invalid-feedback">Please select a valid country.</div>
              </div>

              <div className="col-sm-6">
                <label htmlFor="username" className="form-label">
                  Monto donación
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text">$</span>
                  <input type="text" className="form-control" id="username" placeholder="" required="" />
                  <div className="invalid-feedback">Your username is required.</div>
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="zip" className="form-label">
                  Déjanos tus comentarios
                </label>
                <textarea type="text" className="form-control" id="zip" placeholder="" required="" />
                <div className="invalid-feedback">Zip code required.</div>
              </div>
            </div>

            <hr className="my-4" />

            <button className="w-100 btn btn-primary btn-md btn-rounded" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
