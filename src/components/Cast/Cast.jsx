import { useState, useEffect } from 'react';

import moviesApi from 'services/moviesApi';

const Cast = props => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieCredits(props.movieId).then(data => setCast(data));
  }, [props.movieId]);

  // console.log(cast);

  return (
    cast && (
      <>
        <h1>Cast</h1>
        <ul>
          {cast.map(actor => (
            <li key={actor.id}>
              <img
                src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
                alt={`poster of ${actor.original_name}`}
              />
              <h2>{actor.original_name}</h2>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Cast;
