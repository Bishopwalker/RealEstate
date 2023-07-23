import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import { Box, useTheme, useMediaQuery } from "@mui/material";
import '../houseSlider/style.css';

import { useSelector } from 'react-redux';

export default function ImageSlider({  }) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const propertyDetail = useSelector(state => state.propertyDetail);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 30000,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 0,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

console.log(propertyDetail);

    return (
        <Box width="90%" sx={{
            margin: 'auto',

        }} >
            <Slider {...settings} >
                {propertyDetail.photos && propertyDetail.photos.map((photo, index) => (
                    <div
                        key={index}
                        className="card"

                    >
                        <div className="card-top">
                            <img
                                src={photo.href}  alt={photo.tags.label}
                            />
                            <p>{propertyDetail.search_tags && propertyDetail.search_tags[index % propertyDetail.search_tags.length]}</p>
                            <h3>Description</h3>

                        </div>
                    </div>
                ))}
            </Slider>

        </Box>
    );
}
