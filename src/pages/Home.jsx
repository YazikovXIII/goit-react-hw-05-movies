import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'helpers/fetchDataMovies';
import { StyledMoviesList } from './Home.styled';
import { NotStyledLink } from './Home.styled';

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchPopularMovies();
        setPopularMovies(movies);
      } catch (error) {
        console.error('Oooops!:', error.message);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h3>Popular Movies</h3>
      <StyledMoviesList>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <NotStyledLink to={`/movies/${movie.id}`}>
              {movie.title}
            </NotStyledLink>
          </li>
        ))}
      </StyledMoviesList>
    </div>
  );
};

export default Home;
