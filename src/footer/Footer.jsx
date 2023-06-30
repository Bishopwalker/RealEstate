import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <Box>
            <Box sx={{ backgroundColor: 'black', color: 'white' }} pb={2}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" textAlign="center" fontWeight={500} pb={1}>
                            CONTACT US
                        </Typography>
                        <Typography variant="body1" textAlign="center" pb={1}>
                            Email: DavidFines@
                        </Typography>
                        <Typography variant="body1" textAlign="center" pb={1}>
                            Phone: 202-297-8946
                        </Typography>
                        <Typography variant="body1" textAlign="center">
                            Address: 25 Sandy Street, Callao, VA 22435
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" textAlign="center" fontWeight={500} pb={1}>
                            HOURS
                        </Typography>
                        <Typography variant="body1" textAlign="center" pb={1}>
                            Monday - Friday: 7:00 AM - 5:00 PM
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Typography variant="body1" textAlign="center" fontWeight={500} pb={1}>
                          <Link to='https://www.facebook.com/davidfine52'>  <FacebookIcon sx={{ color: 'white', marginRight: '0.5rem' }} /> </Link>
                            <Link to='https://twitter.com/davidf52'>  <TwitterIcon sx={{ color: 'white', marginRight: '0.5rem' }} />  </Link>
                            <Link>  <InstagramIcon sx={{ color: 'white', marginRight: '0.5rem' }} />  </Link>
                           <Link to='https://www.zillow.com/profile/David-Fine/#reviews'> <img src='/Zillow.png'/> </Link>
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
            <Box sx={{ backgroundColor: 'black', color: 'white' }} pb={1} pt={1}>
                <Grid container>
                    <Grid item xs={12} sm={12}>
                        <Typography variant="body1" textAlign="center">
                            © 2023 Salt Water Coder, LLC.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default Footer;
