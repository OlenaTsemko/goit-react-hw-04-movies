import { useState, useEffect } from 'react';

import moviesApi from 'services/moviesApi';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.fetchTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <h1>Homepage</h1>
      {movies.map(movie => (
        <li key={movie.id}>{movie.original_title}</li>
      ))}
    </>
  );
};

export default HomePage;
