import React from "react";

const Carousel = () => {
  return (
    <div class="container-fluid" style={{ background: "#7D143B" }}>
      {/* <!-- Carousel --> */}
      <p class="Fuente-carousel d-flex flex-column justify-content-center align-items-center" style={{ color: "white" }}>
        Noticias recientes
      </p>
      <div id="demo" class="carousel slide" data-bs-ride="carousel">
        {/* <!-- Indicators/dots --> */}
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#demo" data-bs-slide-to="3"></button>
        </div>

        {/* <!-- The slideshow/carousel --> */}
        <div class="carousel-inner text-center">
          <div class="carousel-item active">
            <img src="../Fotos/Foto-1-car.png" class="p-3" alt="logo fundacion" width="170px"></img>
            <img src="../Fotos/Foto-2-car.png" class="p-2" alt="Miniatura 1" width="120"></img>
            <img src="../Fotos/Foto-3-car.png" class="p-2" alt="Miniatura 1" width="100"></img>
            <img src="../Fotos/Foto-4-car.png" class="p-2" alt="Miniatura 1" width="100"></img>
          </div>
          <div class="carousel-item">
            <img src="../Fotos/Foto-1-car.png" class="p-2" alt="Miniatura 1" width="120"></img>
            <img src="../Fotos/Foto-2-car.png" class="p-3" alt="logo fundacion" width="170px"></img>
            <img src="../Fotos/Foto-3-car.png" class="p-2" alt="Miniatura 1" width="120"></img>
            <img src="../Fotos/Foto-4-car.png" class="p-2" alt="Miniatura 1" width="100"></img>
          </div>
          <div class="carousel-item">
            <img src="../Fotos/Foto-1-car.png" class="p-2" alt="Miniatura 1" width="100"></img>
            <img src="../Fotos/Foto-2-car.png" class="p-2" alt="Miniatura 1" width="120"></img>
            <img src="../Fotos/Foto-3-car.png" class="p-3" alt="logo fundacion" width="170px"></img>
            <img src="../Fotos/Foto-4-car.png" class="p-2" alt="Miniatura 1" width="120"></img>
          </div>
          <div class="carousel-item">
            <img src="../Fotos/Foto-1-car.png" class="p-2" alt="Miniatura 1" width="100"></img>
            <img src="../Fotos/Foto-2-car.png" class="p-2" alt="Miniatura 1" width="100"></img>
            <img src="../Fotos/Foto-3-car.png" class="p-2" alt="Miniatura 1" width="120"></img>
            <img src="../Fotos/Foto-4-car.png" class="p-3" alt="logo fundacion" width="170px"></img>
          </div>
        </div>
        {/* Minuaturas */}
        {/* <div class="d-flex justify-content-between align-items-center">
                    <img src="../Fotos/Foto-1-car.png" class="p-2" alt="Miniatura 1" width="100"></img>
                    <img src="../Fotos/Foto-2-car.png" class="p-2" alt="Miniatura 2" width="100"></img>
                    <img src="../Fotos/Foto-3-car.png" class="p-2" alt="Miniatura 1" width="100"></img>
                    <img src="../Fotos/Foto-4-car.png" class="p-2" alt="Miniatura 2" width="100"></img>
                </div> */}

        {/* <!-- Left and right controls/icons --> */}
        <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>
      </div>
      <div class="col-12 d-flex flex-row justify-content-center">
        <button class="btn Fuente-Textos Boton-Redondeado" style={{ background: "#B73B58", color: "white" }}>
          Más noticias
        </button>
      </div>
    </div>
  );
};

export default Carousel;
