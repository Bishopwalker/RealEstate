import React from 'react';
import {
    Box, Card, CardContent, CardHeader,
    CardMedia, Container, Grid, Typography,Divider,Rating
} from '@mui/material';

const data = [
    { title: 'He could date my momma',  rating: 4.5, reviewCount:5.0, img: 'https://via.placeholder.com/100', body: 'Some text for card 2' },
    { title: `I didn't even know he was Jewish until he gave me the price!`, rating: 4.5, reviewCount:4.5, img: 'https://via.placeholder.com/100', body: 'Some text for card 3' },
    { title: 'Highly likely to recommend', rating: 4.0, reviewCount:4, img: 'https://via.placeholder.com/100', body: 'Some text for card 4' },
    { title: 'Highly likely to recommend',  rating: 4.5,reviewCount:4.5, img: 'https://via.placeholder.com/100', body: 'Some text for card 5' },
    { title: 'Highly likely to recommend',  rating: 4.5,reviewCount:5, img: 'https://via.placeholder.com/100', body: 'Some text for card 6' },
    { title: 'Highly likely to recommend',  rating: 4.5,reviewCount:5, img: 'https://via.placeholder.com/100', body: 'Some text for card 7' },
    { title: 'Highly likely to recommend',  rating: 4.5,reviewCount:5, img: 'https://via.placeholder.com/100', body: 'Some text for card 8' },
];

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
                                {data.map((agent, index) => (
                                    <Box key={index} sx={{ p: 1 }}>
                                        <Card sx={{ maxWidth: 345 }}>
                                            <CardContent>
                                                <Typography variant="h5" component="div">
                                                    {agent.title}
                                                </Typography>
                                                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                    <Rating name="read-only" value={agent.rating} readOnly />
                                                    <Typography variant="subtitle1" component="span">
                                                        ({agent.reviewCount})
                                                    </Typography>
                                                </Box>
                                                <Typography variant="body2" color="text.secondary">
                                                    {agent.body}
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