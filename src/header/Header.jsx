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
import CircularProgress from '@mui/material/CircularProgress';

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
    const [property, setProperty] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Added this line


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
        console.log(searchInput)

    };
    console.log(searchInput)
    const closeModal = () => {
        setShowModal(false);
        setSearchInput('');
    };

    const fetchProduct = async (e) => {
        e.preventDefault();

        if (!searchInput) {
            console.log('test')
            return;
        }


        setLoading(true);

        try {
            const response = await axios.get(`http://localhost:5000/api/property-by-mls-id/${searchInput}`);
                console.log(response.data.data);
            if (response.data.data.count !== null) {
                setProperty(response.data);
            } else {
                setShowModal(true);
            }
        } catch (error) {
            setShowModal(true);
        }

        setLoading(false);
    };

    useEffect(() => {
        if (property.data) {
            navigate('/property-details', { state: { property: property } });
        }
    }, [property ]);

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

                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        onClick={() => setMobileMenuOpen(true)}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>

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

            {loading && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                    }}
                >
                    <CircularProgress />
                    <Typography variant="h6" component="div" sx={{ ml: 2 }}>
                        Loading property data...
                    </Typography>
                </Box>
            )}
        </Box>
    );
};

export default Header;

