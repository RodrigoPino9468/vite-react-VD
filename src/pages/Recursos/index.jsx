import { Link } from "react-router-dom";
import { RecursosData } from "../../data/datos";

export default function Recursos() {
  return (
    <main className="container">
      {RecursosData.map(({ categoria, articulos }, indexCategoria) => (
        <div key={indexCategoria} className="row my-5">
          <h1 className="text-center">{categoria}</h1>
          {articulos.map(({ titulo, publicado, url }, indexArticulo) => (
            <div key={indexArticulo} className="col-12 col-sm mb-3">
              <div class="card h-100 text-center">
                <div class="card-header">{publicado}</div>
                <div class="card-body">
                  <h5 class="card-title">{titulo}</h5>
                  <Link to={url} class="btn btn-sm btn-outline-danger">
                    Leer documento
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </main>
  );
}
