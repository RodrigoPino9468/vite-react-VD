import { Link } from "react-router-dom";
import { RecursosData } from "../../data/datos";

export default function Index() {
  return (
    <main className="container my-5">
      {RecursosData.map(({ categoria, articulos }, indexCategoria) => (
        <div key={indexCategoria} className="row my-5">
          <h1 className="text-center">{categoria}</h1>
          {articulos.map(({ titulo, publicado, url }, indexArticulo) => (
            <div key={indexArticulo} className="col-12 col-sm mb-3">
              <div className="card h-100 text-center">
                <div className="card-header">{publicado}</div>
                <div className="card-body">
                  <h5 className="card-title">{titulo}</h5>
                  <Link to={url} target="_blank" className="btn btn-sm btn-outline-danger">
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
