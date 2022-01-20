import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import MovieCard from "./MovieCard";

import { getMovie, getSearchMovie } from "../services/axios";

function Homepage() {
  const [movie, setMovie] = useState("");
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();
  const inputValue = getValues("searchInput");

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    getMovie(inputValue, setMovie);
  }, [inputValue]);

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
            defaultValue=""
          />
          <input type="submit" />
        </form>
      </div>
      <div className="grid grid-rows-3 gap-3">
        {movie &&
          movie?.results.map((movie) => {
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
