import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/movie/${movie.id}`);
  }
  return (
    <Card variant='outlined'>
      <CardActionArea onClick={handleClick}>
        <CardMedia
          sx={{ height: 140 }}
          image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MovieCard;
