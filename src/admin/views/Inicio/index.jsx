export default function Inicio() {
  return (
    <div className="px-4 my-3 text-center">
      <h1 className="display-4 fw-bold text-body-emphasis">Centered screenshot</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s
          most popular front-end open source toolkit, featuring Sass variables and mixins,
          responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.
        </p>
      </div>
      <div className="overflow-hidden">
        <div className="container px-5">
          <img
            src={"/img/logos/dashboard.jpg"}
            className="img-fluid border shadow-lg mb-4"
            alt="Example image"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
