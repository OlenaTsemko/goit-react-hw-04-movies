import { useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import moviesApi from 'services/moviesApi';
import styles from './Form.module.scss';

const Form = ({ onFormSubmit, location, history }) => {
  const [searchMovie, setSearchMovie] = useState(
    queryString.parse(location.search).query || '',
  );

  const handleChangeQuery = event => {
    const { value } = event.currentTarget;

    setSearchMovie(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    searchMovie &&
      moviesApi.fetchSearchMovies(searchMovie).then(({ results }) => {
        onFormSubmit(results);

        history.push({
          ...location,
          pathname: location.pathname,
          search: `?query=${searchMovie}`,
          state: {
            movies: results,
          },
        });
      });
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

Form.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default Form;
