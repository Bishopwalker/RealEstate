import React from 'react';
import {
    Box, Card, CardContent, CardHeader,
    CardMedia, Container, Grid, Typography,Divider,
} from '@mui/material';
import {fetchReviews} from "../redux/reviewsSlice.js";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Rating from '@mui/material/Rating';



const businessProfile = [
    { title: `Jeff's Insulation, Siding, and Windows`,img:'public/golfCourse.jpg',
        website: 'https://via.placeholder.com/100', phone: '123-456-7890', email: 'jeff@whatever.com'},
    { title: "Northern Neck Garbage Collection", img:'public/NNGC.LOGO.NW.svg', phone: '123-456-7890', email: 'bishop@northernneckgarbage.com'},
]

const businessComponent= businessProfile.map((businessProfile,index) =>{
    return(
        <Box key={index}  padding={1}  paddingTop={6} >
        <Grid  item xs={12} md={4} >
            <Card sx={{ minWidth: 300,maxHeight:400 }}>
                <CardHeader title={businessProfile.title} />
                <CardMedia
                    component="img"
                    height="150"
                    image={businessProfile.img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        Website: {businessProfile.website}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Phone: {businessProfile.phone}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Email: {businessProfile.email}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
        </Box>
    )
})


function Reviews() {
    const dispatch = useDispatch();
    const reviews = useSelector((state) => state.reviews);

    React.useEffect(() => {
        dispatch(fetchReviews());

    }, [dispatch]);
    console.log('reviews',reviews.value)
    return (
        <Container maxWidth="lg">
            <Grid container spacing={4}>
                            <Grid item xs={12} md={8}>

                    <Box my={4} mx={2} paddingBottom={5}>
                        <Typography sx={{
                            textAlign: 'center',
                            fontWeight: 'bold',
                            marginBottom: '1rem',
                            spacing: 2,


                        }}
                            variant="h2">Reviews</Typography>
                        <Grid container spacing={4}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', p: 1, m: 1, bgcolor: 'background.paper', justifyContent: 'center' }}>
                                {reviews&& reviews.value && reviews.value.map((review, index) => (
                                    <Box key={index} sx={{ p: 1 }}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    {review.ReviewerScreenName}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Rating name="read-only" value={review.Rating} precision={0.5} readOnly />
                                                    <Typography variant="subtitle1" component="span">
                                                        ({review.ServiceYear})
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" color="text.secondary">
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
                <Grid item xs={12} md={3}>
                    {/* This section will be on the right on desktop and at the bottom on smaller screens */}
                    <Box my={4} mx={2}>
                        <Typography variant="h5">Local Companies</Typography>
                        <Divider />
                         {businessComponent}
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
export default Reviews;