import React from 'react';
import { Chip, Container, Grid, Box, Paper } from '@mui/material';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useMovieInfo from '../Context/useMovieInfo';

const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  backgroundColor: 'background.paper',
  marginTop: 2,
};

const MovieDetails = ({ movie }) => {
  const movieDetails = useMovieInfo(movie);

  const renderItem = (item) => {
    if (item?.isImage) {
      return <ListItem key={item.key}>
        <ListItemText primary={item.key} />
        {item.value?.map(data => (
          <section>
            <img alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w200/${data.logo_path}`} style={{ width: 50, marginRight: 5 }} />
          </section>
        ))}
      </ListItem>
    } else {
      return <div style={{ marginLeft: 16 }}>
        <ListItemText primary={item.key} />
        <div>
          {item.value?.map(data => (
            <section>
              <Chip label={data.name} variant="outlined" style={{marginBottom: 6 }}/>
            </section>
          ))}
        </div>
      </div>
    }
  }
  return (
    <Container style={{ padding: '2rem' }}>
      <Paper elevation={0}>
        <Grid container>
          <Grid item xs={12} sm={6} md={4} key={movie.id}>
            <Box component="section" sx={{ p: 2 }}>
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
                style={{ width: '100%' }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <List sx={style}>
              {movieDetails?.map(item => !item?.isMultiple ? (
                <ListItem key={item.key}>
                  <ListItemText primary={item.key} secondary={item.value} />
                </ListItem>
              ) : renderItem(item))}
            </List>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default MovieDetails;
