import MovieItem from 'components/MovieItem';

import styles from './MoviesList.module.scss';

const MoviesList = ({ movies }) => (
  <ul className={styles.MoviesList}>
    {movies.map(movie => (
      <MovieItem key={movie.id} movie={movie} />
    ))}
  </ul>
);

export default MoviesList;
