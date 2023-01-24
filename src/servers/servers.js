import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const KEY = 'cae3be8cdf5c9c2351403518efd2a643';

const trendingPathUrl = '/trending/movie/week';
const movie = '/movie/';

export const trendingMovies = () => {
  return axios
    .get(`${BASE_URL}${trendingPathUrl}`, {
      params: {
        api_key: KEY,
      },
    })
    .then(res => res.data.results);
};

export const getMovieById = movieId => {
  return axios
    .get(`${BASE_URL}${movie}${movieId}`, {
      params: {
        api_key: KEY,
      },
    })
    .then(res => res.data);
};
