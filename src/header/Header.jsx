import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import {Link} from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from "@mui/icons-material/Mail";
import TextField from '@mui/material/TextField'; // Import TextField
import IconButton from "@mui/material/IconButton";

import {Navigate} from "react-router-dom";

import {useEffect, useState} from "react";
import axios from "axios";
import {SearchOutlined} from "@mui/icons-material"; // Import useState

const useStyles = makeStyles({
    button: {
        color: 'white',
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
            backgroundColor: '#333',
        },
        '&:hover, &:active': {
            cursor: 'pointer',
        },
    },
});

const Header = () => {
    const classes = useStyles();

    const [searchInput, setSearchInput] = useState(''); // State for search input
    const [propertyMLS, setPropertyMLS] = useState(null); // State for property MLS number
 const [property, setProperty] = useState({});
    const [showSearchField, setShowSearchField] = useState(false); // State for search field visibility

    const navItems = [
        { name: 'My Story', url: '/about' },
        { name: 'Properties', url: '/properties' },
        { name: 'Areas Served', url: '/cities' },
        { name: 'Developments', url: '/developments' },
        { name: 'Reviews', url: '/review' },
        { name: 'Contact Us', url: '/contact' },
    ];
console.log(searchInput)
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);

        console.log(searchInput)


    };


    const handleSearchIconClick = () => {
        setShowSearchField(!showSearchField); // Toggle search field visibility
    };




    const fetchProduct = async (e) => {
        e.preventDefault();

        if (!searchInput) {
            return;
    }
        try {
            const response = await axios.get(
                `http://localhost:5000/api/property-by-mls-id/${searchInput}`
            );
            console.log(response.data);
            setProperty(response.data);
        } catch (error) {
            console.log(error);
        }
    };

console.log(property)
    if (property.data) {
        return <Navigate to="/property-details" state={{ property: property }} />;
    }


    return (
        <AppBar position="sticky" sx={{ backgroundColor: 'black' }}>
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography
                    variant="h4"
                    component="span"
                    sx={{ fontFamily: "'Great Vibes', cursive", color: 'white' }}
                >
                    <Link to="/" className={classes.button}>
                        David Fine
                    </Link>
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', flexGrow: 1, mx: 8 }}>
                    {navItems.map((item, index) => (
                        <Button
                            key={index}
                            component={Link}
                            to={item.url}
                            className={classes.button}
                        >
                            {item.name}
                        </Button>
                    ))}
                    <form onSubmit={(e)=>fetchProduct(e)}>
                    <TextField

                         id="standard-bare"
                        variant="outlined"
                        onChange={handleSearchInputChange}
                         sx={{backgroundColor:'white', color:'red'}}
                        placeholder="Enter MLS #"
                        InputProps={{
                            endAdornment: (
                                <IconButton>
                                    <SearchOutlined />
                                </IconButton>
                            ),
                        }}
                    />
                    </form>
                </Box>

                <MailIcon />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
