// import React from 'react';
// import { Outlet } from 'react-router-dom';

// export const Movies = () => {
//   return (
//     <div>
//       <h1>Movies</h1>
//       <Outlet />
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { StyledMoviesList } from './Home.styled';
import { Link } from 'react-router-dom';

const API_KEY = '040fbcd62819e93b33d68dfe6cbb3776';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async event => {
    event.preventDefault();
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
      const response = await axios.get(url);
      const movies = response.data.results;
      setSearchResults(movies);
    } catch (error) {
      console.error('Помилка під час пошуку фільмів:', error.message);
    }
  };

  const handleSearchInputChange = event => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <h1>Movies</h1>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
      <Outlet />
      <StyledMoviesList>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </StyledMoviesList>
    </div>
  );
};
