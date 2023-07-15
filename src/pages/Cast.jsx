import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastByMovieId } from 'helpers/fetchDataMovies';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        const castData = await fetchCastByMovieId(movieId);
        setCast(castData);
      } catch (error) {
        console.error('Oooops! There is a problem...', error.message);
      }
    };

    fetchMovieCast();
  }, [movieId]);

  const formatCastNames = () => {
    return cast.map(actor => actor.name).join(', ');
  };

  return (
    <div>
      <h3>Cast</h3>
      <p>{formatCastNames()}</p>
    </div>
  );
};

export default Cast;
