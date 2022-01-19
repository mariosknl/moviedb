import axios from "axios";

const baseUrl = `https://api.themoviedb.org/3/movie/550?api_key=${process.env.MOVIEDB_API_KEY}`;

export const getMovies = axios.get(baseUrl);
