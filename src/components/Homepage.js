import axios from "axios";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

// import { getMovies } from "../services/axios";

const baseUrl = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;

function Homepage() {
  const [movies, setMovies] = useState([]);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const getMovies = () => {
    axios.get(baseUrl).then(({ data }) => {
      console.log(data);
      setMovies(data);
    });
  };

  const onSubmit = (data) => {
    const inputValue = data;
    console.log(inputValue);
  };
  useEffect(() => {
    getMovies();
    console.log(movies);
  }, []);
  return (
    <div className="w-full h-full mx-auto">
      <h1 className="font-bold mx-auto">Welcome to the MovieDb</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("searchInput")}
          placeholder="Search for your desired movie..."
        />
        <input type="submit" />
      </form>
      <div>
        {/* {movies &&
          movies.map((movie) => {
            return (
              <div key={movie.id}>
                <p>{movie.title}</p>
              </div>
            );
          })} */}
      </div>
    </div>
  );
}

export default Homepage;
