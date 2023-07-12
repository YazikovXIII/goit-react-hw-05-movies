import React, { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import axios from 'axios';
import { StyledMoviesList } from './Home.styled';

const API_KEY = '040fbcd62819e93b33d68dfe6cbb3776';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}`;
        const response = await axios.get(url);
        const movie = response.data;
        setMovieDetails(movie);
      } catch (error) {
        console.error(
          'Помилка під час отримання деталей фільму:',
          error.message
        );
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <img
        src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
        alt={movieDetails.title}
        width="200px"
      />
      <h1>{movieDetails.title}</h1>
      <p>{movieDetails.overview}</p>
      <StyledMoviesList>
        <li>
          <Link to={`/movies/${movieDetails.id}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieDetails.id}/reviews`}>Reviews</Link>
        </li>
      </StyledMoviesList>
      <Outlet />
    </div>
  );
};
