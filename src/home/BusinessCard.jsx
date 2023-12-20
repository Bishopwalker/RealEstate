import React from 'react';
import { Card, CardHeader, CardMedia, Typography, Box, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  cardHeader: {
	color: '#fff',
    backgroundColor: '#1e272e',
    borderBottom: '1px solid white',
    '& .MuiCardHeader-title': {
      fontSize: '2rem',
      fontFamily: "'Montserrat', sans-serif",
      marginBottom: '1rem',
    },
    '& .MuiCardHeader-subheader': {
      color: '#f39c12',
      fontSize: '1.2rem',
      fontFamily: "'Montserrat', sans-serif",
    },
  },
  card: {
    width: '100%',
    borderRadius: '16px',
    backgroundColor: '#2c3e50',
    color: 'white',
    fontFamily: "'Montserrat', sans-serif",
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    marginBottom: '2rem',
  },
  cardMedia: {
    borderRadius: '16px',
    objectFit: 'cover',
  },
}));

const BusinessCard = () => {
  const classes = useStyles();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60vh',
        backgroundColor: '#282f36',
        padding: '3rem 0',
      }}
    >
      <Typography
        variant="h1"
        sx={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          zIndex: 1,
          color: 'white',
          textShadow: '2px 2px 4px #000000',
          marginBottom: '3rem',
      	  fontFamily: "'Montserrat', sans-serif",
        }}
      >
        Meet The Agent
      </Typography>

      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={2}></Grid>
        <Grid item xs={12} sm={3}>
          <Card className={classes.card}>
            <CardHeader
              title="Title Placeholder"
              subheader="Real Estate Agent"
              className={classes.cardHeader}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={1}></Grid>
        <Grid item xs={12} sm={3}>
          <CardMedia
            component="img"
            height="300"
            image="/david_photo.jpg"
            alt="David"
            className={classes.cardMedia}
          />
        </Grid>
        <Grid item xs={12} sm={2}></Grid>
      </Grid>
    </Box>
  );
};

export default BusinessCard;

