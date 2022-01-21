import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import MovieCard from "./MovieCard";
import { motion } from "framer-motion";
import { getMovie, getSearchMovie } from "../services/axios";
import {
  containerVariants,
  childVariants,
  childVariants2,
  imgVariants,
} from "../animationVariants";
import MovieCard from "./MovieCard";

function Homepage() {
  const [movie, setMovie] = useState("");
  const [pulseEffect, setPulseEffect] = useState(false);
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

  const { results } = movie;
  console.log(results);

  const onComplete = () => {
    setPulseEffect(true);
  };

  return (
    <>
      <div className="flex items-center flex-col">
        <h1 className="font-bold text-center w-[80%] mx-auto">
          Welcome to the MovieDb
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-yellow-200 w-[50%] text-center"
        >
          <input
            {...register("searchInput")}
            placeholder="Search for your desired movie..."
            className="w-[80%] p-2"
          />
          <input type="submit" className="p-2 border w-[20%]" />
        </form>
      </div>
      <div>
        {movie && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => onComplete()}
            className="w-[50%] mx-auto"
          >
            {results.map(
              ({ title, poster_path, overview, id, release_date }) => (
                <MovieCard
                  title={title}
                  overview={overview}
                  poster_path={poster_path}
                  key={id}
                  release_date={release_date}
                  pulseEffect={pulseEffect}
                />
              )
            )}
            )
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Homepage;
