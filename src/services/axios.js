import axios from "axios";

const baseUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}`;

export const getMovies = (setMovies) => {
  axios.get(baseUrl).then(({ data }) => {
    console.log(data);
    setMovies(data);
  });
};

export const getSearchMovie = (inputValue, setSearchMovies) => {
  const queryUrl = `https://api.themoviedb.org/3/search/movie?api_key={api_key}&query=${inputValue}`;
  axios.get(queryUrl).then(({ data }) => {
    console.log(data);
    setSearchMovies(data);
  });
};
