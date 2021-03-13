import { useState, useEffect } from 'react';

import moviesApi from 'services/moviesApi';

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchMovies = () =>
      moviesApi
        .fetchSearchMovies(query)
        .then(({ results }) => setMovies(results));

    query ? fetchMovies() : setMovies([]);
  }, [query]);

  const handleChangeQuery = event => {
    const { value } = event.currentTarget;

    setQuery(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    console.log(movies);
  };

  return (
    <>
      <h1>MoviesPage</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input type="text" value={query} onChange={handleChangeQuery} />
        </label>

        <button type="submit">Search</button>
      </form>

      {movies.map(movie => (
        <li key={movie.id}>{movie.original_title}</li>
      ))}
    </>
  );
};

export default MoviesPage;
