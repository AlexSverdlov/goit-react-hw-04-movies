import axios from 'axios';

const fetchTrending = () => {
  return axios
    .get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=bbc6386a0bc633f77c6faed806ceae64',
    )
    .then(response => response.data.results);
};

const fetchMovie = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US`,
    )
    .then(response => response.data);
};

const fetchCast = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US`,
    )
    .then(response => response.data);
};

const fetchReviews = movieId => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=bbc6386a0bc633f77c6faed806ceae64&language=en-US&page=1`,
    )
    .then(response => response.data);
};

const fetchSearch = nextCategory => {
  return axios
    .get(
      `https://api.themoviedb.org/3/search/movie?api_key=bbc6386a0bc633f77c6faed806ceae64&query=${nextCategory}`,
    )
    .then(response => response.data.results);
};

export { fetchTrending, fetchMovie, fetchCast, fetchReviews, fetchSearch };
