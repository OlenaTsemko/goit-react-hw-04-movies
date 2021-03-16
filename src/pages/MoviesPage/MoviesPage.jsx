import { useState } from 'react';

import MoviesList from 'components/MoviesList';
import Form from 'components/Form';

const MoviesPage = props => {
  const [movies, setMovies] = useState([]);

  const handleFormSubmit = results => setMovies(results);

  return (
    <>
      <Form onFormSubmit={handleFormSubmit} />
      <MoviesList {...props} movies={movies} />
    </>
  );
};

export default MoviesPage;
