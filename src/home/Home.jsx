import VideoSlider from "../videoSlider/VideoSlider.jsx";
import Houses from "../houseSlider/Houses.jsx";
import {Box} from "@mui/material";
import {Helmet} from "react-helmet";
import {useDispatch, useSelector} from 'react-redux';
import {fetchHousesbyMLS} from "../redux/agentListingsSlice.js";
import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import BusinessCard from "./BusinessCard.jsx";

const mlsIds = [112844, 113591, 113740, 113741, 113935];

export default function Home() {
    const [firstLoad, setFirstLoad] = useState(true);

    useEffect(() => {
        if (firstLoad) {
            window.scrollTo(0, 0);
            setFirstLoad(false);
        }
    }, [firstLoad]);


    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);
    useEffect(() => {
        console.log(houses);
    //    const mlsIds = [112844, 113591, 113740, 113741, 113935];
        dispatch(fetchHousesbyMLS(mlsIds));
    }, [dispatch]);



    return(
        <Box>
            <Helmet>
                <title>David Fine - Keller Williams Real Estate Agent</title>
                <meta name="description" content="David Fine is a real estate agent specializing in waterfront properties in Northumberland and Northern Neck, Virginia. He is a part of the Keller Williams team." />
                <meta name="keywords" content="David Fine, Keller Williams, Real Estate, Waterfront, Northumberland, Northern Neck, Virginia" />
                <meta name="author" content="David Fine" />
                <meta property="og:title" content="David Fine - Keller Williams Real Estate Agent" />
                <meta property="og:description" content="David Fine is a real estate agent specializing in waterfront properties in Northumberland and Northern Neck, Virginia. He is a part of the Keller Williams team." />
                <meta property="og:image" content="URL_TO_IMAGE" />
                <meta property="og:url" content="URL_TO_PAGE" />
            </Helmet>
            <VideoSlider/>
      <Typography
        variant="h4"
        sx={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          zIndex: 1,
          color: '#1E272E',
          marginTop: '3rem',
          marginBottom: '3rem',
      	  fontFamily: "'Montserrat', sans-serif",
        }}
      >
                My Exclusive Listings
      </Typography>
            <Houses houses={houses} />
            <BusinessCard/>
        </Box>

    );
}
