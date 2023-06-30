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
        {name:'/fishing.mp4',message:'Fishing'},
        {name:'/jetski.mp4',message: 'Jet Skiing'},
        {name:'/mov1.mp4',message: 'Crabbing'},
        {name:'/mov2.mp4',message: 'Kayaking'},
        {name:'/mov3.mp4',message: 'Sailing'},
    ];
    return (
        <div style={{position: "relative"}}>
            <Slider {...settings}>
                {videos.map((video, index) => (
                    <div key={index}>
                        <video style={{width: "100vw", height: "95vh"}} controls>
                            <source src={video.name} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                ))}
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
