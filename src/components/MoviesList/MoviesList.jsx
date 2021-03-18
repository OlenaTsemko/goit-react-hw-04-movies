import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

import MoviePreview from 'components/MoviePreview';

import styles from './MoviesList.module.scss';

const MoviesList = ({ movies, location }) => (
  <ul className={styles.MoviesList}>
    {movies &&
      movies.map(({ id, poster_path, original_title }) => (
        <li key={id} className={styles.MovieItem}>
          <NavLink
            exact
            to={{
              // ...location,
              pathname: `/movies/${id}`,
              state: {
                from: location,
              },
            }}
          >
            <MoviePreview poster={poster_path} title={original_title} />
          </NavLink>
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
