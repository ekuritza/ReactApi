import { useEffect, useState } from "react";
import Card from "../components/Card";
import api from "../services";
import Titulo from "../components/Titulo";
import Filtro from "../components/Filtro";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const res = await api.get("movies/movies");
      const sorteredMovies = res.data.sort((a, b) => { 
        if(a.titulo > b.titulo) return 1;
        if(a.titulo < b.titulo) return -1;
      });
      setMovies(sorteredMovies);
      setFilterMovies(sorteredMovies);
    };
    fetchMovies();
  },[]);

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
    setMovies(movies.slice().sort((a, b) => { 
      if(a[selectValue] > b[selectValue]) return 1;
      if(a[selectValue] < b[selectValue]) return -1;
    }));
    setFilterMovies(filterMovies.slice().sort((a, b) => { 
      if(a[selectValue] > b[selectValue]) return 1;
      if(a[selectValue] < b[selectValue]) return -1;
    }));
  };

  return (
    <div className="d-flex row justify-content-center w-100">
      <Titulo />
      <Filtro
        onSeachChange={handleFilterSearchChange}
        onSelectChange={handleFilterSelectChange}
      />
      {filterMovies.length > 0 &&
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
        ))}
    </div>
  );
}
