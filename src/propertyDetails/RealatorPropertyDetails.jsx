import React, {useEffect} from 'react';
import {Card, CardContent, CardMedia, Grid, List, ListItem, ListItemText, Typography} from "@mui/material";
import {fetchPropertyDetailRealator} from "../redux/realatorPropertyDetailSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router-dom";

const PropertyCard_Realator = () => {
    const dispatch = useDispatch();
const location = useLocation();
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
const pics = listing.data && listing.data.home.photos.map((pic,key) => {
    return (
        <CardMedia image={pic.href}/>
    )
})

    return (

        <Card style={{ maxWidth: '800px', margin: '20px auto' }}>
            <CardMedia
                style={{ height: '300px' }}
                image={data.primary_photo.href}
                title="Property Image"
            />
            <CardContent>

                <Typography variant="h5">{listing.data.home.location.address.line}, {listing.data.home.location.address.city}, {listing.data.home.location.address.state_code} {listing.data.home.location.address.postal_code}</Typography>
                <Typography variant="h6">Price: ${listing.data.home.list_price.toLocaleString()}</Typography>
                <Typography variant="body1">Description: {listing.data.home.description.text}</Typography>
                <Typography variant="body1">Year Built: {listing.data.home.description.year_built}</Typography>
                <Typography variant="body1">Property Type: {listing.data.home.description.type}</Typography>


                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Beds" secondary={listing.data.home.description.beds} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Baths" secondary={listing.data.home.description.baths} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Square Feet" secondary={listing.data.home.description.lot_sqft} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Square Feet" secondary={listing.data.home.description.sqft} />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <List>
                            <ListItem>
                                <ListItemText primary="Agent" secondary={'David Fine'} />
                            </ListItem>
                            <ListItem>

                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
};

export default PropertyCard_Realator;
