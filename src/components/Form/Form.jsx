import { useState } from 'react';

import moviesApi from 'services/moviesApi';

import styles from './Form.module.scss';

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
    <form className={styles.Form} onSubmit={handleSubmit}>
      <label className={styles.FormLabel} htmlFor="">
        <input
          className={styles.FormInput}
          type="text"
          value={searchMovie}
          onChange={handleChangeQuery}
          placeholder="Search for a movie"
        />
      </label>

      <button className={styles.FormBtn} type="submit">
        Search
      </button>
    </form>
  );
};

export default Form;
