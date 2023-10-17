export default function SegmentoBotones({ Titulo }) {
  return (
    <div className="col-6 d-flex flex-row justify-content-center">
      <button className="btn Fuente-Textos Boton-Redondeado" style={{ background: "#B73B58", color: "white" }}>
        {Titulo}
      </button>
    </div>
  );
}
