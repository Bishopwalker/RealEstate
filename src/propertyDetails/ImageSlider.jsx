import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Typography from "@mui/material/Typography";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import '../imageSlider/style.css';

export default function ImageSlider({images,features}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 30000,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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


    // {images.map((photo, index) => (
    //     <div className="sliderCard" key={index}>
    //         <img style={{ width: "100%", height: "100%" }}
    //              src={photo.href}  alt={photo.tags.label}
    //         />
    //         <Typography variant="h6" >
    //             {photo.tags.label}
    //             Test words
    //         </Typography>
    //     </div>
    // ))}
    return (
        <Box>
            <Slider {...settings}>
                {images.map((photo, index) => (
                    <div
                        key={index}
                        className="card"
                    >
                        <div className="card-top">
                            <img
                                src={photo.href}  alt={photo.tags.label}
                            />
                            <h3>{photo.tags.label}</h3>

                        </div>

                    </div>
                ))}
            </Slider>

        </Box>
    );
}
