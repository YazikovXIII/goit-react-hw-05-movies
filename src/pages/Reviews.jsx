// export const Reviews = () => {
//   return <p>Revievs will be here</p>;
// };

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '040fbcd62819e93b33d68dfe6cbb3776';

export const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}`;
        const response = await axios.get(url);
        const reviewsData = response.data.results;
        setReviews(reviewsData);
      } catch (error) {
        console.error('Ooops!We have a problem!', error.message);
      }
    };

    fetchReviews();
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviews.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
