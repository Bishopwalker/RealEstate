import React from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const SmallMap = ({ lat, lon }) => {
    const mapStyles = {
        height: '150px',
        width: '150px'
    };
console.log(lat, lon, "SmallMap")
    const defaultCenter = {
        lat: lat,
        lng: lon
    };

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={13}
                center={defaultCenter}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
        </LoadScript>
    );
};

export default SmallMap;
