import { motion } from "framer-motion";

export const containerVariants = {
  hidden: {
    opacity: 0,
    x: "100vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      mass: 0.4,
      damping: 15,
      when: "beforeChildren",
      staggerChildren: 1.5,
    },
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
