// export const Cast = () => {
//   return <p>Cast will be here</p>;
// };

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '040fbcd62819e93b33d68dfe6cbb3776';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}`;
        const response = await axios.get(url);
        const castData = response.data.cast;
        setCast(castData);
      } catch (error) {
        console.error('Oooops!There is a problem...', error.message);
      }
    };

    fetchCast();
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>{actor.name}</li>
        ))}
      </ul>
    </div>
  );
};
