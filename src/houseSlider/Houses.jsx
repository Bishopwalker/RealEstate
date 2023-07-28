import React, {useEffect, useState} from "react";
//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box} from "@mui/material";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchHousesbyMLS} from "../redux/agentListingsSlice.js";

const mlsIds = [112844, 113591, 113740, 113741, 113935];
function Service( ) {
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);
    useEffect(() => {
        console.log(houses);
        //    const mlsIds = [112844, 113591, 113740, 113741, 113935];
        dispatch(fetchHousesbyMLS(mlsIds));
    }, [dispatch]);

    console.log(houses);


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
        <Box>
            <Slider {...settings}>
                {  houses.data.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="card">
                        <div className="card-top">
                            <img src={result.primary_photo.href} alt="House" />
                            <h3>{`${result.location.address.line}, ${result.location.address.city}, ${result.location.address.state_code} ${result.location.address.postal_code}`}</h3>
                            <p>{result.branding[0].name}</p>
                            <p>Baths: {result.description.baths}</p>
                            <p>Full Baths: {result.description.baths_full}</p>
                            <p>Beds: {result.description.beds}</p>
                            <p>Garage: {result.description.garage}</p>
                            <p>Lot Sqft: {result.description.lot_sqft}</p>
                            <p>Sqft: {result.description.sqft}</p>
                            <p>Stories: {result.description.stories}</p>
                            <p>Type: {result.description.type}</p>
                            <p>Year Built: {result.description.year_built}</p>
                            <p>Last Update Date: {result.last_update_date}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </Box>
    );

}


Service.defaultProps = {
    houses: {
        data: {
            results: [],
        },
    },
};
export default Service;
