import React from 'react';
const initialState = {
    movies: [],
    searchTeam: "",
    searchResults: [],
    loading: false,
    error: null,
    actions: {
        getMovies: () => {},
        getMovieDetail: () => {},
        searchMovie: () => {},
    }
  };

const MoviesContext = React.createContext(initialState);

export {
    MoviesContext,
    initialState
}
