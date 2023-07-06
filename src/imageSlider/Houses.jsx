import React, { useState } from "react";
//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./style.css";

function Service({ houses }) {
    const [defaultImage, setDefaultImage] = useState({
        linkDefault: "",
    });

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 4, // Number of slides to show on desktop
        slidesToScroll: 1, // Number of slides to scroll on desktop
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2, // Number of slides to show on tablet
                    slidesToScroll: 1, // Number of slides to scroll on tablet
                    vertical: false, // Disable vertical orientation
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3, // Number of slides to show on mobile
                    slidesToScroll: 1, // Number of slides to scroll on mobile
                    vertical: true, // Enable vertical orientation
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3, // Number of slides to show on smaller mobile
                    slidesToScroll: 1, // Number of slides to scroll on smaller mobile
                    vertical: true, // Enable vertical orientation
                },
            },
        ],
    };


    return (
        <div className="services">
            <Slider {...settings} className="slider-container">
                {houses.map((item, index) => (
                    <div
                        key={index}
                        className="card"
                    >
                        <div className="card-top">
                            <img
                                src={
                                    // @ts-ignore
                                    defaultImage[item.title] === item.title
                                        ? defaultImage.linkDefault
                                        : item.linkImg
                                }
                                alt={item.title}
                            />
                            <h1>{item.title}</h1>
                            <h3>{item.price}</h3>
                        </div>
                        <div className="card-bottom">
                            <span className="category">{item.services}</span>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Service;
