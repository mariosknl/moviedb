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

  const onComplete = () => {
    setPulseEffect(true);
  };

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
      <div>
        {movie && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            onAnimationComplete={() => onComplete()}
          >
            {results.map(({ title, poster_path, id, release_date }) => {
              return (
                <div key={id} className="grid grid-rows-3 grid-flow-col gap-4">
                  <motion.p
                    variants={childVariants}
                    className="col-span-2 bg-gray-700"
                  >
                    {title}
                  </motion.p>
                  <motion.div
                    variants={imgVariants}
                    className="row-span-3 bg-yellow-500 w-full"
                  >
                    <img
                      src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                      alt=""
                      className="w-[25%]"
                    />
                  </motion.div>
                  <motion.p
                    className="text-white row-span-2 col-span-2 bg-red-400"
                    animate={{
                      textShadow: "0px 0px 10px rgb(0,0,0)",
                      boxShadown: "0px 0px 10px rgb(0,0,0)",
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                      },
                    }}
                  >
                    {pulseEffect && release_date}
                  </motion.p>
                </div>
              );
            })}
          </motion.div>
        )}
      </div>
    </>
  );
}

export default Homepage;
