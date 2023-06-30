import React from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Avatar } from '@mui/material';
import {cities} from './cities';
import {Link} from "react-router-dom";
const CityList = () => {
    return (
        <>
        <h1>Areas We Serve</h1>
        <List>
            {cities.map((city, index) => (
                <ListItem key={index}>
                    <ListItemIcon>
                        <Avatar>{city.url.substring(0, 1)}</Avatar>
                    </ListItemIcon>
                        <Link to={city.url}>
                    <ListItemText primary={city.name} secondary={city.url} />
                </Link>
                </ListItem>
            ))}
        </List>
        </>
    );
};

export default CityList;
