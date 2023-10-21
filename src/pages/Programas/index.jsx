import CuerpoProgramas from "./CuerpoProgramas";
import Programa from "./Programa";
import { ProgramasData } from "../../data/datos";

export default function Programas() {
  return (
    <main className="container">
      <section className="row my-5">
        <h1 className="text-center">Programas</h1>
      </section>
      <section className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {ProgramasData.map((programa) => (
          <Programa key={programa.id} UrlInfo={"https://getbootstrap.com/docs/5.3/components/buttons/"} UrlImg={programa.Foto} Nombre={programa.NombrePrograma} Descripcion={programa.DescripcionPrograma} />
        ))}
      </section>

      {/* <CuerpoProgramas /> */}
    </main>
  );
}
