import axios from 'axios';

const API_KEY = 'f961efdd5892a3a495952701e4bb1df1';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
// axios.defaults.headers.common['Authorization'] =
//   'Bearer f961efdd5892a3a495952701e4bb1df1';

const fetchTrendingMovies = () =>
  axios.get(`/trending/movie/day?api_key=${API_KEY}`).then(({ data }) => data);

const fetchSearchMovies = searchQuery =>
  axios
    .get(
      `/search/movie?api_key=${API_KEY}&language=en-US&page=1&query=${searchQuery}`,
    )
    .then(({ data }) => data);

export default { fetchTrendingMovies, fetchSearchMovies };
