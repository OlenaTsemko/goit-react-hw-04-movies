import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Notification from 'components/Notification';
import moviesApi from 'services/moviesApi';
import styles from './Reviews.module.scss';

const Reviews = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const [message, setMessage] = useState('');

  useEffect(() => {
    moviesApi.fetchMovieReviews(movieId).then(data => {
      setReviews(data);

      data.length === 0 &&
        setMessage("We don't have any reviews for this movie");
    });
  }, [movieId]);

  return reviews?.length > 0 ? (
    <ul className={styles.Reviews}>
      {reviews.map(({ id, author, content }) => (
        <li className={styles.reviewsItem} key={id}>
          <h2 className={styles.reviewsAuthor}>Author: {author}</h2>
          <p className={styles.reviewsContent}>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <Notification message={message} />
  );
};

Reviews.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Reviews;
