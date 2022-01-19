import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MovieCard from "./MovieCard";

// import { getMovies } from "../services/axios";

const baseUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;
const queryUrl =
  "https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=";

function Homepage() {
  const [movies, setMovies] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const getMovies = () => {
    axios.get(baseUrl).then(({ data }) => {
      console.log(data);
      setMovies(data);
    });
  };

  const onSubmit = (data) => {
    const inputValue = data;
    console.log(inputValue);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div className="w-full h-full mx-auto">
      <h1 className="font-bold mx-auto">Welcome to the MovieDb</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("searchInput")}
          placeholder="Search for your desired movie..."
        />
        <input type="submit" />
      </form>
      {movies &&
        movies.results.map((movie) => {
          return (
            <MovieCard
              id={movie.id}
              original_title={movie.original_title}
              overview={movie.overview}
            />
          );
        })}
    </div>
  );
}

export default Homepage;
