import { Box, Typography, Grid, TextField } from '@mui/material';

const ContactMe = () => {
    return (
        <Box sx={{ py: 8 }}>
            <Grid container justifyContent="center" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <img src="/david.jpg" alt="centerpiece" style={{  objectFit: 'contain'}}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography variant="h4" align="center">
                        Contact Me
                    </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Name" />
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField fullWidth label="Email" />
                </Grid>
                <Grid item xs={12}>
                    <TextField fullWidth label="Message" multiline rows={4} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactMe;


