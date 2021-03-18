import { useState, useEffect } from 'react';
import queryString from 'query-string';

import MoviesList from 'components/MoviesList';
import SearchBar from 'components/SearchBar';
import Loader from 'components/Loader';
import moviesApi from 'services/moviesApi';

const MoviesPage = props => {
  const { location, history } = props;

  const [searchMovie, setSearchMovie] = useState(
    queryString.parse(location.search).query || '',
  );
  const [movies, setMovies] = useState(location?.state?.movies || []);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(false);
    setMovies(location?.state?.movies || []);
    setSearchMovie('');
  }, [location?.state?.movies]);

  useEffect(() => {
    queryString.parse(location.search).query &&
      moviesApi
        .fetchSearchMovies(queryString.parse(location.search).query)
        .then(({ results, total_results }) => {
          setMovies(results);

          if (total_results === 0) {
            setMessage('No such movie found');
            return;
          }

          setSearchMovie('');
        })
        .finally(() => setLoading(false));
  }, [location.search]);

  const handleChangeQuery = event => {
    const { value } = event.currentTarget;

    setMessage('');

    setSearchMovie(value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    setLoading(true);

    history.push({
      ...location,
      pathname: location.pathname,
      search: `?query=${searchMovie}`,
      state: {
        movies: movies,
      },
    });
  };

  return (
    <>
      <SearchBar
        {...props}
        onInputChange={handleChangeQuery}
        onFormSubmit={handleSubmit}
        message={message}
        searchMovie={searchMovie}
      />

      {loading && queryString.parse(location.search).query && <Loader />}
      <MoviesList {...props} movies={movies} />
    </>
  );
};

export default MoviesPage;
