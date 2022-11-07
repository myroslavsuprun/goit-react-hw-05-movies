import { useState, useEffect } from 'react';

import { MoviesList, PageTitle } from 'components';
import { TMDBAPI } from 'js/API/TMDBAPI';

const Home = () => {
  const [moviesData, setMoviesData] = useState(null);

  useEffect(() => {
    (async () => {
      const moviesResponse = await TMDBAPI.getTrendingMovies();
      setMoviesData(moviesResponse);
    })();

    document.title = 'Home';
  }, []);

  return (
    <>
      <PageTitle />
      {moviesData && <MoviesList moviesData={moviesData} />}
    </>
  );
};

export default Home;
