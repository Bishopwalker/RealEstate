import React from 'react';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';
import {Box} from "@mui/material";

const PropertyDetails = () => {
    const location = useLocation();
    const property = location.state?.property;

    console.log(property.data.property_detail);
const data = property.data.results[0]
    const photos =  data.photos.map((photo,index) => {
        return (
            <img src={photo.href} style={{width: "250px", height: "250px"}} alt="property"/>
        )
    })

const address = data.location.address.line + " " + data.location.address.city + " " + data.location.address.state_code + " " + data.location.address.postal_code;

        return (
            <div>
                <Typography variant="h4" align="center">
                    {address}
                </Typography>
                {photos}
            </div>
        )
    }

export default PropertyDetails;
