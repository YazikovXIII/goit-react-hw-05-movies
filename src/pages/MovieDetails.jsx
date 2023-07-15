import React, { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMovieDetails } from 'helpers/fetchDataMovies';
import { StyledMoviesList } from './Home.styled';
import { DetInnerCont, DetailsContainer } from './MovieDetails.styled';
import { GoBackBtn } from 'components/BackBtn/BackBtn';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');
  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const movie = await fetchMovieDetails(movieId);
        setMovieDetails(movie);
      } catch (error) {
        console.error(
          'Помилка під час отримання деталей фільму:',
          error.message
        );
      }
    };

    fetchDetails();
  }, [movieId]);

  if (!movieDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <GoBackBtn path={goBack.current}>Go Back!</GoBackBtn>
      <DetailsContainer>
        <img
          src={`${IMAGE_BASE_URL}${movieDetails.poster_path}`}
          alt={movieDetails.title}
          width="200px"
        />
        <DetInnerCont>
          <h2>{movieDetails.title}</h2>
          <p>{movieDetails.overview}</p>
        </DetInnerCont>
      </DetailsContainer>

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

export default MovieDetails;
