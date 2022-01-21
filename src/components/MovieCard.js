function MovieCard({ title, poster_path, id, release_date, pulseEffect }) {
  <div key={id} className="grid grid-rows-3 grid-flow-col gap-4">
    <motion.p variants={childVariants} className="col-span-2 bg-gray-700">
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
  </div>;
}

export default MovieCard;
