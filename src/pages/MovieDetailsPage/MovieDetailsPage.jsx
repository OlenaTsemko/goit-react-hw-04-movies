import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';

import MovieDetails from 'components/MovieDetails';
import Notification from 'components/Notification';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

import moviesApi from 'services/moviesApi';
import routes from 'routes';
import styles from './MovieDetailsPage.module.scss';

// const Cast = lazy(() =>
//   import('components/Cast' /* webpackChunkName: "Cast" */),
// );
// const Reviews = lazy(() =>
//   import('components/Reviews' /* webpackChunkName: "Reviews" */),
// );

const MovieDetailsPage = props => {
  const { movieId } = props.match.params;
  const { url, path } = props.match;
  const { history, location } = props;

  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState('');

  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    moviesApi.fetchMovieDetails(movieId).then(data => {
      if (isNaN(movieId)) {
        setMessage('No such movie found');
        setMovie(null);
        return;
      }

      setMovie(data);

      data ?? setMessage('No such movie found');
    });
  }, [movieId]);

  useEffect(() => {
    switch (location.pathname) {
      case url:
      default:
        setCast({
          pathname: `${url}/cast`,
          className: styles.NavLink,
          activeClassName: styles.NavLinkActive,
        });
        setReviews({
          pathname: `${url}/reviews`,
          className: styles.NavLink,
          activeClassName: styles.NavLinkActive,
        });
        return;

      case `${url}/cast`:
        setCast({
          pathname: `${url}`,
          className: styles.NavLinkActive,
          activeClassName: styles.NavLink,
        });
        setReviews({
          pathname: `${url}/reviews`,
          className: styles.NavLink,
          activeClassName: styles.NavLinkActive,
        });
        return;

      case `${url}/reviews`:
        setCast({
          pathname: `${url}/cast`,
          className: styles.NavLink,
          activeClassName: styles.NavLinkActive,
        });
        setReviews({
          pathname: `${url}`,
          className: styles.NavLinkActive,
          activeClassName: styles.NavLink,
        });
        return;
    }

    // if (location.pathname === url) {
    //   setCast({
    //     pathname: `${url}/cast`,
    //     className: styles.NavLink,
    //     activeClassName: styles.NavLinkActive,
    //   });
    //   setReviews({
    //     pathname: `${url}/reviews`,
    //     className: styles.NavLink,
    //     activeClassName: styles.NavLinkActive,
    //   });
    // }

    // if (location.pathname === `${url}/cast`) {
    //   setCast({
    //     pathname: `${url}`,
    //     className: styles.NavLinkActive,
    //     activeClassName: styles.NavLink,
    //   });
    //   setReviews({
    //     pathname: `${url}/reviews`,
    //     className: styles.NavLink,
    //     activeClassName: styles.NavLinkActive,
    //   });
    // }

    // if (location.pathname === `${url}/reviews`) {
    //   setCast({
    //     pathname: `${url}/cast`,
    //     className: styles.NavLink,
    //     activeClassName: styles.NavLinkActive,
    //   });
    //   setReviews({
    //     pathname: `${url}`,
    //     className: styles.NavLinkActive,
    //     activeClassName: styles.NavLink,
    //   });
    // }
  }, [location.pathname, url]);

  const handleGoBack = () => {
    // location.state && location.state.from
    //   ? history.push(location.state.from)
    //   : history.push(routes.home);

    history.push(location?.state?.from || routes[0].path); // аналогично верхнему тернарнику
  };

  return movie ? (
    <>
      <button className={styles.goBackBtn} type="button" onClick={handleGoBack}>
        Go back
      </button>
      <MovieDetails {...movie} />
      <div className={styles.addInfo}>
        <h3 className={styles.titleAddInfo}>Additional information</h3>
        <ul className={styles.listAddInfo}>
          <li>
            <NavLink
              to={{
                ...location,
                pathname: cast.pathname,
              }}
              className={cast.className}
              activeClassName={cast.activeClassName}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                ...location,
                pathname: reviews.pathname,
              }}
              className={reviews.className}
              activeClassName={reviews.activeClassName}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      {/* <Suspense fallback={<Loader />}> */}
      <Route
        path={`${path}/cast`}
        render={props => <Cast {...props} movieId={movieId} />}
      />
      <Route
        path={`${path}/reviews`}
        render={props => <Reviews {...props} movieId={movieId} />}
      />
      {/* </Suspense> */}
    </>
  ) : (
    <Notification message={message} />
  );
};

export default MovieDetailsPage;
