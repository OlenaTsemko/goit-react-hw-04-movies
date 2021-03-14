import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList';

import moviesApi from 'services/moviesApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  // console.log(movies);

  return <MoviesList movies={movies} />;
};

export default HomePage;
