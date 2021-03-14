import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

import moviesApi from 'services/moviesApi';

const MovieDetailsPage = props => {
  const [movie, setMovie] = useState(null);

  const { movieId } = props.match.params;
  const { url, path } = props.match;

  useEffect(() => {
    moviesApi.fetchMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  // console.log(movie);
  // console.log(props.match.path);

  return (
    movie && (
      <>
        <h1>MovieDetailsPage {movieId} </h1>

        <img
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={`poster of ${movie.original_title}`}
        />
        <h2>{movie.original_title}</h2>
        <p>{movie.overview}</p>

        <p>Additional information</p>
        <ul>
          <li>
            <NavLink to={`${url}/cast`}>Cast</NavLink>
          </li>
          <li>
            <NavLink to={`${url}/reviews`}>Reviews</NavLink>
          </li>
        </ul>

        <Route
          path={`${path}/cast`}
          render={props => <Cast {...props} movieId={movieId} />}
        />
        <Route
          path={`${path}/reviews`}
          render={props => <Reviews {...props} movieId={movieId} />}
        />
      </>
    )
  );
};

export default MovieDetailsPage;
