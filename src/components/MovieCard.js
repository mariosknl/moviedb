function MovieCard({ key, original_title, overview }) {
  return (
    <>
      <h2>{original_title}</h2>
      <p>{overview}</p>
    </>
  );
}

export default MovieCard;
