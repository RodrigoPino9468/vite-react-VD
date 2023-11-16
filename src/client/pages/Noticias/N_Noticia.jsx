import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useNoticieroData } from "../../../contexts/NoticiasDataContext";

export default function Noticia() {
  const [noticia, setNoticia] = useState({});
  const { filtrarNoticia } = useNoticieroData();
  const { NoticiaUrl } = useParams();
  const navegacion = useNavigate();

  useEffect(() => {
    const obtenerNoticia = async () => {
      const respuesta = filtrarNoticia(NoticiaUrl);
      if (respuesta.error) {
        navegacion("/noticias");
      } else {
        setNoticia(respuesta);
      }
    };
    obtenerNoticia();
  }, []);

  return (
    <section className="container">
      {noticia && (
        <>
          <h1>{noticia.titulo}</h1>
          <p>{noticia.contenido}</p>
        </>
      )}
    </section>
  );
}
