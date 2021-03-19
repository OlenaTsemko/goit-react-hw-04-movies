import { useState, useEffect } from 'react';

import MovieDetails from 'components/MovieDetails';
import MovieDetailsNavInfo from 'components/MovieDetailsNavInfo';
import Notification from 'components/Notification';
import Loader from 'components/Loader';

import moviesApi from 'services/moviesApi';
import routes from 'routes';
import styles from './MovieDetailsPage.module.scss';

const MovieDetailsPage = props => {
  const { movieId } = props.match.params;
  const { history, location } = props;

  const [movie, setMovie] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    moviesApi
      .fetchMovieDetails(movieId)
      .then(data => {
        if (isNaN(movieId)) {
          setLoading(false);
          setMessage('No such movie found');
          setMovie(null);
          return;
        }

        setMovie(data);

        data ?? setMessage('No such movie found');
      })
      .finally(() => setLoading(false));
  }, [movieId]);

  const handleGoBack = () => {
    // location.state && location.state.from
    //   ? history.push(location.state.from)
    //   : history.push(routes.home);

    history.push(location?.state?.from || routes[0].path); // аналогично верхнему тернарнику
  };

  return (
    <>
      {loading && <Loader />}

      {movie ? (
        <>
          <button
            className={styles.goBackBtn}
            type="button"
            onClick={handleGoBack}
          >
            Go back
          </button>

          <MovieDetails {...movie} />
          <MovieDetailsNavInfo {...props} />
        </>
      ) : (
        <Notification message={message} />
      )}
    </>
  );
};

export default MovieDetailsPage;
