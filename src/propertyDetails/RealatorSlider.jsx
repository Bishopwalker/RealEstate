import React from 'react';
import {Box, Card, CardContent, CardMedia} from '@mui/material';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Typography from "@mui/material/Typography";

const RealtorSlider = ({ photos }) => {
    // You can define the settings for the Slider here
    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true,
                },
            },
        ],
    };
console.log(photos, "photos")
    return (
        <Box>
            <Typography variant="h4" style={{ textAlign: 'center', margin: '20px 0' }}>
                Photos
                </Typography>
            <Slider {...settings}>
                {photos && photos.map((pic, key) => {
                    // Create a set to store unique labels
                    const uniqueLabels = new Set();
                    pic.tags.forEach(tag => uniqueLabels.add(tag.label));

                    return (
                        <Box key={key}>
                            <Card style={{ maxWidth: '250px', minHeight: '275px', margin: 'auto' }}>
                                <CardMedia style={{ height: '150px' }} image={pic.href} />
                                <CardContent>
                                    {Array.from(uniqueLabels).map((label, idx) => (
                                        <Typography key={idx} variant="body2" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                                            {label}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        </Box>
                    );
                })}
            </Slider>
        </Box>
    );
};

export default RealtorSlider;
