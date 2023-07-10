import axios from 'axios';

const API_KEY = '040fbcd62819e93b33d68dfe6cbb3776';

export const fetchPopularMovies = async () => {
  try {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`;
    const response = await axios.get(url);
    const movies = response.data.results;
    return movies;
  } catch (error) {
    console.error(
      'Помилка під час отримання списку популярних фільмів:',
      error.message
    );
    throw error;
  }
};
