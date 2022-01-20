function MovieCard({ key, original_title, overview }) {
  return (
    <div>
      <h2>{original_title}</h2>
      <p>{overview}</p>
    </div>
  );
}

export default MovieCard;
