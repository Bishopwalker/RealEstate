import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import NotFound from "../notFound/NotFound.jsx";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchOutlined } from '@mui/icons-material';

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
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState('');
    const [propertyMLS, setPropertyMLS] = useState(null);
    const [property, setProperty] = useState({});
    const [showSearchField, setShowSearchField] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isOpen, setIsOpen] = React.useState(false);
    const [showModal, setShowModal] = useState(false); // add this line

    const navItems = [
        { name: 'My Story', url: '/about' },
        { name: 'Properties', url: '/properties' },
        { name: 'Areas Served', url: '/cities' },
        { name: 'Reviews', url: '/review' },
        { name: 'Community News', url: '/community' },
        { name: 'Contact', url: '/contact' },
    ];

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const openModal = () => {
        setIsOpen(true);
    };

    useEffect(() => {
        if (property.data) {
            navigate('/property-details', { state: { property: property } });
        }
    }, [property, navigate]);

    const closeModal = () => {
        setShowModal(false); // close NotFoundPage modal
        setSearchInput(''); // clear search input
        navigate('/'); // navigate to home page
    };

    const [loading, setLoading] = useState(false);

    const fetchProduct = async (e) => {
        e.preventDefault();

        if (!searchInput) {
            return;
        }

        setLoading(true); // start loading

        try {
            const response = await axios.get(`http://localhost:5000/api/property-by-mls-id/${searchInput}`);
            console.log(response.data);
            if (response.data) {
                navigate('/property-details', { state: { property: response.data } });
            } else {
                setShowModal(true); // show NotFoundPage modal when property does not exist
            }
        } catch (error) {
            console.log(error);
            setShowModal(true); // show NotFoundPage modal when an error occurs
        }

        setLoading(false); // end loading
    };







    if (!loading && property.data) {
        return <Navigate to="/property-details" state={{ property: property }} />;
    }

    return (
        <Box>
            {showModal && <NotFound closeModal={closeModal} />}
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

                    {/* Mobile Menu */}
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setMobileMenuOpen(true)}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Desktop Menu */}
                    <Box
                        sx={{
                            justifyContent: 'space-between',
                            flexGrow: 1,
                            mx: 8,
                            display: { xs: 'none', md: 'flex' },
                        }}
                    >
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

                        <MailIcon />
                    </Box>
                    <form onSubmit={fetchProduct}>
                        <TextField
                            id="standard-bare"
                            variant="outlined"
                            onChange={handleSearchInputChange}
                            sx={{ backgroundColor: 'white', color: 'red' }}
                            placeholder="MLS #"
                            InputProps={{
                                endAdornment: (
                                    <IconButton>
                                        <SearchOutlined />
                                    </IconButton>
                                ),
                            }}
                        />
                    </form>

                </Toolbar>
            </AppBar>

            {/* Mobile Drawer */}
            <Drawer
                anchor="left"
                open={mobileMenuOpen}
                onClose={() => setMobileMenuOpen(false)}
            >
                <Box sx={{ width: 250 }} onClick={() => setMobileMenuOpen(false)}>
                    <List>
                        {navItems.map((item, index) => (
                            <ListItem
                                key={index}

                                component={Link}
                                to={item.url}
                                className={classes.button}
                            >
                                <ListItemText primary={item.name} />
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Drawer>
        </Box>
    );
};

export default Header;
