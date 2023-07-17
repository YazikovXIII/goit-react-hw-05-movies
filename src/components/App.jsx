// import { Routes, Route } from 'react-router-dom';
// import { SharedLayout } from './SharedLayout';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies';
// import { MovieDetails } from 'pages/MovieDetails';
// import { Cast } from 'pages/Cast';
// import { Reviews } from 'pages/Reviews';
// import { lazy } from 'react';

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<SharedLayout />}>
//         <Route index element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//       </Route>
//     </Routes>
//   );
// };

import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';
import { lazy } from 'react';
import { Loader } from './Loader';
import NotFound from './NotFound';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('pages/Cast'));
const Reviews = lazy(() => import('pages/Reviews'));

export const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
};
