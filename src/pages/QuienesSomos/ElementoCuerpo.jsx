export default function ElementoCuerpo({Titulo, Descripcion}) {
  return (
    <div class="px-4 py-5 my-5 text-center">
      <h1 class="display-5 fw-bold text-body-emphasis">{Titulo}</h1>
      <div class="col-lg-6 mx-auto">
        <p class="lead mb-4">{Descripcion}</p>
      </div>
    </div>
  );
}
