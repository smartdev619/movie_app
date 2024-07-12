import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchMovies = async (page, query) => {
  let response = {};
  if(query) {
    response = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&page=${page}&query=${query}`);
  }else {
    response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`);
  }
  return response?.data?.results || [];
};

export const fetchMovieDetail = async (id) => {
  const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`);
  return response.data;
};
