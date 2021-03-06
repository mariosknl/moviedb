import { motion } from "framer-motion";
import {
  childVariants,
  imgVariants,
  summaryVariants,
  detailsVariants,
  dateVariants,
} from "../animationVariants";
import { truncateString } from "../utils";
import missing from "../photos/not_available.png";
import { Link } from "react-router-dom";

function MovieCard({
  title,
  poster_path,
  overview,
  release_date,
  pulseEffect,
  id,
}) {
  return (
    <div initial="hidden" animate="visible" className="w-full h-96 relative">
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
        className="text-gray-900 w-6/12 md:w-9/12 text-sm md:text-md h-auto absolute top-24"
      >
        {poster_path !== null ? (
          <p>{truncateString(overview, 200)}</p>
        ) : (
          <p className="pt-5">{truncateString(overview, 200)}</p>
        )}
      </motion.div>
      {pulseEffect && (
        <motion.p
          className="w-24 h-10 rounded-full mr-4 text-sm absolute top-52"
          variants={dateVariants}
        >
          <span>Release Date: {release_date}</span>
        </motion.p>
      )}
      <motion.p
        variants={detailsVariants}
        className="cursor-pointer hover:underline max-w-xs absolute bottom-8"
      >
        <Link to={`/movie/${id}`}>View Movie Details</Link>
      </motion.p>
    </div>
  );
}

export default MovieCard;
