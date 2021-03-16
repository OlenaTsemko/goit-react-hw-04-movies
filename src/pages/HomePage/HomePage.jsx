import { useState, useEffect } from 'react';

import MoviesList from 'components/MoviesList';
import moviesApi from 'services/moviesApi';

const HomePage = props => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return <MoviesList {...props} movies={movies} />;
};

export default HomePage;
