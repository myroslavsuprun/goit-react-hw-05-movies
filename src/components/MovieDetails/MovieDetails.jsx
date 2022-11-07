import { Outlet } from 'react-router-dom';
import { useLocation, Link } from 'react-router-dom';
import { MovieCard, MovieAdditionalInfo } from 'components';

const MovieDetails = () => {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? '/';
  return (
    <div>
      <Link to={backLinkHref}>Go back</Link>
      <MovieCard />
      <MovieAdditionalInfo />
      <Outlet />
    </div>
  );
};

export default MovieDetails;
