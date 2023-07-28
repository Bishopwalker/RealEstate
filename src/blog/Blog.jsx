import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container, Grid, Typography, Card, CardContent, CardHeader, CardMedia } from '@mui/material';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

const blogPosts = [
  {
    title: 'Curabitur eget',
    date: 'August 20, 2023',
    image: 'https://place-hold.it/200x200',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title: 'Praesent eu',
    date: 'August 22, 2023',
    image: 'https://place-hold.it/200x200',
    content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    title: 'Nam posuere',
    date: 'August 25, 2023',
    image: 'https://place-hold.it/200x200',
    content: 'Nulla accumsan malesuada est ornare scelerisque. Vestibulum rutrum ante vitae mauris elementum ultricies',
  },
];

const Blog = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ padding: '40px 0' }}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            fontWeight: 'bold',
            margin: '0rem 0 2rem 0',
            color: '#2d3436',
            fontFamily: 'Montserrat, sans-serif',
          }}
        >
          Blog
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {blogPosts.map((post, index) => (
            <Grid key={index} item xs={12} sm={6} md={4}>
              <Card
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  height: '100%',
                  borderRadius: '16px',
                  boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)',
                  },
                }}
              >
                <CardHeader
                  title={post.title}
                  sx={{
                    background: '#2d3436',
                    color: '#fff',
                    padding: '12px 16px',
                    borderTopLeftRadius: '16px',
                    borderTopRightRadius: '16px',
                    fontWeight: 'bold',
                    fontSize: '1.2rem',
                  }}
                />
                <CardMedia
                  component="img"
                  height="150"
                  image={post.image}
                  alt="Blog Post Image"
                  sx={{
                    objectFit: 'cover',
                    borderBottomLeftRadius: '16px',
                    borderBottomRightRadius: '16px',
                  }}
                />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" color="text.secondary">
                    {post.date}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ paddingTop: '12px', flexGrow: 1 }}>
                    {post.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Blog;

