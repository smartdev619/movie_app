import React, {useState} from 'react';
import { fetchMovieDetail, fetchMovies } from '../utils/api';
import { MoviesContext, initialState } from './index';

const useContextHook = () => {
    const [contextValues, setContextValues] = useState(initialState);

  const getMovies = async (page) => {
    const movies = await fetchMovies(page, contextValues.searchTeam);
    if (contextValues.searchTeam) {
      contextValues.searchResults = movies;
    } else {
      contextValues.movies = [
        ...contextValues.movies,
        ...movies
      ];
    }

    setContextValues({
      ...contextValues
    });
  }

  const getMovieDetail = async (page) => {
    const movie = await fetchMovieDetail(page);
    contextValues.movie = movie;
    setContextValues({
      ...contextValues
    });
  }

  const searchMovie = async (query) => {
    contextValues.searchTeam = query;
    setContextValues({
      ...contextValues,
    });
  }

  const actions = ({
    getMovies: (page, query) => getMovies(page, query),
    getMovieDetail: (id) => getMovieDetail(id),
    searchMovie: (query) => searchMovie(query),
  });

  return {
    actions,
    contextValues,
  }
};

export default useContextHook;
