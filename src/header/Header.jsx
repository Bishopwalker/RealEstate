import React, { useState } from 'react';
import { AppBar, Toolbar, Box, Typography, IconButton, Drawer, List, ListItem, ListItemText, TextField, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import CircularProgress from '@mui/material/CircularProgress';
import NotFound from "../notFound/NotFound.jsx";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const [searchInput, setSearchInput] = useState('');
  const [property, setProperty] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'My Story', url: '/about' },
    { name: 'Properties', url: '/properties' },
    { name: 'Areas Served', url: '/cities' },
    { name: 'Reviews', url: '/review' },
    { name: 'Blog', url: '/blog' },
    { name: 'Contact', url: '/contact' },
  ];

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const closeModal = () => {
    setShowModal(false);
    setSearchInput('');
  };

  const fetchProduct = async (e) => {
    e.preventDefault();

    if (!searchInput) {
      return;
    }

    setLoading(true);

    try {
      const response = await axios.get(`http://localhost:5000/api/property-by-mls-id/${searchInput}`);
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

  return (
    <Box>
      <AppBar position="sticky" sx={{ backgroundColor: '#1e272e', boxShadow: 'none', fontFamily: 'Montserrat, sans-serif' }}>
        {showModal && <NotFound closeModal={closeModal} />}
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h4"
            component={Link}
            to="/"
            sx={{
			  fontFamily: "'Great Vibes', cursive",
              fontSize: '2rem',
              color: 'white',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            }}
          >
            David Fine
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

          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.url}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
				  fontFamily: 'Montserrat, sans-serif',
                  marginX: 2,
                  '&:hover, &:focus': { backgroundColor: '#2c3e50' },
                  transition: 'background-color 0.3s ease',
                  borderRadius: '4px',
                }}
              >
                {item.name}
              </Button>
            ))}
          </Box>

          <form onSubmit={fetchProduct} sx={{ display: 'flex', alignItems: 'center' }}>
      <TextField
        id="standard-basic"
        variant="outlined"
        className="searchInput"
        value={searchInput}
        onChange={handleSearchInputChange}
        placeholder="MLS #"
        sx={{
          backgroundColor: '#fff', // White background color for the search box
          fontFamily: 'Montserrat, sans-serif',
          color: '#1E272E',
          fontSize: '14px',
          borderRadius: '8px', // Rounded corners for the search box
          marginRight: '16px', // Add some spacing between the search box and the icon button
          '& .MuiInputBase-input': {
            fontFamily: 'Montserrat, sans-serif', // Set font-family for the input text
            '&::placeholder': {
              fontFamily: 'Montserrat, sans-serif', // Set font-family for the placeholder text
              color: '#1E272E', // Set placeholder text color (if needed)
            },
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'transparent', // Hide the border of the search box when not focused
            },
            '&:hover fieldset': {
              borderColor: 'transparent', // Hide the border of the search box on hover
            },
            '&.Mui-focused fieldset': {
              borderColor: 'transparent', // Hide the border of the search box when focused
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <IconButton type="submit">
              <SearchOutlinedIcon sx={{ fontSize: 28 }} />
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
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  '&:hover': { textDecoration: 'underline' },
                  '&:hover, &:focus': { backgroundColor: '#2c3e50' },
                  transition: 'background-color 0.3s ease',
                  borderRadius: '4px',
                }}
                onClick={() => setMobileMenuOpen(false)}
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

