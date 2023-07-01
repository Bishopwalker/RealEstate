import React from 'react';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import {Box} from "@mui/material";

const PropertyDetails = () => {
    const location = useLocation();
    const property = location.state?.property;

    console.log(property.data.property_detail);

    const photos = property.data.property_detail.photos.map((photo) => {
        return (
            <img src={photo} alt="property"/>
        )
    })

        return (
            <div>
                {photos}
            </div>
        )
    }

export default PropertyDetails;
