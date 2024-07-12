import React, { useContext, useEffect, useState } from 'react';
import MovieCard from './MovieCard';
import InfiniteScroll from 'react-infinite-scroll-component';
import { styled } from 'styled-components'
import { Grid } from '@mui/material';
import { MoviesContext } from '../Context';

const MovieSection = styled.section`
padding-top: 1rem;
`

const MovieList = () => {
  const [page, setPage] = useState(1);

  const { actions, movies, searchTeam, searchResults } = useContext(MoviesContext);
  let moviesUpdated = movies;
  if (searchTeam) {
    moviesUpdated = searchResults
  }

  useEffect(() => {
    actions.getMovies(page, searchTeam)
  }, [page, searchTeam]);

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <MovieSection>
      <InfiniteScroll
        dataLength={movies.length}
        next={loadMoreMovies}
        hasMore={!searchTeam}
        loader={<h4>Loading...</h4>}
      >
        <Grid container spacing={{ xs: 2, sm: 4, md: 4 }} columnSpacing={{ sm: 3 }}>
          {moviesUpdated.map((movie) => (
            <Grid item xs={12} sm={6} md={4} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </MovieSection>
  );
};

export default MovieList;