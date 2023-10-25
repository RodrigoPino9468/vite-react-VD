import {} from "react";
import { useParams } from "react-router-dom";

export default function Noticia() {
  const { NoticiaId } = useParams();

  return <h1>{NoticiaId}</h1>;
}
