export default function Item({ Titulo, Texto, Alt, ImgUrl }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img className="img-fluid" alt={Alt} src={ImgUrl} />
        <div className="card-body">
          <h4 className="card-title">{Titulo}</h4>
          <p className="card-text">{Texto}</p>
        </div>
      </div>
    </div>
  );
}
