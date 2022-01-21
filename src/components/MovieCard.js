import { motion } from "framer-motion";

export const containerVariants = {
  initial: {
    opacity: 0,
    translateX: "100vw",
  },
  animate: {
    opacity: 1,
    translateX: 0,
  },
  transition: {
    duration: 1,
    delay: 1.5,
    staggerChildren: 0.5,
  },
};

export const childVariants = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

export const childVariants2 = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

// function MovieCard({ key, original_title, overview }) {
//   return (
//     <motion.div variants={item} initial="hidden" animate="visible">
//       <h2>{original_title}</h2>
//       <p>{overview}</p>
//     </motion.div>
//   );
// }

// export default MovieCard;

{
  /* <img src={`https://image.tmdb.org/t/p/w500/${image}`} alt="" /> */
}
