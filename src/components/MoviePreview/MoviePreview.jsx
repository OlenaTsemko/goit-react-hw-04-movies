import PropTypes from 'prop-types';

import moviePlaceholder from 'images/moviePlaceholder.png';
import styles from './MoviePreview.module.scss';

const MoviePreview = ({ poster, title }) => (
  <div className={styles.MoviePreview}>
    {poster ? (
      <img
        src={`https://image.tmdb.org/t/p/w200${poster}`}
        alt={`poster of ${title}`}
      />
    ) : (
      <img src={moviePlaceholder} alt={`poster of ${title}`} />
    )}
    <h2 className={styles.movieTitle}>{title}</h2>
  </div>
);

MoviePreview.propTypes = {
  poster: PropTypes.string,
  title: PropTypes.string.isRequired,
};

export default MoviePreview;
