import axios from 'axios';

const API_KEY = '040fbcd62819e93b33d68dfe6cbb3776';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const fetchPopularMovies = async () => {
  try {
    const url = `${BASE_URL}movie/popular?api_key=${API_KEY}`;
    const response = await axios.get(url);
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error('Ooops! We have a problem!', error.message);
    throw error;
  }
};

export const fetchMoviesBySearchQuery = async searchQuery => {
  try {
    const url = `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchQuery}`;
    const response = await axios.get(url);
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error('Ooops! We have a problem!', error.message);
    throw error;
  }
};

export const fetchMovieDetails = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}?api_key=${API_KEY}`;
    const response = await axios.get(url);
    const movie = response.data;
    return movie;
  } catch (error) {
    console.error('Ooops! We have a problem!', error.message);
    throw error;
  }
};

export const fetchCastByMovieId = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    const response = await axios.get(url);
    const cast = response.data.cast;
    return cast;
  } catch (error) {
    console.error('Ooops! We have a problem!', error.message);
    throw error;
  }
};

export const fetchReviewsByMovieId = async movieId => {
  try {
    const url = `${BASE_URL}movie/${movieId}/reviews?api_key=${API_KEY}`;
    const response = await axios.get(url);
    const reviews = response.data.results;
    return reviews;
  } catch (error) {
    console.error('Ooops! We have a problem!', error.message);
    throw error;
  }
};
