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
    <div className="flex items-center flex-col w-full h-[100vh] mx-auto  bg-gray-200">
      <div className="mt-5 h-2/4">
        {poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="h-full"
          />
        ) : (
          <img src={missing} alt="missing" />
        )}
      </div>
      <div className="flex items-center flex-col">
        <p className="py-8 font-bold text-2xl underline">{original_title}</p>
        <p className="w-[50%] text-md">{overview}</p>
        <p className="py-3 font-bold">Release Date: {release_date}</p>
      </div>
      <button
        className="p-2 w-20 text-white bg-blue-500 rounded-md"
        onClick={() => navigate(-1)}
      >
        Back
      </button>
    </div>
  );
}

export default MoviePage;
