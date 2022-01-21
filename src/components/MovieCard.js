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
      staggerChildren: 0.5,
    },
  },
};

export const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
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

/* <motion.div
                key={id}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={childVariants2}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
                    alt=""
                  />
                </motion.div>
              </motion.div> */
