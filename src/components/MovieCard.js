import { motion } from "framer-motion";
import {
  childVariants,
  imgVariants,
  summaryVariants,
} from "../animationVariants";
import { truncateString } from "../utils";
import missing from "../photos/not_available.png";

function MovieCard({
  title,
  poster_path,
  overview,
  release_date,
  pulseEffect,
}) {
  return (
    <div className="w-full h-96">
      <motion.p
        variants={childVariants}
        className="text-gray-900 font-bold text-xl"
      >
        {title}
      </motion.p>
      <motion.div
        variants={imgVariants}
        className="h-auto w-56 lg:rounded-l text-center overflow-hidden"
      >
        {poster_path !== null ? (
          <img src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt="" />
        ) : (
          <img src={missing} alt="missing" />
        )}
      </motion.div>
      <motion.div
        variants={summaryVariants}
        className="text-gray-900 w-10/12 text-md w-auto"
      >
        <p>{truncateString(overview, 200)}</p>
      </motion.div>
      <motion.p
        className="w-20 h-10 rounded-full mr-4 text-sm"
        initial={{ x: "20vw", y: "-15vh" }}
        animate={{
          x: "20vw",
          y: "-15vh",
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
}

export default MovieCard;
