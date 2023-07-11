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

// import React, { useState } from 'react';
// import { Outlet, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const API_KEY = '040fbcd62819e93b33d68dfe6cbb3776';
// const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// export const Movies = () => {
//   const [searchQuery, setSearchQuery] = useState('');
//   //   const navigate = useNavigate();
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearchSubmit = async event => {
//     event.preventDefault();
//     try {
//       const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchQuery}`;
//       const response = await axios.get(url);
//       const movies = response.data.results;
//       setSearchResults(movies);
//     } catch (error) {
//       console.error('Помилка під час пошуку фільмів:', error.message);
//     }
//   };

//   const handleSearchInputChange = event => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>
//       <h1>Movies</h1>
//       <form onSubmit={handleSearchSubmit}>
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={handleSearchInputChange}
//         />
//         <button type="submit">Search</button>
//       </form>
//       <Outlet />
//       {searchResults.map(movie => (
//         <div key={movie.id}>
//           <img src={`${IMAGE_BASE_URL}${movie.backdrop_path}`} alt="some" />
//           <h2>{movie.title}</h2>
//           <p>{movie.overview}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_KEY = '040fbcd62819e93b33d68dfe6cbb3776';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  //   const navigate = useNavigate();
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
      {searchResults.map(movie => (
        <div key={movie.id}>
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
          />
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
        </div>
      ))}
    </div>
  );
};
