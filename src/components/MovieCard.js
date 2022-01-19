function MovieCard({ id, original_title, overview }) {
  return (
    <div key={id}>
      <h2>{original_title}</h2>
      <p>{overview}</p>
    </div>
  );
}

export default MovieCard;
