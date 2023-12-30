import React, {useState} from 'react';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

const SmallMap = ({ lat, lon }) => {
    const mapStylesSmall = {
        height: '150px',
        width: '150px'
    };

    const mapStylesFull = {
        height: '75%',
        width: '75%'
    };

    const defaultCenter = {
        lat: lat,
        lng: lon
    };

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <LoadScript googleMapsApiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}>
            <GoogleMap
                mapContainerStyle={mapStylesSmall}
                zoom={13}
                center={defaultCenter}
                onClick={handleOpen}
            >
                <Marker position={defaultCenter} />
            </GoogleMap>
            <Modal open={open} onClose={handleClose}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'background.paper',
                    }}
                >
                    <GoogleMap
                        mapContainerStyle={mapStylesFull}
                        zoom={13}
                        center={defaultCenter}
                    >
                        <Marker position={defaultCenter} />
                    </GoogleMap>
                </Box>
            </Modal>
        </LoadScript>
    );
};

export default SmallMap;
