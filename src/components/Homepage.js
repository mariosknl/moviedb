import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MovieCard from "./MovieCard";

import { getMovies, getSearchMovie } from "../services/axios";

// const queryUrl =
//   `https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=${inputValue}`;

function Homepage() {
  const [movies, setMovies] = useState(null);
  const [searchMovies, setSearchMovies] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    getValues,
    formState: { errors },
  } = useForm();

  const inputValue = getValues("searchInput");

  const onSubmit = (data) => {
    const inputValue = data;
    console.log(inputValue);
  };
  useEffect(() => {
    getMovies(setMovies);
  }, []);

  useEffect(() => {
    getSearchMovie(inputValue, setSearchMovies);
  }, []);
  return (
    <>
      <div>
        <h1 className="font-bold mx-auto text-center w-[80%]">
          Welcome to the MovieDb
        </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register("searchInput")}
            placeholder="Search for your desired movie..."
          />
          <input type="submit" />
        </form>
      </div>
      <div className="grid grid-rows-3 gap-3">
        {movies &&
          movies.results.map((movie) => {
            return (
              <div key={movie.id} className="my-10 bg-gray-200">
                <MovieCard
                  id={movie.id}
                  original_title={movie.original_title}
                  overview={movie.overview}
                />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default Homepage;
