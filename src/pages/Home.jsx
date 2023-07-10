import React, { useState, useEffect } from 'react';
import { fetchPopularMovies } from 'helpers/fetchPopMovies';

export const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await fetchPopularMovies();
        setPopularMovies(movies);
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
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );

  //   return (
  //     <div>
  //       <h1>Список популярних фільмів</h1>
  //       <Row>
  //         {popularMovies.map(movie => (
  //           <Col key={movie.id} sm={6} md={4} lg={2} xl={6}>
  //             <Card>
  //               <Card.Img
  //                 variant="top"
  //                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
  //               />
  //               <Card.Body>
  //                 <Card.Title>{movie.title}</Card.Title>
  //               </Card.Body>
  //             </Card>
  //           </Col>
  //         ))}
  //       </Row>
  //     </div>
  //   );

  //   return (
  //     <div>
  //       <h1>Список популярних фільмів</h1>
  //       <Row>
  //         {popularMovies.map(movie => (
  //           <Col key={movie.id} sm={6}>
  //             <Card>
  //               <Card.Img
  //                 variant="top"
  //                 src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
  //               />
  //               <Card.Body>
  //                 <Card.Title>{movie.title}</Card.Title>
  //               </Card.Body>
  //             </Card>
  //           </Col>
  //         ))}
  //       </Row>
  //     </div>
  //   );
};
