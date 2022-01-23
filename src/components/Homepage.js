import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { getMovie } from "../services/axios";
import { containerVariants } from "../animationVariants";
import MovieCard from "./MovieCard";

function Homepage() {
  const [movie, setMovie] = useState("");
  const [pulseEffect, setPulseEffect] = useState(false);
  const { register, handleSubmit, getValues, reset } = useForm();
  const inputValue = getValues("searchInput");

  const onSubmit = (data) => {
    console.log(data);
  };

  useEffect(() => {
    const localStorageMovie = localStorage.getItem("movies");
    if (localStorageMovie) {
      setMovie(JSON.parse(localStorageMovie));
    } else {
      getMovie(inputValue, setMovie);
    }
  }, [inputValue]);

  const { results } = movie;

  const resetMovies = () => {
    reset({ searchInput: "" });
    localStorage.removeItem("movies");
    setMovie("");
    setPulseEffect(false);
  };

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="text-3xl font-bold text-center w-[80%] mx-auto my-5">
          Welcome to the MovieDb
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[50%] text-center">
          <input
            {...register("searchInput")}
            placeholder="Search for your desired movie..."
            className="w-[65%] p-2"
          />
          <input
            type="submit"
            className="p-2 bg-lime-300 rounded-md border w-[20%]"
          />
          <button
            type="button"
            className="w-[10%] bg-red-500 p-5 ml-5 rounded-full"
            onClick={resetMovies}
            placeholder="X"
          >
            X
          </button>
        </form>
      </div>
      <div>
        {movie && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => setPulseEffect(true)}
            className="w-[50%] mx-auto"
          >
            {results.map(
              ({ original_title, poster_path, overview, id, release_date }) => (
                <MovieCard
                  id={id}
                  title={original_title}
                  overview={overview}
                  poster_path={poster_path}
                  key={id}
                  release_date={release_date}
                  pulseEffect={pulseEffect}
                />
              )
            )}
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Homepage;
