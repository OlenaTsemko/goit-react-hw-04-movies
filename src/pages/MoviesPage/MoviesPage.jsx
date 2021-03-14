import { useState } from 'react';
// import { Link } from 'react-router-dom';

import MoviesList from 'components/MoviesList';

import Form from 'components/Form';

// import moviesApi from 'services/moviesApi';

const MoviesPage = props => {
  const [movies, setMovies] = useState([]);

  const handleFormSubmit = results => setMovies(results);

  return (
    <>
      <Form onFormSubmit={handleFormSubmit} />

      <MoviesList movies={movies} />

      {/* <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${props.match.url}/${movie.id}`}>
              {movie.original_title}
            </Link>
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default MoviesPage;
