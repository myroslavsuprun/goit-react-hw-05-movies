import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import { Home, Movies } from 'pages';
import { Header } from './Header';

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<div>Movie by id</div>} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

// {
//   /* <Route
//             path="movies/:movieId"
//             element={
//               <div>
//                 Movies by id
//               </div>
//             }
//           >
//             <Route path="cast" element={<div>Cast</div>} />
//             <Route path="reviews" element={<div>Reviews</div>} />
//           </Route> */
// }
