import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Typography from "@mui/material/Typography";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import Button from "@mui/material/Button";
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

    return (
        <Box style={{ position: "relative" }}>
            <Slider {...settings}>
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
                bottom: "100px",
                left: "200px",
                textAlign: "left"
            }}>
                <Typography variant="h4" style={{
                    fontSize: isMobile ? "30px" : "40px",
                    color: "white",
                }}>
                    You Could be back in DC in 2 hours!
                </Typography>
                <Button
                    onClick={() => console.log("button clicked")}
                    style={{
                        marginTop: "10px",
                        fontSize: isMobile ? "16px" : "20px",
                        backgroundColor: "black",
                        color: "white",
                        padding: isMobile ? "10px 20px" : "15px 30px",
                        borderRadius: "5px",
                    }}>
                    Find a Fine Home
                </Button>
            </div>
        </Box>
    );
}
