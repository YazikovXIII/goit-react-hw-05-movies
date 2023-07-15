// export const Reviews = () => {
//   return <p>Revievs will be here</p>;
// };

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsByMovieId } from 'helpers/fetchDataMovies';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieReviews = async () => {
      try {
        const reviewsData = await fetchReviewsByMovieId(movieId);
        setReviews(reviewsData);
      } catch (error) {
        console.error('Ooops! We have a problem!', error.message);
      }
    };

    fetchMovieReviews();
  }, [movieId]);

  // return (
  //   <div>
  //     <h3>Reviews</h3>
  //     <ul>
  //       {reviews.map(review => (
  //         <li key={review.id}>
  //           <h3>{review.author}</h3>
  //           <p>{review.content}</p>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
  return (
    <div>
      <h3>Reviews</h3>
      {reviews.length > 0 ? (
        <ul>
          {reviews.map(review => (
            <li key={review.id}>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews...</p>
      )}
    </div>
  );
};

export default Reviews;
