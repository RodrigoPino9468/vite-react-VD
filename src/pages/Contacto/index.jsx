export default function Contacto() {
  return (
    <main className="container my-5 p-2">
      <div className="row mx-5 mx-sm-3">
        <aside className="p-2 col-12 col-md-6">
          <article>
            <h4>Teléfono</h4>
            <h6>+56 9 4993 3983</h6>
          </article>
          <article>
            <h4>Email</h4>
            <h6>hola@fundacionvidaindependiente.cl</h6>
          </article>
          <article>
            <h4>Ubicación</h4>
            <h6>Antonio varas 880, Providencia.</h6>
          </article>
          <article>
            <h4>Horario</h4>
            <h6>
              Lunes a Viernes:
              <br />
              11:00 - 23:00
            </h6>
          </article>
        </aside>
        <section className="p-3 col-12 col-md-6">
          <form action="#">
            <div class="row">
              <div class="col-6 mb-3">
                <input type="text" class="form-control" placeholder="Nombre" />
              </div>
              <div class="col-6 mb-3">
                <input type="email" class="form-control" placeholder="Correo electronico" />
              </div>
              <div class="col-12 mb-3">
                <input type="text" class="form-control" placeholder="Asunto" />
              </div>
              <div class="col-12 mb-3">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="¡Escriba su mensaje que pronto estaremos comunicandonos con usted!"></textarea>
              </div>

              <div class="col-12 d-flex justify-content-center">
                <input type="submit" value="Enviar mensaje" class="btn btn-primary" />
              </div>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
}
