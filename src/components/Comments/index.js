const comentarios = [
  {
    user: "Rafael de Angelo",
    comentario: "Este filme é incrível!",
  },
  {
    user: "André Fagundes",
    comentario: "Este filme é engraçado!",
  },
  {
    user: "Raquel Akemi",
    comentario: "Este filme é demais!",
  },
  {
    user: "Sibele Schmitz",
    comentario: "Este filme é legal!",
  },
  {
    user: "Dudu Oku",
    comentario: "Este filme é bom!",
  },
];

export default function Comments() {
  return (
    <div className="container text-center">
      {comentarios.map((comment, i) => (
        <div className="row">
          <div className="col-md-3" key={i.toString()}>
            {comment.user}
          </div>
          <div className="col-md-9" key={i.toString()}>
            {comment.comentario}
          </div>
        </div>
      ))}
    </div>
  );
}