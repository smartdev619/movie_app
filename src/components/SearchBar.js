import React, { useState, useCallback, useContext } from 'react';
import { TextField, Button } from '@mui/material';
import { debounce } from '../utils/debounce';
import { MoviesContext } from '../Context';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const { actions } = useContext(MoviesContext);
  const onSearch  = (val) => {
    actions.searchMovie(val);
  }

  const debouncedSearch = useCallback(debounce((value) => onSearch(value), 500), []);

  const handleChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  return (
    <section>
      <TextField
        label="Search Movies"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleChange}
      />
    </section>
  );
};

export default SearchBar;