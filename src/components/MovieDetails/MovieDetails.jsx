import PropTypes from 'prop-types';

import moviePlaceholder from 'images/moviePlaceholder.png';
import styles from './MovieDetails.module.scss';

const MovieDetails = ({
  poster_path,
  original_title,
  release_date,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <div className={styles.MovieDetails}>
      {poster_path ? (
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt={`poster of ${original_title}`}
        />
      ) : (
        <img src={moviePlaceholder} alt={`poster of ${original_title}`} />
      )}

      <div className={styles.MovieDetailsWrapper}>
        <h2 className={styles.title}>{original_title}</h2>
        <div className={styles.detailWrapper}>
          <p className={styles.titleDetails}>Release Date: </p>
          <span>{release_date}</span>
        </div>
        <div className={styles.detailWrapper}>
          <p className={styles.titleDetails}>User Score: </p>
          <span>{vote_average}/10</span>
        </div>
        <div className={styles.detailWrapper}>
          <h3>Overview: </h3>
          <p className={styles.text}>{overview}</p>
        </div>
        {genres.length > 0 && (
          <div className={styles.detailWrapper}>
            <h3 className={styles.titleDetails}>Genres:</h3>
            <ul>
              {genres.map(genre => (
                <li key={genre.id}>{genre.name}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

MovieDetails.defaultProps = {
  release_date: 'Unknown release date',
  vote_average: 'No votes found',
};

MovieDetails.propTypes = {
  poster_path: PropTypes.string,
  original_title: PropTypes.string.isRequired,
  release_date: PropTypes.string,
  vote_average: PropTypes.number,
  overview: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ),
};

export default MovieDetails;
