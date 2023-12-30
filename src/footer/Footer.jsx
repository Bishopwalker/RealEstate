import { Box, Grid, Typography, IconButton } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

import Modal from "@mui/material/Modal";
import PrivacyPolicy from "./PrivacyPolicy.jsx";

const Footer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const navItems = [
    { name: 'Home', url: '/' },
    { name: 'My Story', url: '/about' },
    { name: 'Properties', url: '/properties' },
    { name: 'Areas Served', url: '/cities' },
    { name: 'Reviews', url: '/review' },
    { name: 'Community Connection', url: '/community' },
    { name: 'Contact', url: '/contact' },
  ];

  return (
    <footer>
      <Box sx={{ backgroundColor: '#1e272e', color: 'white' }} pb={2} pt={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" textAlign="center" fontWeight={500} pb={1} sx={{fontFamily: 'Montserrat, sans-serif',}}>
              CONTACT US
            </Typography>
            <Typography variant="body1" textAlign="center" pb={1} sx={{fontFamily: 'Montserrat, sans-serif',}}>
              Email: DavidFines@gmail.com
            </Typography>
            <Typography variant="body1" textAlign="center" pb={1} sx={{fontFamily: 'Montserrat, sans-serif',}}>
              Phone: 202-297-8946
            </Typography>
            <Typography variant="body1" textAlign="center" sx={{fontFamily: 'Montserrat, sans-serif',}}>
              Address: 25 Sandy Street, Callao, VA 22435
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" textAlign="center" fontWeight={500} pb={1} sx={{fontFamily: 'Montserrat, sans-serif',}}>
              HOURS
            </Typography>
            <Typography variant="body1" textAlign="center" pb={1} sx={{fontFamily: 'Montserrat, sans-serif',}}>
              Monday - Friday: 7:00 AM - 5:00 PM
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="body1" textAlign="center" fontWeight={500} pb={1}>
              <Link to='https://www.zillow.com/profile/David-Fine/#reviews'>
                <img src='/Zillow.png' alt="Zillow" style={{ marginBottom: '0.5rem' }} />
              </Link>
            </Typography>
            <Typography variant="body1" textAlign="center">
              <Link to='https://www.facebook.com/davidfine52'>
                <IconButton sx={{ color: 'white', marginRight: '0.5rem' }}>
                  <FacebookIcon />
                </IconButton>
              </Link>
              <Link to='https://twitter.com/davidf52'>
                <IconButton sx={{ color: 'white', marginRight: '0.5rem' }}>
                  <TwitterIcon />
                </IconButton>
              </Link>
              <Link>
                <IconButton sx={{ color: 'white', marginRight: '0.5rem' }}>
                  <InstagramIcon />
                </IconButton>
              </Link>
            </Typography>
            <Typography onClick={openModal} variant="body1" textAlign="center" sx={{fontFamily: 'Montserrat, sans-serif',}}>
              Privacy Policy
            </Typography>
            <Modal open={isOpen} onClose={closeModal}>
              <div>
                <PrivacyPolicy closeModal={closeModal} />
              </div>
            </Modal>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ backgroundColor: '#1e272e', color: 'white' }} pb={1} pt={1}>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={6}>
            <Typography variant="body1" textAlign="center" sx={{ borderBottom: '2px solid white', paddingBottom: '0.5rem', fontFamily: 'Montserrat, sans-serif' }}>
              Quick Menu
            </Typography>
            {navItems.map((item, index) => (
              <Button
                key={index}
                component={Link}
                to={item.url}
                sx={{
                  color: 'white',
                  textDecoration: 'none',
                  fontFamily: 'Montserrat, sans-serif',
                  margin: '0.5rem',
                  '&:hover, &:focus': { backgroundColor: '#2c3e50' },
                  transition: 'background-color 0.3s ease',
                  borderRadius: '4px',
                }}
              >
                {item.name}
              </Button>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" textAlign="center" sx={{fontFamily: 'Montserrat, sans-serif',}}>
            © 2023 Salt Water Coder, LLC.
          </Typography>
        </Grid>
      </Box>
    </footer>
  );
};

export default Footer;

