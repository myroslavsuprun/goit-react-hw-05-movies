import { useState, useEffect } from 'react';

import { MoviesList, SearchForm } from 'components';

const Movies = () => {
  const [moviesData] = useState(null);
  const [searchQuery, setSearchQuery] = useState(null);

  useEffect(() => {
    if (!searchQuery) return;

    // Here is going to be request
  }, [searchQuery]);

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
