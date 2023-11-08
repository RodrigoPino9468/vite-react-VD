import {} from "react";

export default function RecursoCard({ Id, Cartegoria, Titutlo, Publicado, UrlDoc }) {
  return (
    <article className="col">
      <div className="card h-100 text-center">
        <section className="card-header">{Publicado}</section>
        <section className="card-body">
          <h5 className="card-title">{Titutlo}</h5>
        </section>
      </div>
    </article>
  );
}
