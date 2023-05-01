import { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../services";
import Titulo from "../components/Titulo";
import Filtro from "../components/Filtro";
import Loading from "../components/Loading";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const res = await api.get("movies/movies");
        const sorteredMovies = res.data.sort((a, b) => {
          if (a.titulo > b.titulo) return 1;
          if (a.titulo < b.titulo) return -1;
        });
        setMovies(sorteredMovies);
        setFilterMovies(sorteredMovies);
        setLoading(false);
      } catch (error) {
        setError("Não foi possível buscar o catalógo de filmes");
        setLoading(false);
      }
    };
    fetchMovies();
  }, []);

  const handleFilterSearchChange = (searchValue) => {
    if (searchValue) {
      const filteredMovies = movies.filter((movie) =>
        movie.titulo.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilterMovies(filteredMovies);
    } else {
      setFilterMovies(movies);
    }
  };

  const handleFilterSelectChange = (selectValue) => {
    setMovies(
      movies.slice().sort((a, b) => {
        if (a[selectValue] > b[selectValue]) return 1;
        if (a[selectValue] < b[selectValue]) return -1;
      })
    );
    setFilterMovies(
      filterMovies.slice().sort((a, b) => {
        if (a[selectValue] > b[selectValue]) return 1;
        if (a[selectValue] < b[selectValue]) return -1;
      })
    );
  };

  return (
    <div className="d-flex row justify-content-center w-100">
      <Titulo
        title="Catálogo disponível"
        text="Atualmente temos disponíveis os filmes listados abaixo."
      />
      <Filtro
        onSeachChange={handleFilterSearchChange}
        onSelectChange={handleFilterSelectChange}
      />
      {loading && <Loading />}
      {error && <p className="lead">{error}</p>}
      {filterMovies.length > 0 ? (
        filterMovies.map((movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            poster={movie.poster}
            ano={movie.ano}
            assistido={movie.assistido}
            nota={movie.nota}
            titulo={movie.titulo}
          />
        ))
      ) : (
        <p className="lead">Não foram encontrados resultados</p>
      )}
    </div>
  );
}
