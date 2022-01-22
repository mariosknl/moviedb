import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function MoviePage() {
  let { title } = useParams();
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export default MoviePage;
