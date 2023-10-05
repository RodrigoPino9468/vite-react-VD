import React from "react";

function Cards(props) {
  return (
    <div class="col-lg-4 col-md-6 col-sm-12">
      <img class="card-img-top" src={props.Foto} alt="Card image"></img>
      <div class="card-body">
        <h4 class="card-title Fuente-Titulos">{props.Nombre}</h4>
        <p class="card-text Fuente-Textos">{props.Cargo}</p>
        <p class="card-text Fuente-Textos">{props.Descripcion}</p>
      </div>
    </div>
  );
}

export default Cards;
