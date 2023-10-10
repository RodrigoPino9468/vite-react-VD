export default function Carousel() {
  return (
    <div className="container-fluid" style={{ background: "#7D143B" }}>
      <p className="Fuente-carousel d-flex flex-column justify-content-center align-items-center" style={{ color: "white" }}>
        Noticias recientes
      </p>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        </div>
        <div className="carousel-inner text-center">
          <div className="carousel-item active">
            <img src="/img/fotos/Foto-1-car.png" className="p-3" alt="logo fundacion" width="170px"></img>
            <img src="/img/fotos/Foto-2-car.png" className="p-2" alt="Miniatura 1" width="120"></img>
            <img src="/img/fotos/Foto-3-car.png" className="p-2" alt="Miniatura 1" width="100"></img>
            <img src="/img/fotos/Foto-4-car.png" className="p-2" alt="Miniatura 1" width="100"></img>
          </div>
          <div className="carousel-item">
            <img src="/img/fotos/Foto-1-car.png" className="p-2" alt="Miniatura 1" width="120"></img>
            <img src="/img/fotos/Foto-2-car.png" className="p-3" alt="logo fundacion" width="170px"></img>
            <img src="/img/fotos/Foto-3-car.png" className="p-2" alt="Miniatura 1" width="120"></img>
            <img src="/img/fotos/Foto-4-car.png" className="p-2" alt="Miniatura 1" width="100"></img>
          </div>
          <div className="carousel-item">
            <img src="/img/fotos/Foto-1-car.png" className="p-2" alt="Miniatura 1" width="100"></img>
            <img src="/img/fotos/Foto-2-car.png" className="p-2" alt="Miniatura 1" width="120"></img>
            <img src="/img/fotos/Foto-3-car.png" className="p-3" alt="logo fundacion" width="170px"></img>
            <img src="/img/fotos/Foto-4-car.png" className="p-2" alt="Miniatura 1" width="120"></img>
          </div>
          <div className="carousel-item">
            <img src="/img/fotos/Foto-1-car.png" className="p-2" alt="Miniatura 1" width="100"></img>
            <img src="/img/fotos/Foto-2-car.png" className="p-2" alt="Miniatura 1" width="100"></img>
            <img src="/img/fotos/Foto-3-car.png" className="p-2" alt="Miniatura 1" width="120"></img>
            <img src="/img/fotos/Foto-4-car.png" className="p-3" alt="logo fundacion" width="170px"></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div className="col-12 d-flex flex-row justify-content-center">
        <button className="btn Fuente-Textos Boton-Redondeado" style={{ background: "#B73B58", color: "white" }}>
          Más noticias
        </button>
      </div>
    </div>
  );
}
