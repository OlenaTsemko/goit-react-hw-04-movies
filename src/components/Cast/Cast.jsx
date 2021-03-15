import { useState, useEffect } from 'react';

import moviesApi from 'services/moviesApi';
import supermanPlaceholder from 'images/supermanPlaceholder.png';
import superwomanPlaceholder from 'images/superwomanPlaceholder.jpg';

import styles from './Cast.module.scss';

const Cast = props => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCredits(props.movieId).then(data => setCast(data));
  }, [props.movieId]);

  return (
    cast && (
      <ul className={styles.Cast}>
        {cast.map(({ id, profile_path, original_name, character, gender }) => (
          <li className={styles.castItem} key={id}>
            {profile_path ? (
              <img
                src={`https://image.tmdb.org/t/p/w200${profile_path}`}
                alt={`poster of ${original_name}`}
              />
            ) : gender === 2 ? (
              <img
                src={supermanPlaceholder}
                alt={`poster of ${original_name}`}
              />
            ) : (
              <img
                src={superwomanPlaceholder}
                alt={`poster of ${original_name}`}
              />
            )}
            ,<h2 className={styles.castName}>{original_name}</h2>
            <p>Character: {character} </p>
          </li>
        ))}
      </ul>
    )
  );
};

export default Cast;
