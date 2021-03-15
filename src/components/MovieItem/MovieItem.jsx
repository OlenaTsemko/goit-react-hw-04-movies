import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import moviePlaceholder from 'images/moviePlaceholder.png';

import styles from './MovieItem.module.scss';

const MovieItem = ({ id, poster, title }) => (
  <li className={styles.MovieItem}>
    <Link to={`/movies/${id}`}>
      {poster ? (
        <img
          src={`https://image.tmdb.org/t/p/w200${poster}`}
          alt={`poster of ${title}`}
        />
      ) : (
        <img src={moviePlaceholder} alt={`poster of ${title}`} />
      )}

      <h2 className={styles.movieTitle}>{title}</h2>
    </Link>
  </li>
);

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MovieItem;
