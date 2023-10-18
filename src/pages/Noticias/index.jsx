import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../../data/api-rick-y-morty";

import Noticia from "./CardNoticia";
import Filtrador from "./Filtrador";

export default function Noticias() {
  const [characterData, setCharacterData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { results } = await fetchDataFromApi();
        setCharacterData(results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    console.log(characterData);
  }, []);
  return (
    <main>
      <div className="container-fluid">
        <h1 className="d-flex py-3 m-0 justify-content-center">Noticias</h1>
      </div>
      <div className="py-3">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xxl-4 g-3">
            {characterData && (
              <>
                {characterData.map((element, index) => (
                  <Noticia key={index} Fecha={element.created} Titulo={element.name} Texto={element.url} Alt={element.type} ImgUrl={element.image} UrlNoticia={"/"} />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <a className="page-link" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </main>
  );
}
