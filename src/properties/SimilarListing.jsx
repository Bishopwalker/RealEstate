import React, {useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {useDispatch, useSelector} from 'react-redux';
import {fetchSimilarListing} from "../redux/similarListingSlice.js";
import Typography from "@mui/material/Typography";
import {Box, Button, Grid, useMediaQuery, useTheme} from "@mui/material";


const SimilarListing=({propertyID})=> {
    const dispatch = useDispatch()

    const [firstLoad, setFirstLoad] = useState(true);
    const themeInfo = useTheme();
    const isTabletOrBigger = useMediaQuery(themeInfo.breakpoints.up("md"));
    const [showMoreDetails, setShowMoreDetails] = useState(false);
    const typographyVariant = isTabletOrBigger ? "h4" : "h6";

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    vertical: false,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: true,
                },
            },
        ],
    };
    useEffect(() => {
        if (firstLoad) {
            window.scrollTo(0, 0);
            setFirstLoad(false);
        }
    }, [firstLoad]);
    const toggleDetails = () => {
        setShowMoreDetails(!showMoreDetails);
    };

    useEffect(() => {
        dispatch(fetchSimilarListing(propertyID))
    }, [dispatch]);

    const listing = useSelector((state) => state.similarListing);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    if (!listing) {
        return <div>Loading...</div>
    }
    console.log(listing, "listing")
    return (
        <Slider {...settings}>
            {listing.map((item) => (
                <Box
                    key={item.listing_id}
                    p={2}
                    border={1}
                    borderRadius={2}
                    sx={{
                        textAlign: isMobile ? 'center' : 'left',
                        height: '400px', // Set a fixed height
                        overflow: 'hidden', // Hide content that overflows the fixed height
                    }}
                >
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                        <img src={item.primary_photo.href} alt="Property" width="100%" />
                    </a>
                    <Typography variant={typographyVariant}>${item.list_price.toLocaleString()}</Typography>
                    <Typography variant="body1">{item.location.address.line}, {item.location.address.city}, {item.location.address.state_code}</Typography>
                    <Typography variant="body2">{item.description.baths} Baths, {item.description.beds} Beds</Typography>
                    <Typography variant="body2">{item.permalink}</Typography>
                    <Button variant="outlined" onClick={toggleDetails}>{showMoreDetails ? "View Less" : "View More"}</Button>
                    {showMoreDetails && (
                        <Box mt={2} p={2} bgcolor="background.paper" borderRadius={2}>
                            <Grid container spacing={2}>
                                <Grid item xs={6}><Typography variant="body2">Status:</Typography></Grid>
                                <Grid item xs={6}><Typography variant="body2">{item.status}</Typography></Grid>
                                <Grid item xs={6}><Typography variant="body2">Community:</Typography></Grid>
                                <Grid item xs={6}><Typography variant="body2">{item.community ? item.community : "N/A"}</Typography></Grid>
                                <Grid item xs={6}><Typography variant="body2">Sqft:</Typography></Grid>
                                <Grid item xs={6}><Typography variant="body2">{item.description.sqft ? item.description.sqft : "N/A"}</Typography></Grid>
                                <Grid item xs={6}><Typography variant="body2">Postal Code:</Typography></Grid>
                                <Grid item xs={6}><Typography variant="body2">{item.location.address.postal_code}</Typography></Grid>
                                {/* Add any other additional details you want to display here */}
                            </Grid>
                        </Box>
                    )}
                </Box>
            ))}
        </Slider>
    );
}
export default SimilarListing;