import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'helpers/fetchPopMovies';
import { StyledMoviesList } from './Home.styled';
import { Link } from 'react-router-dom';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchPopularMovies();
        setPopularMovies(movies);
        console.log(movies);
      } catch (error) {
        console.error(
          'Помилка під час отримання списку популярних фільмів:',
          error.message
        );
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <StyledMoviesList>
        {popularMovies.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </StyledMoviesList>
    </div>
  );
};
