import React, {useEffect} from 'react';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import {Box, Button, Grid, Modal, ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import MortgageCalculator from "../calculator/PaymentCalculator.jsx";
import axios from "axios";
import Houses from "../imageSlider/Houses.jsx";
import ImageSlider from "./ImageSlider.jsx";


const PropertyDetails = () => {
    const location = useLocation();
    const property = location.state?.property;
    const data = property.data.results[0];
    const [viewMore, setViewMore] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [propertyDetail, setPropertyDetail] = React.useState(null);


    console.log("prop", propertyDetail)

    const fetchProductDeatils = async ( ) => {

        try {
            const response = await axios.get(`http://localhost:5000/api/property-detail/${data.property_id}`);
            console.log(response.data.data.property_detail);
            setPropertyDetail(response.data.data.property_detail);
        } catch (error) {
            console.log(error);
        }
    };

            useEffect(() => {
                fetchProductDeatils();

            }, [data]);

    const propertyFields = [
        { label: 'Branding', value: data.branding },
        { label: 'Community', value: data.community },
        { label: 'Description', value: data.description },
        { label: 'Flags', value: data.flags },
        { label: 'Last Update Date', value: data.last_update_date },
        { label: 'Lead Attributes', value: data.lead_attributes },
        { label: 'List Date', value: data.list_date },
        { label: 'List Price', value: data.list_price },
        { label: 'Listing ID', value: data.listing_id },
        { label: 'Location', value: data.location },
        { label: 'Matterport', value: data.matterport },
        { label: 'Open Houses', value: data.open_houses },
        { label: 'Other Listings', value: data.other_listings },
        { label: 'Permalink', value: data.permalink },
        { label: 'Photos', value: data.photos },
        { label: 'Price Reduced Amount', value: data.price_reduced_amount },
        { label: 'Primary Photo', value: data.primary_photo },
        { label: 'Products', value: data.products },
        { label: 'Property ID', value: data.property_id },
        { label: 'Source', value: data.source },
        { label: 'Status', value: data.status },
        { label: 'Tags', value: data.tags },
        { label: 'Virtual Tours', value: data.virtual_tours },
    ];
    const photos = data.photos.map((photo, index) => (
        <div
            key={index}
           >
            <div >
                <img
                    style={{ width: '100px', height: '100px' }}
                    src={photo.href}
                    alt={photo.tags.label}
                />
                <h1>{photo.tags.label}</h1>
            </div>
            <div className="card-bottom">
                <span className="category">{photo.services}</span>
            </div>
        </div>

    ));

    const address =
        data.location.address.line +
        ' ' +
        data.location.address.city +
        ' ' +
        data.location.address.state_code +
        ' ' +
        data.location.address.postal_code;

    const theme = createTheme(); // Create a theme object

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    const features = {
        baths: 2,
        baths_1qtr: null,
        baths_3qtr: null,
        baths_full: 2,
        baths_half: null,
        beds: 4,
        garage: null,
        lot_sqft: 73616,
        name: null,
        sold_price: 460000,
        sqft: 1872,
        stories: 2,
        sub_type: null,
        type: "single_family",
        year_built: 1898
    };
    const amenities = [
        'community_boat_facilities',
        'community_outdoor_space',
        'family_room',
        'fireplace',
        'hardwood_floors',
        'recreation_facilities',
        'river_view',
        'view',
        'washer_dryer',
        'water_view',
        'two_or_more_stories',
        'waterfront',
        'golf_course',
        'views',
        'medicalcare',
        'shopping',
    ];
    const amenitiesList = Object.values(amenities).map((key, index) => (
        <div key={index}>
            <Typography variant="heading" align="center">
                {key}
            </Typography>

            <Typography variant="subtitle1" align="center">
                {features[key]}
            </Typography>
        </div>
    ));

    const featuresList = Object.keys(features).map((key, index) => (
        <div key={index}>
            <Typography variant="h6" align="center">
                {key + ':'}
            </Typography>

            <Typography variant="subHeading" align="center">
                { features[key]==null?'N/A':features[key]}
            </Typography>
        </div>
    ));
    return (
        <ThemeProvider theme={theme}>
                   <Box sx={{
                       "background-color": "#232222",
                          "color": "#fff",
                   }}>
                <Typography variant="h4" align="center">
                    {address}
                </Typography>
                <Typography variant="h5" align="center">
                    Listing Price: ${data.list_price}
                </Typography>
                       <Button onClick={openModal}>Calculate My Payment</Button>
                       <Modal open={isOpen} onClose={closeModal}>
                           {/* Wrap the contents inside a valid child element */}
                           <div>
                               {/* Mortgage calculator component */}
                               <MortgageCalculator homePrice={data.list_price} closeModal={closeModal} />
                           </div>
                       </Modal>
                <Grid item xs={12} md={6}>
                    <div
                        className="card_details">
                        <div >
                            <img
                                style={{ width: '500px', height: '500px' }}
                                src={data.primary_photo.href}
                                alt={data.tags.label}
                            />
                            <h1>{data.tags.label}</h1>
                        </div>
                        <div style={{
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"space-evenly",
                            flexWrap:"wrap"

                        }}>
                        {photos}
                    </div>
                        <Typography className="card-bottom" variant="h6">
                            Lot Size : {data.description.lot_sqft} (sqft)
                        </Typography>
                        <Typography className="card-bottom" variant="h6">
                            Property Overview : {featuresList}
                        </Typography>
                        <Typography className="card-bottom" variant="h6">
                            Property Features : {amenitiesList}
                        </Typography>
                    </div>
                </Grid>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <ImageSlider   images={!PropertyDetails.photos? data.photos:propertyDetail.photos} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => setViewMore(!viewMore)}>
                            {viewMore ? 'View Less' : 'View More'}
                        </Button>
                        {viewMore &&
                            propertyFields &&
                            propertyFields.map((field, index) => (
                                <Box key={index} marginBottom={2}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} md={4}>
                                            <Typography variant="h6" color="white">
                                                {field.label}:
                                            </Typography>
                                        </Grid>
                                        {field.value && typeof field.value === 'object' ? (
                                            Object.keys(field.value).map((key, i) => (
                                                <Grid container spacing={2} key={i}>
                                                    <Grid item xs={6} md={4}>
                                                        <Typography variant="subtitle1" color="white">
                                                            {key}:
                                                        </Typography>
                                                    </Grid>
                                                    <Grid item xs={6} md={4}>
                                                        <Typography variant="body1" color="white">
                                                            {field.value[key]}
                                                        </Typography>
                                                    </Grid>
                                                </Grid>
                                            ))
                                        ) : (
                                            <Grid item xs={12} md={8}>
                                                <Typography variant="body1" color="white">
                                                    {field.value}
                                                </Typography>
                                            </Grid>
                                        )}
                                    </Grid>
                                </Box>
                            ))}


                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};
export default PropertyDetails;