import axios from "axios";

export const getMovie = (inputValue, setMovie) => {
  const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&query=${inputValue}`;
  if (!inputValue) return;
  axios.get(baseUrl).then(({ data }) => {
    setMovie(data);
  });
};

export const getSearchMovie = (inputValue, setSearchMovies) => {
  const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=${inputValue}`;
  axios.get(queryUrl).then(({ data }) => {
    console.log(data);
    setSearchMovies(data);
  });
};
