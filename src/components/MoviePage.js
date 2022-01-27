import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMoviePage } from "../services/axios.js";
import missing from "../photos/not_available.png";
import { useNavigate } from "react-router-dom";
import { formatter } from "../utils";
import ProductionCompany from "./ProductionCompany.js";
import ProductionCountry from "./ProductionCountry.js";

function MoviePage() {
  const [movieDetails, setMovieDetails] = useState("");
  let { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getMoviePage(id, setMovieDetails);
  }, [id]);

  const {
    poster_path,
    original_title,
    overview,
    release_date,
    popularity,
    production_companies,
    production_countries,
    revenue,
    budget,
  } = movieDetails;

  console.log(movieDetails);

  // const { logo_path } = production_companies;

  const date = new Date(release_date);
  return (
    <div className="grid grid-cols-2 w-[80%] mx-auto mt-10  bg-[#75b7ee]">
      <div className="mt-5">
        {poster_path !== null ? (
          <img
            src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
            alt=""
            className="h-full mx-auto"
          />
        ) : (
          <img src={missing} alt="missing" />
        )}
      </div>
      <div>
        <h1 className="text-center text-3xl font-bold">{original_title}</h1>
        <div className="h-2/4 mt-20">
          <div className="flex flex-col">
            <p className="text-xl font-bold">Overview</p>
            <p>{overview}</p>
          </div>
          <div className="flex flex-col mt-5">
            <p className="text-xl font-bold">Release Date</p>
            <p>{`${date}`}</p>
          </div>
          <div className="flex flex-col mt-5">
            <p className="text-xl font-bold">Popularity</p>
            <p>{popularity}</p>
          </div>
          <div className="flex flex-col mt-5">
            <p className="text-xl font-bold">Production Companies</p>
            <div className="flex flex-row">
              {production_companies &&
                production_companies.map(
                  ({ id, logo_path, name, origin_country }) => (
                    <ProductionCompany
                      key={id}
                      logo_path={logo_path}
                      name={name}
                      origin_country={origin_country}
                    />
                  )
                )}
            </div>
          </div>
          <div className="flex flex-col mt-5">
            <p className="text-xl font-bold">Production Countries</p>
            <div className="flex flex-row">
              {production_countries &&
                production_countries.map(({ name }, i) => (
                  <ProductionCountry name={name} i={i} />
                ))}
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-col mt-5">
              <p className="font-bold text-center">Budget</p>
              <p>{formatter.format(budget)}</p>
            </div>
            <div className="flex flex-col mt-5">
              <p className="font-bold text-center">Revenue</p>
              <p>{formatter.format(revenue)}</p>
            </div>
          </div>
        </div>
      </div>
      <a
        className="p-3 w-20 cursor-pointer text-center text-white bg-blue-500 rounded-md"
        onClick={() => navigate(-1)}
        data-cy="back"
      >
        Back
      </a>
    </div>
  );
}

export default MoviePage;
