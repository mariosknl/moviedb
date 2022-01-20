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
} from "../components/MovieCard";

function Homepage() {
  const [movie, setMovie] = useState("");
  console.log(movie);
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
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={childVariants} className="my-10 bg-gray-200">
            <p>Hello</p>
          </motion.div>
          <motion.div variants={childVariants2} className="my-10 bg-gray-200">
            <p>there</p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default Homepage;
