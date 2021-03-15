import { useState, useEffect } from 'react';

import moviesApi from 'services/moviesApi';
import styles from './Reviews.module.scss';

const Reviews = props => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieReviews(props.movieId).then(data => setReviews(data));
  }, [props.movieId]);

  return reviews.length > 0 ? (
    <ul className={styles.Reviews}>
      {reviews.map(({ id, author, content }) => (
        <li className={styles.reviewsItem} key={id}>
          <h2 className={styles.reviewsAuthor}>Author: {author}</h2>
          <p className={styles.reviewsContent}>{content}</p>
        </li>
      ))}
    </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
