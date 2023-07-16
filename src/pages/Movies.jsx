import React, { useState, useEffect } from 'react';
import { Outlet, useSearchParams, useLocation, Link } from 'react-router-dom';
import { fetchMoviesBySearchQuery } from 'helpers/fetchDataMovies';
import { StyledMoviesList } from './Home.styled';
import { NotStyledLink } from './Home.styled';
import { debounce } from 'lodash';

const Movies = () => {
  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchMoviesBySearchQuery(searchQuery);
        setSearchResults(movies);
      } catch (error) {
        console.error('Oooops!', error.message);
      }
    };

    const delayedFetchMovies = debounce(fetchMovies, 500);

    delayedFetchMovies();

    return () => {
      delayedFetchMovies.cancel();
    };
  }, [searchQuery]);

  const handleSearchInputChange = event => {
    setSearchParams({ search: event.target.value });
  };

  return (
    <div>
      <h3>Search movies</h3>
      <form>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
      </form>
      <Outlet />
      <StyledMoviesList>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <NotStyledLink
              to={`/movies/${movie.id}`}
              state={{ from: location }}
            >
              {movie.title}
            </NotStyledLink>
          </li>
        ))}
      </StyledMoviesList>
    </div>
  );
};

export default Movies;
