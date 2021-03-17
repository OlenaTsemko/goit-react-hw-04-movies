import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

import moviesApi from 'services/moviesApi';
import routes from 'routes';

import styles from './MovieDetailsPage.module.scss';

const MovieDetailsPage = props => {
  const [movie, setMovie] = useState(null);

  const { movieId } = props.match.params;
  const { url, path } = props.match;

  useEffect(() => {
    moviesApi.fetchMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);

  const handleGoBack = () => {
    const { history, location } = props;

    // location.state && location.state.from
    //   ? history.push(location.state.from)
    //   : history.push(routes.home);

    history.push(location?.state?.from || routes[0].path); // аналогично верхнему тернарнику
  };

  return (
    movie && (
      <>
        <button
          className={styles.goBackBtn}
          type="button"
          onClick={handleGoBack}
        >
          Go back
        </button>
        <MovieDetails {...movie} />
        <div className={styles.addInfo}>
          <h3 className={styles.titleAddInfo}>Additional information</h3>
          <ul className={styles.listAddInfo}>
            <li>
              <NavLink
                to={`${url}/cast`}
                className={styles.NavLink}
                activeClassName={styles.NavLinkActive}
              >
                Cast
              </NavLink>
            </li>
            <li>
              <NavLink
                to={`${url}/reviews`}
                className={styles.NavLink}
                activeClassName={styles.NavLinkActive}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>

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
