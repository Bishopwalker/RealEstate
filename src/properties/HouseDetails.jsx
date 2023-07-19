import {useLocation} from "react-router-dom";
import {Box, Button, Grid, Modal, ThemeProvider, useMediaQuery, useTheme} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {fetchPropertyDetail} from "../redux/propertyDetailSlice.js";
import {createTheme} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MortgageCalculator from "../calculator/PaymentCalculator.jsx";
import ImageSlider from "../propertyDetails/ImageSlider.jsx";

const PropertyDetails = () => {

    const location = useLocation();
    const themeInfo = useTheme();
    const isTabletOrBigger = useMediaQuery(themeInfo.breakpoints.up("md"));

    const typographyVariant = isTabletOrBigger ? "h4" : "h6";

    const data = location.state?.detail;




  //  const data = property && property.data ? property.data.results[0] : null;
    const dispatch = useDispatch();
    console.log(data)

    const propertyDetail = useSelector(state => state.propertyDetail);

    useEffect(() => {
        if (data) {
            dispatch(fetchPropertyDetail(data.property_id));
        }
    }, [data, dispatch]);


    const [viewMore, setViewMore] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);


    if (!propertyDetail) {
        // Handle the case where data is undefined or null
        // For example, you could return a loading spinner or a message to the user
        return <div>Loading...</div>;
    }

    console.log("prop", propertyDetail)





    const propertyFields = data ? [
        { label: 'Branding', value: data.branding },
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
    ] : [];

    const photos = propertyDetail ? propertyDetail.photos : [];

    // Now, map over the photos array. If data was undefined, this will just map over an empty array, so no photos will be displayed, but it also won't cause an error.
    const photoElements = photos.map((photo, index) => (
        <div key={index}>
            <div>
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
    const featuresList = Object.keys(features).map((key, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <div>
                <Typography variant="h6" align="center" style={{ textDecoration: 'underline' }}>
                    {key + ':'}
                </Typography>

                <Typography variant="subHeading" align="center">
                    {features[key] == null ? 'N/A' : features[key]}
                </Typography>
            </div>
        </Grid>
    ));

    const amenitiesList = Object.values(amenities).map((key, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
            <div>
                <Typography variant="h6" align="center" style={{ textDecoration: 'underline' }}>
                    {key}
                </Typography>

                <Typography variant="subHeading" align="center">
                    {features[key]}
                </Typography>
            </div>
        </Grid>
    ));

    return (
        <ThemeProvider theme={theme}>
            {propertyDetail && (
                <Box sx={{
                    "backgroundColor": "#232222",
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
                                <h1>Description</h1>
                                <Typography variant="h6" align="center" fontFamily="cursive">
                                    <p> {propertyDetail.prop_common && propertyDetail.prop_common.description} </p>
                                </Typography>
                            </div>
                            <div style={{
                                display:"flex",
                                flexDirection:"row",
                                justifyContent:"space-evenly",
                                flexWrap:"wrap"

                            }}>
                                {photoElements}
                            </div>
                            <Typography className="card-bottom" variant="h6">
                                Lot Size : {data.description.lot_sqft} (sqft)
                            </Typography>
                            <Typography  variant={typographyVariant} fontFamily="Cursive" padding="10px" className="card-bottom"   >
                                About this Property :
                            </Typography>
                            <Grid container spacing={2}>
                                {featuresList}
                            </Grid>

                            <Typography variant={typographyVariant} fontFamily="Cursive" padding="20px" >
                                Property Features:
                            </Typography>
                            <Grid container spacing={2}>
                                {amenitiesList}
                            </Grid>

                        </div>
                    </Grid>
                    <Button onClick={() => setViewMore(!viewMore)}>
                        {viewMore ? 'View Less' : 'View More'}
                    </Button>
                    <Grid container spacing={2}>

                        <Grid item xs={12}   >
                            <ImageSlider propertyDetail={propertyDetail}   images={!PropertyDetails.photos? data.photos:propertyDetail.photos} />
                        </Grid>
                        <Grid item xs={12} md={6}>
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
                                                                {String(field.value[key])} {/* Convert value to string */}
                                                            </Typography>
                                                        </Grid>
                                                    </Grid>
                                                ))
                                            ) : (
                                                <Grid item xs={12} md={8}>
                                                    <Typography variant="body1" color="white">
                                                        {String(field.value)} {/* Convert value to string */}
                                                    </Typography>
                                                </Grid>
                                            )}
                                        </Grid>
                                    </Box>
                                ))}


                        </Grid>
                    </Grid>
                </Box>
            )}
        </ThemeProvider>

    );
}
export default PropertyDetails;