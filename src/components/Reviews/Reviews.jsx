import { useState, useEffect } from 'react';

import moviesApi from 'services/moviesApi';

const Reviews = props => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    moviesApi.fetchMovieReviews(props.movieId).then(data => setReviews(data));
  }, [props.movieId]);

  // console.log(reviews);

  return (
    reviews && (
      <>
        <h1>Reviews</h1>
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h2>{review.author}</h2>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      </>
    )
  );
};

export default Reviews;
