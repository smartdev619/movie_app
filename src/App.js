import { createBrowserRouter } from 'react-router-dom';
import {
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/Homepage';
import { MoviesContext, initialState } from './Context';
import { Suspense, lazy, useState } from 'react';
import { fetchMovieDetail, fetchMovies } from './utils/api';
import { CircularProgress } from '@mui/material';
import useContextHook from './Context/useContextHook';
// import SearchPage from './pages/SearchPage';

const MovieDetail = lazy(() => import('./pages/MovieDetail'));

const App = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/movie/:id",
    element: <MovieDetail />,
  },
]);

const Wrapper = () => {
  const { actions, contextValues } = useContextHook();

  return (
    <MoviesContext.Provider value={{ ...contextValues, actions }}>
      <Suspense fallback={<CircularProgress />}>
        <RouterProvider router={App} />
      </Suspense>
    </MoviesContext.Provider>
  );
}

export default Wrapper;
