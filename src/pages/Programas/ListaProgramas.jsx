import CardPrograma from "./CardPrograma";
import { ProgramasData } from "../../data/datos";

export default function ListaProgramas() {
  return (
    <main className="container my-5">
      <section className="row">
        <h1 className="text-center">Programas</h1>
      </section>
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {ProgramasData.map((programa) => (
          <CardPrograma
            key={programa.id}
            UrlInfo={programa.URL}
            UrlImg={programa.Foto}
            Nombre={programa.NombrePrograma}
            Descripcion={programa.DescripcionPrograma}
          />
        ))}
      </section>
    </main>
  );
}
