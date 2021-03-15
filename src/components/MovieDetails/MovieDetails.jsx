import styles from './MovieDetails.module.scss';

const MovieDetails = ({ movie }) => {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = movie;

  return (
    <div className={styles.MovieDetails}>
      <img
        src={`https://image.tmdb.org/t/p/w300${poster_path}`}
        alt={`poster of ${original_title}`}
      />

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
          <h3 className={styles.titleDetails}>Overview: </h3>
          <p className={styles.text}>{overview}</p>
        </div>

        <div className={styles.detailWrapper}>
          <h3 className={styles.titleDetails}>Genres:</h3>
          <ul>
            {genres.map(genre => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
