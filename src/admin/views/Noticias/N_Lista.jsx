import { useState, useEffect } from "react";

import Filtro from "../../components/Filtro";
import FiltroOption from "../../components/FiltroOption";
import Noticia from "./N_Card";

export default function NoticiasLista() {
  const [cargando, setCargando] = useState(true);
  const [noticias, setNoticias] = useState({});
  const [busqueda, setBusqueda] = useState("");
  const [filtroNoticias, setFiltradoNoticias] = useState({
    publicacion: null,
    fuente: null,
  });
  const Opciones = {
    publicaciones: [
      { texto: "Todo", valor: "default" },
      { texto: "Recientes", valor: "reciente" },
      { texto: "Antiguas", valor: "antiguas" },
    ],
    fuente: [
      { texto: "Todo", valor: "default" },
      { texto: "Fundación", valor: "fundacion" },
      { texto: "Externos", valor: "externos" },
    ],
  };

  const handleFiltroNoticias = (evento) => {
    const { filtroAtributo, filtroValor } = evento.target.dataset;

    if (filtroValor === "default") {
      setFiltradoNoticias({
        ...filtroNoticias,
        [filtroAtributo]: null,
      });
    } else {
      setFiltradoNoticias({
        ...filtroNoticias,
        [filtroAtributo]: filtroValor,
      });
    }
  };
  const handleSumbitBusqueda = (evento) => {
    evento.preventDefault();
    console.log(busqueda);
    handleResetBusqueda();
  };
  const handleChangeBusqueda = (evento) => {
    const { name, value } = evento.target;
    setBusqueda(value);
  };
  const handleResetBusqueda = () => {
    const form = document.getElementById("FiltroBusqueda");
    if (form) {
      form.reset();
    }
    setBusqueda("");
  };

  useEffect(() => {
    async function cargarNoticias() {
      try {
        const data = await fetch(`https://rickandmortyapi.com/api/character/?page=3`);
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
      {/* NAVBAR */}
      <Filtro NewTitle={"Crear noticia"}>
        <FiltroOption
          Titulo={"Publicación"}
          Atributo={"publicacion"}
          Opciones={Opciones.publicaciones}
          Filtro={filtroNoticias}
          HandleFiltro={handleFiltroNoticias}
        />
        <FiltroOption
          Titulo={"Fuente"}
          Atributo={"fuente"}
          Opciones={Opciones.fuente}
          Filtro={filtroNoticias}
          HandleFiltro={handleFiltroNoticias}
        />
      </Filtro>

      {/* NOTICIERO */}
      <section className="container album py-5 ">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3  row-cols-xl-4 g-3">
          {cargando ? (
            <h1>Cargando datos...</h1>
          ) : (
            noticias &&
            noticias.map((noticia) => (
              <Noticia
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
      </section>
    </>
  );
}
