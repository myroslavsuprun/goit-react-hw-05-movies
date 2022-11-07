import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';

import { Home, Movies } from 'pages';
import { MovieDetails, Header, Cast, Reviews } from 'components';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
