import { useState } from 'react';

import moviesApi from 'services/moviesApi';

const Form = ({ onFormSubmit }) => {
  const [searchMovie, setSearchMovie] = useState('');

  const handleChangeQuery = event => {
    const { value } = event.currentTarget;

    setSearchMovie(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    moviesApi
      .fetchSearchMovies(searchMovie)
      .then(({ results }) => onFormSubmit(results));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">
        <input
          type="text"
          value={searchMovie}
          onChange={handleChangeQuery}
          placeholder="Search for a movie"
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
