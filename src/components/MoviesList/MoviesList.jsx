import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviePreview from 'components/MoviePreview';

import styles from './MoviesList.module.scss';

const MoviesList = ({ movies, location }) => (
  <ul className={styles.MoviesList}>
    {movies.map(({ id, poster_path, original_title }) => (
      <li key={id} className={styles.MovieItem}>
        <Link
          to={{
            pathname: `/movies/${id}`,
            state: {
              from: location,
            },
          }}
        >
          <MoviePreview poster={poster_path} title={original_title} />
        </Link>
      </li>
    ))}
  </ul>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

export default MoviesList;
