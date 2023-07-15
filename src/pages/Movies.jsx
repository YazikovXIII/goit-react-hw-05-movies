import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { fetchMoviesBySearchQuery } from 'helpers/fetchDataMovies';
import { StyledMoviesList } from './Home.styled';
import { Link } from 'react-router-dom';

const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchSubmit = async event => {
    event.preventDefault();
    try {
      const movies = await fetchMoviesBySearchQuery(searchQuery);
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
      <h3>Search movies</h3>
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

export default Movies;
