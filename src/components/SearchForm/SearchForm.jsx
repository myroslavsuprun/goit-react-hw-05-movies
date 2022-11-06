import PropTypes from 'prop-types';
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const onSearchInputChange = e => {
    const value = e.target.value;
    setSearchQuery(value);
  };

  const onSearchFormSubmit = e => {
    e.preventDefault();

    const searchValue = e.target.search.value;
    onSubmit(searchValue);

    resetForm();
  };

  const resetForm = () => {
    setSearchQuery('');
  };

  return (
    <>
      <form onSubmit={onSearchFormSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search for movies"
          value={searchQuery}
          onChange={onSearchInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default SearchForm;
