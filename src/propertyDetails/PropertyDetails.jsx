import React from 'react';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import {Box, Button, Grid, Modal, ThemeProvider} from '@mui/material';
import { createTheme } from '@mui/material/styles';
import MortgageCalculator from "../calculator/PaymentCalculator.jsx";

const PropertyDetails = () => {
    const location = useLocation();
    const property = location.state?.property;
    const data = property.data.results[0];
    const [viewMore, setViewMore] = React.useState(false);
    const [isOpen, setIsOpen] = React.useState(false);

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
        <img key={index} src={photo.href} style={{ width: '250px', height: '250px' }} alt="property" />
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

    return (
        <ThemeProvider theme={theme}>
            <Box>
                <Typography variant="h4" align="center">
                    {address}
                </Typography>
                <Typography variant="h5" align="center">
                    Listing Price: ${data.list_price}
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        {photos}
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button onClick={() => setViewMore(!viewMore)}>
                            {viewMore ? 'View Less' : 'View More'}
                        </Button>
                        {viewMore &&
                            propertyFields &&
                            propertyFields.map((field, index) => (
                                <Box key={index} marginBottom={2}>
                                    <Typography variant="subtitle1" color="textPrimary">
                                        {field.label}:
                                    </Typography>
                                    {typeof field.value === 'object' ? (
                                        <pre>{JSON.stringify(field.value, null, 2)}</pre>
                                    ) : (
                                        <Typography variant="body1" color="textSecondary">
                                            {field.value}
                                        </Typography>
                                    )}
                                </Box>
                            ))}
                        <Button onClick={openModal}>Calculate My Payment</Button>
                        <Modal open={isOpen} onClose={closeModal}>
                            {/* Wrap the contents inside a valid child element */}
                            <div>
                                {/* Mortgage calculator component */}
                                <MortgageCalculator closeModal={closeModal} />
                            </div>
                        </Modal>
                    </Grid>
                </Grid>
            </Box>
        </ThemeProvider>
    );
};
export default PropertyDetails;