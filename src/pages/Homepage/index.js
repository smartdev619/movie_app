import React from 'react';
import { styled } from 'styled-components'
import { Grid, Container, Box } from '@mui/material';
import MovieList from '../../components/MovieList';
import SearchBar from '../../components/SearchBar';

const HomePage = () => {
  return (
    <Container>
      <Box>
        <Grid>
          <h1>Latest Movies</h1>
        </Grid>
        <Grid>
          <SearchBar />
        </Grid>
      </Box>
      <MovieList />
    </Container>
  );
};

export default HomePage;
