import React from 'react';

import {Box, Card, CardContent, CardHeader, CardMedia, Container, Divider, Grid, Typography,} from '@mui/material';
import {fetchReviews} from "../redux/reviewsSlice.js";
import {useDispatch, useSelector} from 'react-redux';
import Rating from '@mui/material/Rating';


const businessProfile = [
    { title: `Jeff's Insulation, Siding, and Windows`,img:'/golfCourse.jpg',
        website: 'https://via.placeholder.com/100', phone: '123-456-7890', email: 'jeff@whatever.com'},
    { title: "Northern Neck Garbage Collection", img:'/NNGC.LOGO.NW.svg', phone: '123-456-7890', email: 'bishop@northernneckgarbage.com'},
]



const businessComponent = businessProfile.map((businessProfile, index) => {
  return (
	<ThemeProvider theme={theme}>
    <Box key={index} padding={1} paddingTop={6} sx={{fontFamily: 'Montserrat, sans-serif',}}>
      <Grid item xs={12} md={4} >
        <Card sx={{
          minWidth: 300,
          maxWidth: 345,
		  fontFamily: 'Montserrat, sans-serif',
          boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
          borderRadius: '16px',
          transition: 'transform 0.3s ease-in-out',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        }}>
          <CardHeader
            title={businessProfile.title}
            sx={{
              background: '#2d3436',
              color: '#fff',
              padding: '12px 16px',
              borderTopLeftRadius: '16px',
		  	  fontFamily: 'Montserrat, sans-serif',
              borderTopRightRadius: '16px',
              fontWeight: 'bold',
              fontSize: '1.2rem',
            }}
          />
          <CardMedia
            component="img"
            height="150"
            image={businessProfile.img}
            alt="Paella dish"
            sx={{
              objectFit: 'cover',
              borderBottomLeftRadius: '16px',
		  fontFamily: 'Montserrat, sans-serif',
              borderBottomRightRadius: '16px',
            }}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Montserrat, sans-serif', color:'#111'	}}>
              Website: {businessProfile.website}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Montserrat, sans-serif', color: '#111'}}>
              Phone: {businessProfile.phone}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontFamily: 'Montserrat, sans-serif', color: '#111'}}>
              Email: {businessProfile.email}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Box>
</ThemeProvider>
  )
});

function Reviews() {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.reviews);

  React.useEffect(() => {
    dispatch(fetchReviews());

  }, [dispatch]);

  return (
<ThemeProvider theme={theme}>
    <Container maxWidth="lg">
      <Grid container spacing={4}>
        <Grid item xs={12} md={8}>
          <Box my={4} mx={2} paddingBottom={5}>
            <Typography
              variant="h3"
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginBottom: '3rem',
                spacing: 2,
                fontFamily: 'Montserrat, sans-serif',
              }}
            >
              Reviews
            </Typography>
            <Grid container spacing={4}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1, bgcolor: 'background.paper', justifyContent: 'center' }}>
                {reviews && reviews.value && reviews.value.map((review, index) => (
                  <Box key={index} sx={{ p: 1 }}>
                    <Card sx={{
                      maxWidth: 345,
                      boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
                      borderRadius: '16px',
                      transition: 'transform 0.3s ease-in-out',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}>
                      <CardHeader
                        title={review.ServiceProviderDesc}
                        sx={{
                          background: '#2d3436',
                          color: '#fff',
                          padding: '12px 16px',
                          borderTopLeftRadius: '16px',
		      			  fontFamily: 'Monospace, sans-serif',
                          borderTopRightRadius: '16px',
                          fontWeight: 'bold',
                          fontSize: '1.2rem',
                        }}
                      />
                      <Typography variant="body1" color="text.secondary" sx={{ padding: '10px 16px', fontFamily: 'Montserrat, sans-serif', }}>
                        Address: {review.FreeFormLocation}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ padding: '5px 16px', fontFamily: 'Montserrat, sans-serif', }}>
                        Date Purchased: {review.ReviewDate}
                      </Typography>
                      <Typography variant="body1" color="text.secondary" sx={{ padding: '5px 16px', fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', }}>
                        {review.ReviewerScreenName}
                      </Typography>
                      <CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', padding: '0px 45px', fontFamily: 'Montserrat, sans-serif', }}>
                          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', fontFamily: 'Montserrat, sans-serif', }}>
                            Rating:
                          </Typography>
                          <Rating name="read-only" value={review.Rating} precision={0.5} readOnly />
                          <Typography variant="subtitle1" component="span" sx={{ fontWeight: 'bold', marginLeft: '4px' , fontFamily: 'Montserrat, sans-serif',}}>
                            ({review.ServiceYear})
                          </Typography>
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ padding: '12px 16px', fontFamily: 'Montserrat, sans-serif', }}>
                          {review.Description}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Box>
                ))}
              </Box>
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          {/* This section will be on the right on desktop and at the bottom on smaller screens */}
          <Box my={4} mx={2}>
            <Typography variant="h5" sx={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 'bold' }}>
              Local Companies
            </Typography>
            <Divider />
            {businessComponent}
          </Box>
        </Grid>
      </Grid>
    </Container>
</ThemeProvider>
  );
}

export default Reviews;

