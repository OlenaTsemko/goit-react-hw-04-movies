import PropTypes from 'prop-types';

import Notification from 'components/Notification';
import styles from './SearchBar.module.scss';

const SearchBar = ({ onInputChange, message, searchMovie, onFormSubmit }) => (
  <>
    <form className={styles.Form} onSubmit={onFormSubmit}>
      <label className={styles.FormLabel}>
        <input
          className={styles.FormInput}
          type="text"
          value={searchMovie}
          onChange={onInputChange}
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

SearchBar.propTypes = {
  onInputChange: PropTypes.func.isRequired,
  message: PropTypes.string,
  searchMovie: PropTypes.string.isRequired,
  onFormSubmit: PropTypes.func.isRequired,
};

export default SearchBar;
