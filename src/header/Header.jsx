import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { Link,Navigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';

import { useEffect, useState } from 'react';
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

    const [searchInput, setSearchInput] = useState('');
    const [propertyMLS, setPropertyMLS] = useState(null);
    const [property, setProperty] = useState({});
    const [showSearchField, setShowSearchField] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navItems = [
        { name: 'My Story', url: '/about' },
        { name: 'Properties', url: '/properties' },
        { name: 'Areas Served', url: '/cities' },
        { name: 'Developments', url: '/developments' },
        { name: 'Reviews', url: '/review' },
        { name: 'Contact Us', url: '/contact' },
    ];

    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value);
    };

    const handleSearchIconClick = () => {
        setShowSearchField(!showSearchField);
    };

    const fetchProduct = async (e) => {
        e.preventDefault();

        if (!searchInput) {
            return;
        }

        try {
            const response = await axios.get(`http://localhost:5000/api/property-by-mls-id/${searchInput}`);
            console.log(response.data);
            setProperty(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    if (property.data) {
        return <Navigate to="/property-details" state={{ property: property }} />;
    }

    return (
        <Box>
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
                            display: 'flex',
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
