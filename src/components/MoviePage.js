import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviePage } from "../services/axios.js";
import missing from "../photos/not_available.png";
import { useNavigate } from "react-router-dom";

import Homepage from "./Homepage";

function MoviePage() {
  const [movieDetails, setMovieDetails] = useState("");
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getMoviePage(id, setMovieDetails);
  }, [id]);

  const { backdrop_path, poster_path, original_title, overview, release_date } =
    movieDetails;
  return (
    <div>
      <div>
        {poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${backdrop_path}`}
            alt=""
          />
        ) : (
          <img src={missing} alt="missing" />
        )}
      </div>
      <div>
        <p>{original_title}</p>
        <p>{overview}</p>
        <p>{release_date}</p>
      </div>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
}

export default MoviePage;
