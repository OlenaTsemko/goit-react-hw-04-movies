import { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Cast from 'components/Cast';
import Reviews from 'components/Reviews';

import styles from './MovieDetailsNavInfo.module.scss';

// const Cast = lazy(() =>
//   import('components/Cast' /* webpackChunkName: "Cast" */),
// );
// const Reviews = lazy(() =>
//   import('components/Reviews' /* webpackChunkName: "Reviews" */),
// );

const MovieDetailsNavInfo = props => {
  const { movieId } = props.match.params;
  const { url, path } = props.match;
  const { location } = props;

  const [cast, setCast] = useState({
    pathname: `${url}/cast`,
    className: styles.NavLink,
    activeClassName: styles.NavLinkActive,
  });
  const [reviews, setReviews] = useState({
    pathname: `${url}/reviews`,
    className: styles.NavLink,
    activeClassName: styles.NavLinkActive,
  });

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

  return (
    <>
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
  );
};

export default MovieDetailsNavInfo;
