import { Link } from 'react-router-dom';

import styles from './MovieItem.module.scss';

const MovieItem = ({ movie }) => (
  <li className={styles.MovieItem}>
    <Link to={`/movies/${movie.id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`poster of ${movie.original_title}`}
      />

      <h2 className={styles.movieTitle}>{movie.original_title}</h2>
    </Link>
  </li>
);

export default MovieItem;
