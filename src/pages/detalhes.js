import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services";
import Titulo from "../components/Titulo";
import Loading from "../components/Loading";
import Button from "../components/Button";
// import Comments from '../components/Comments';


export default function Detalhes() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(undefined);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        setLoading(true);
        const res = await api.get(`moviedetails/moviedetails/${movieId}`);
        setMovie(res.data);
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        setError("Não foi possível encontrar os detalhes deste filme!");
        setLoading(false);
      }
    };
    fetchMovieById();
  }, []);
  return (
    <div>
      <Titulo title="Detalhes" text="Veja com mais detalhes o seu filme" />
      {loading && <Loading />}
      {error && <p className="lead">{error}</p>}
      {movie && (
        <div className="row flex-lg-row align-items-center py-2">
          <div className="col-6">
            <img
              src={movie.poster}
              className="d-block mx-lg-auto img-fluid"
              alt="Movie"
              loading="lazy"
            />
          </div>
          <div className="col-6">
            <h1 className="display-6 fw-bold lh-1 mb-3">{movie.titulo}</h1>
            <p className="lead">{movie.ano}</p>
            <p className="lead">{movie?.nota}</p>
            <p className="lead">{movie.sinopse}</p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <Button assistido={movie.assistido} />
            </div>
          </div>
        </div>
      )}
      {/* TODO: Adicionar comentarios */}
    </div>
  );
}
