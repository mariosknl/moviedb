import { motion } from "framer-motion";

export const containerVariants = {
  hidden: {
    translateX: 100,
    opacity: 0,
  },
  visible: {
    translateX: 0,
    opacity: 1,
    transition: {
      type: "string",
      mass: 0.6,
      damping: 8,
      when: "beforeChildren",
      staggerChildren: 1,
    },
  },
};

export const childVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
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
