import MovieItem from 'components/MovieItem';

import styles from './MoviesList.module.scss';

const MoviesList = ({ movies }) => (
  <ul className={styles.MoviesList}>
    {movies.map(({ id, poster_path, original_title }) => (
      <MovieItem key={id} id={id} poster={poster_path} title={original_title} />
    ))}
  </ul>
);

export default MoviesList;
