import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Typography from "@mui/material/Typography";
export default function VideoSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    // Paths to your .mov files
    const videos = [
       '/mov.mp4',
        '/mov1.mp4',
        '/mov2.mp4',
        '/mov3.mp4',
    ];
    return (
        <div style={{position: "relative"}}>
            <Slider {...settings}>
                {videos.map((video, index) => (
                    <div key={index}>
                        <video style={{width: "90vw", height: "90vh"}} controls>
                            <source src={video} type="video/mp4" />
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
                    The Leader in Luxury Waterfront Real Estate
                </Typography>
                <button
                    style={{
                        marginTop: "10px",
                        fontSize: "20px",
                        backgroundColor: "black",
                        color: "white",
                        padding: "15px 20px",
                    }}>
                    Find a Fine Home
                </button>
            </div>
        </div>
    );

}
