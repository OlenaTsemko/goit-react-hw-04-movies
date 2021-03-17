import { useState } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import Notification from 'components/Notification';
import moviesApi from 'services/moviesApi';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onFormSubmit, location, history }) => {
  const [searchMovie, setSearchMovie] = useState(
    queryString.parse(location.search).query || '',
  );
  const [message, setMessage] = useState('');

  const handleChangeQuery = event => {
    const { value } = event.currentTarget;

    setMessage('');

    setSearchMovie(value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    searchMovie &&
      moviesApi
        .fetchSearchMovies(searchMovie)
        .then(({ results, total_results }) => {
          onFormSubmit(results);

          if (total_results === 0) {
            setMessage('No such movie found');
            return;
          }

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
    <>
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
      {message && <Notification message={message} />}
    </>
  );
};

SearchBar.propTypes = {
  onFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
