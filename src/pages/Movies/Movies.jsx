import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import { MoviesList, SearchForm } from 'components';
import { TMDBAPI } from 'js/API/TMDBAPI';

const Movies = () => {
  const [moviesData, setMoviesData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!searchQuery) return;

    (async () => {
      const moviesResponse = await TMDBAPI.getMoviesBySearch(searchQuery);

      setMoviesData(moviesResponse);
    })();

    const nextParams = searchQuery !== '' ? { search: searchQuery } : {};
    setSearchParams(nextParams);
  }, [searchQuery, setSearchParams]);

  useEffect(() => {
    document.title = 'Movies';
  });

  useEffect(() => {
    setSearchQuery(searchParams.get('search'));
  }, [searchParams]);

  const onSearchFormSubmit = newSearchQuery => {
    setSearchQuery(newSearchQuery);
  };

  return (
    <>
      <SearchForm onSubmit={onSearchFormSubmit} />
      {moviesData && <MoviesList moviesData={moviesData} />}
    </>
  );
};

export default Movies;
