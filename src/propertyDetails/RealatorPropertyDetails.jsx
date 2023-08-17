import React, {useEffect} from 'react';
import {
    Box,
    Card,
    CardContent,
    CardMedia,
    Grid,
    List,
    ListItem,
    ListItemText,
    Typography,
    useMediaQuery,
    useTheme
} from "@mui/material";
import {fetchPropertyDetailRealator} from "../redux/realatorPropertyDetailSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";
import SimilarListing from "../properties/SimilarListing.jsx";
import G_Maps from "../googleMaps/G_Maps.jsx";
import RealatorSlider from "./RealatorSlider.jsx";

const PropertyCard_Realator = () => {




    const dispatch = useDispatch();
const location = useLocation();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    const data = location.state.detail
    let listing = useSelector((state) => state.realatorPropertyDetail);
    useEffect(() => {

            console.log(data, "data");
        if (data && data.property_id) {
            dispatch(fetchPropertyDetailRealator(data.property_id));
        }
    }, [data, dispatch]);



console.log(listing, "listing")
    if (!listing) {
        return <div>Loading...</div>;
    }


    return (
        <Box>
            <Card style={{ maxWidth: '800px', margin: '20px auto',height:"auto" }}>
                <CardMedia
                    style={{ height: '300px' }}
                    image={data.primary_photo.href}
                    title="Property Image"
                />

                <CardContent>
                    <Typography variant="h5">
                        {listing.data.home.location.address.line},{' '}
                        {listing.data.home.location.address.city},{' '}
                        {listing.data.home.location.address.state_code}{' '}
                        {listing.data.home.location.address.postal_code}
                    </Typography>

                    <Typography variant="h6">
                        Price: ${listing.data.home.list_price.toLocaleString()}
                    </Typography>
                    <Typography variant="body1">
                        Description: {listing.data.home.description.text}
                    </Typography>
                    <Typography variant="body1">
                        Year Built: {listing.data.home.description.year_built}
                    </Typography>
                    <Typography variant="body1">
                        Property Type: {listing.data.home.description.type}
                    </Typography>

                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <List>
                                <ListItem>
                                    <ListItemText
                                        primary="Beds"
                                        secondary={listing.data.home.description.beds}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Baths"
                                        secondary={listing.data.home.description.baths}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Square Feet"
                                        secondary={listing.data.home.description.lot_sqft}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary="Square Feet"
                                        secondary={listing.data.home.description.sqft}
                                    />
                                </ListItem>
                            </List>
                        </Grid>
                        <Grid item xs={2}>

                            <Typography variant="h4">Map:</Typography>
                            <G_Maps
                                lat={listing.data.home.location.address.coordinate.lat}
                                lon={listing.data.home.location.address.coordinate.lon}
                            />
                        </Grid>

                    </Grid>


                    <RealatorSlider photos={listing.data.home.photos} />
                </CardContent>
            </Card>
            <Grid
                container
                spacing={3}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    padding: '20px',
                }}
            >
                <Typography
                    variant="h3"
                    fontFamily={"'Great Vibes', cursive"}
                    sx={{ paddingTop: isMobile ? '40px' : '0px' }}
                >
                    Similar Homes
                </Typography>
                <Grid item xs={12}>
                    <SimilarListing propertyID={listing.data.home.property_id} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default PropertyCard_Realator;
