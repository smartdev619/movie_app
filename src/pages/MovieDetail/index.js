import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../../components/MovieDetails';
import { MoviesContext } from '../../Context';
import { CircularProgress } from '@mui/material';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const { actions, movie } = useContext(MoviesContext);

  useEffect(() => {
    actions.getMovieDetail(id);
  }, [id]);

  return (
    <div>
      {movie ? <MovieDetails movie={movie} /> : <CircularProgress />}
    </div>
  );
};

export default MovieDetailsPage;
