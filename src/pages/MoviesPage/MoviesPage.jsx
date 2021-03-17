import { useState } from 'react';

import MoviesList from 'components/MoviesList';
import Form from 'components/Form';

const MoviesPage = props => {
  const { location } = props;
  const [movies, setMovies] = useState(location?.state?.movies || []);

  const handleFormSubmit = results => setMovies(results);

  return (
    <>
      <Form {...props} onFormSubmit={handleFormSubmit} />
      <MoviesList {...props} movies={movies} />
    </>
  );
};

export default MoviesPage;
