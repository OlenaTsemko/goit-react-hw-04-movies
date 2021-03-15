import { useState, useEffect } from 'react';

import moviesApi from 'services/moviesApi';

import styles from './Cast.module.scss';

const Cast = props => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCredits(props.movieId).then(data => setCast(data));
  }, [props.movieId]);

  return (
    cast && (
      <ul className={styles.Cast}>
        {cast.map(({ id, profile_path, original_name, character }) => (
          <li className={styles.castItem} key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt={`poster of ${original_name}`}
            />
            <h2 className={styles.castName}>{original_name}</h2>
            <p>Character: {character} </p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
