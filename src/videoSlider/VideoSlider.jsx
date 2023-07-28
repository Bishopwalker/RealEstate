import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Typography from "@mui/material/Typography";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './style.css';

export default function VideoSlider() {
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

    // Paths to your .mov files
    const videos = [
        { name: '/fishing.mp4', message: 'Fishing' },
        { name: '/jetski.mp4', message: 'Jet Skiing' },
        { name: '/mov1.mp4', message: 'Crabbing' },
        { name: '/mov2.mp4', message: 'Kayaking' },
        { name: '/mov3.mp4', message: 'Sailing' },
    ];

    const messages = [
        { short: 'Find A Fine Home!', long: 'The Northern Necks #1 Real Estate Agent since 1999!' },
        { short: 'Find A Fine Home!', long: 'Sit Back and Enjoy the Finer Things in Life!' },
        { short: 'Find A Fine Home!', long: 'How long before you forget about the beltway traffic?' },
        { short: 'Find A Fine Home!', long: 'You Could be back in DC in 2 hours!' },
        { short: 'Find A Fine Home!', long: 'Stripper, Flounder, and Cobia, oh my!' },
    ]

    const [currentSlide, setCurrentSlide] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide(prevSlide => (prevSlide + 1) % videos.length);
        }, 30000);
        return () => clearInterval(interval);
    }, []);

    return (
<Box style={{ position: "relative" }}>
            <Slider {...settings} afterChange={setCurrentSlide}>
                {videos.map((video, index) => (
                    <div className="sliderCard" key={index}>
                        <video style={{ width: "100%", height: "100%" }} controls>
                            <source src={video.name} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
            </Slider>
            <div style={{
                position: "absolute",
                top: "50px",
                left: "200px",
                textAlign: "left"
            }}>
                <Typography variant="h4" style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: isMobile ? "20px" : "33px",
                    color: "#2d3436",
                    fontWeight: "bold",
                }}>
                    {isMobile ? messages[currentSlide].short : messages[currentSlide].long}
                </Typography>
            </div>
            <div style={{
                position: "absolute",
                bottom: "100px",
                right: "100px",
            }}>
                <Button
                    onClick={() => console.log("button clicked")}
                    variant="contained"
                    style={{
                        marginTop: "10px",
                        fontFamily: 'Montserrat, sans-serif',
                        fontSize: isMobile ? "8px" : "16px",
                        color: "#dfe6e9",
						backgroundColor: "#2d3436",
                        padding: isMobile ? "5px 10px" : "8px 15px",
                        borderRadius: "10px",
                    }}>
                    <Typography variant="h5">
                        {isMobile ? "Find A Home!" : "Find A Fine Home Today!"} <ShoppingCartIcon/>
                    </Typography>
                </Button>
            </div>
        </Box>
    );
}


