import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useSelector, useDispatch } from 'react-redux';
import {fetchHouses} from "../redux/fetchHousesSlice.js";

function Service() {
    const dispatch = useDispatch()

    const [city, setCity] = useState('Lottsburg');
    const [limit, setLimit] = useState(40);
    const houses = useSelector((state) => state && state.searchHome && state.searchHome.houses);
    const cities = ['Lottsburg', 'Callao', 'Burgaw', 'Warsaw', 'Reedville'];
    const limits = [10, 20, 30, 40, 50];

    useEffect(() => {
        dispatch(fetchHouses({ city, limit }));
    }, [city, limit, dispatch]);


    console.log(houses, 'houses')

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
        <Box minHeight='300px'  padding="20px" margin="auto" >
            <FormControl>
                <InputLabel id="city-label">City</InputLabel>
                <Select
                    labelId="city-label"
                    id="city-select"
                    value={city}
                    label="City"
                    onChange={(event) => setCity(event.target.value)}
                >
                    {cities.map((city, index) => (
                        <MenuItem key={index} value={city}>{city}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl>
                <InputLabel id="limit-label">Limit</InputLabel>
                <Select
                    labelId="limit-label"
                    id="limit-select"
                    value={limit}
                    label="Limit"
                    onChange={(event) => setLimit(event.target.value)}
                >
                    {limits.map((limit, index) => (
                        <MenuItem key={index} value={limit}>{limit}</MenuItem>
                    ))}
                </Select>
            </FormControl>

            <Slider {...settings}>
                {houses && houses.map((house, index) => (
                        <div key={index} className="card">
                            <div className="card-top">
                                <img src={house.primary_photo && house.primary_photo.href} alt="House" />
                                <h2>{parseInt(house.list_price) < 100000 ? "Only $" + house.list_price : "$" + house.list_price}</h2>

                                <h3>{house.location.address.line}, {house.location.address.city}, {house.location.address.state_code} {house.location.address.postal_code}</h3>
                                <p>{house.branding[0].name}</p>
                                <p>Baths: {house.description.baths}</p>
                                <p>Full Baths: {house.description.baths_full}</p>
                                <p>Beds: {house.description.beds}</p>
                                <p>Garage: {house.description.garage}</p>
                                <p>Lot Sqft: {house.description.lot_sqft}</p>
                                <p>Sqft: {house.description.sqft}</p>
                                <p>Stories: {house.description.stories}</p>
                                <p>Type: {house.description.type}</p>
                                <p>Year Built: {house.description.year_built}</p>
                                <p>Last Update Date: {house.last_update_date}</p>
                            </div>
                    </div>
                ))}
            </Slider>
        </Box>
    );
}

export default Service;
