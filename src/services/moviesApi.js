import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'f961efdd5892a3a495952701e4bb1df1';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = { api_key: API_KEY };

const fetchTrendingMovies = async () => {
  try {
    const { data } = await axios.get(`/trending/movie/day?page=1`);

    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

const fetchSearchMovies = async searchQuery => {
  try {
    const { data } = await axios.get(
      `/search/movie?page=1&query=${searchQuery}`,
    );

    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

const fetchMovieDetails = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}?`);

    return data;
  } catch (error) {
    console.log('error: ', error);
  }
};

const fetchMovieCredits = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits?`);

    return data.cast;
  } catch (error) {
    console.log('error: ', error);
  }
};

const fetchMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews?`);

    return data.results;
  } catch (error) {
    console.log('error: ', error);
  }
};

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  fetchTrendingMovies,
  fetchSearchMovies,
  fetchMovieDetails,
  fetchMovieCredits,
  fetchMovieReviews,
};
