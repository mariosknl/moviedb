import axios from "axios";

export const getMovie = (inputValue, setMovie) => {
  const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=${inputValue}`;
  if (!inputValue) return;
  axios.get(baseUrl).then(({ data }) => {
    console.log(data);
    if (data.results.length !== 0) {
      localStorage.setItem("movies", JSON.stringify(data));
      setMovie(data);
    } else {
      alert("This movie doesn't exit in our database. Please try another one.");
    }
  });
};

export const getMoviePage = (id, setMovieDetails) => {
  const baseUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;
  axios.get(baseUrl).then(({ data }) => {
    setMovieDetails(data);
  });
};
