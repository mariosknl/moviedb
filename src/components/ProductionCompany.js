import React from "react";
import logo from "../photos/not_available.png";

function ProductionCompany({ id, logo_path, name, origin_country }) {
  return (
    <div key={id}>
      {logo_path !== null ? (
        <img
          className="w-46 h-24"
          src={`https://image.tmdb.org/t/p/w500/${logo_path}`}
          alt="company logo path"
        />
      ) : (
        <img className="w-46 h-24" src={logo} alt="company logo path" />
      )}
      <p>{name}</p>
      <p>{origin_country}</p>
    </div>
  );
}

export default ProductionCompany;
