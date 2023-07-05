import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Typography from "@mui/material/Typography";
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import './style.css';
export default function VideoSlider() {
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
    const buttonClicked = () => {
        console.log("button clicked");
    }

    // Paths to your .mov files
    const videos = [
        {name:'/fishing.mp4',message:'Fishing'},
        {name:'/jetski.mp4',message: 'Jet Skiing'},
        {name:'/mov1.mp4',message: 'Crabbing'},
        {name:'/mov2.mp4',message: 'Kayaking'},
        {name:'/mov3.mp4',message: 'Sailing'},
    ];
    return (
        <Box style={{position: "relative"}}>
            <Slider {...settings}>
                {videos.map((video, index) => (
                    <div className="sliderCard" key={index}>
                        <video style={{width: "100%", height: "100%"}} controls>
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
                    fontSize: "40px",
                    color: "white",
                }}>
                  You Could be back in DC in 2 hours!
                </Typography>
                <Button
                    onClick={buttonClicked}
                    style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px 20px",
                    }}>
                    Find a Fine Home
                </Button>
            </div>
        </Box>
    );

}
