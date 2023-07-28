import React, {useEffect} from "react";
//@ts-ignore
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Box, Card, CardContent, CardMedia} from "@mui/material";
import "./style.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchHousesbyMLS} from "../redux/agentListingsSlice.js";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

const mlsIds = [112844, 113591, 113740, 113741, 113935];
function Service( ) {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const houses = useSelector((state) => state.houses);
    useEffect(() => {
        console.log(houses);
        //    const mlsIds = [112844, 113591, 113740, 113741, 113935];
        dispatch(fetchHousesbyMLS(mlsIds));
    }, [dispatch]);

    //console.log(houses[0].data.results[0]);


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
                {houses && houses.length > 0 && houses[0].data.results.length > 0 ? (
                    houses[0].data.results.map((property, index) => (
                        <Card key={index} component='div'  key={index} className="card" onClick={()=> navigate('/property-details', { state: { detail: houses[0].data.results } })}>
                            <CardMedia
                                component="img"
                                alt="Property Image"
                                height="140"
                                image={property.primary_photo.href}
                            />
                            <CardContent>
                                <Typography variant="h5" component="div">
                                    {property.location.address.line}, {property.location.address.city}, {property.location.address.state_code} {property.location.address.postal_code}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Price: ${property.list_price}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Status: {property.status}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Description: {property.description.type}
                                </Typography>
                                {property.branding.map((brand, i) => (
                                    <Typography key={i} variant="body2" color="text.secondary">
                                        Branding: {brand.name}
                                    </Typography>
                                ))}
                                <Typography variant="body2" color="text.secondary">
                                    Community: {property.community || "N/A"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Baths: {property.description.baths || "N/A"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lot Sqft: {property.description.lot_sqft || "N/A"}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    New Listing: {property.flags.is_new_listing ? "Yes" : "No"}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <div>Loading...</div>
                )}
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
