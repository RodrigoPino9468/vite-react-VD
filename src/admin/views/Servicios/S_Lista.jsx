import { useState, useEffect } from "react";
import Servicio from "./S_Card";
import Filtro from "../../components/Filtro";
import FiltroOption from "../../components/FiltroOption";

export default function ServiciosLista() {
  const [cargando, setCargando] = useState(true);
  const [noticias, setNoticias] = useState({});

  useEffect(() => {
    async function cargarNoticias() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/?page=2`);
        if (!data.ok) {
          throw new Error("Error en la solicitud a la API");
        }
        const { results } = await data.json();
        setNoticias(results);
        setCargando(false);
      } catch (error) {
        console.error("Error al cargar noticias:", error);
      }
    }
    cargarNoticias();
  }, []);

  return (
    <>
      {/* FILTRO */}
      <Filtro NewTitle={"Agregar servicio"}>
      </Filtro>
      {/* SERVICIOS */}
      <section className="album py-5 bg-body-tertiary">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3  row-cols-xl-4 g-3">
            {cargando ? (
              <h1>Cargando datos...</h1>
            ) : (
              noticias &&
              noticias.map((noticia) => (
                <Servicio
                  key={noticia.id}
                  Id={noticia.id}
                  Titulo={noticia.name}
                  Fecha={noticia.created}
                  Autor={noticia.type}
                  Descripcion={noticia.image}
                  LogoUrl={noticia.image}
                  LogoAlt={noticia.name}
                />
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}
