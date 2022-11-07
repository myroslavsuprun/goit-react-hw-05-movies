import { Outlet, useLocation, Link } from 'react-router-dom';
import { Suspense } from 'react';

import { MovieCard, MovieAdditionalInfo } from 'components';

const MovieDetails = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <MovieCard />
      <MovieAdditionalInfo />
      <Suspense fallback={<div>Loading... </div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
