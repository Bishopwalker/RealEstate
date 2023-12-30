import { Box, Typography, Grid, TextField, Button } from '@mui/material';
import { useEffect, useState } from "react";
import axios from 'axios';

const ContactMe = () => {
  const [firstLoad, setFirstLoad] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (firstLoad) {
      window.scrollTo(0, 0);
      setFirstLoad(false);
    }
  }, [firstLoad]);

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint for your server
    const API_ENDPOINT = "YOUR_API_ENDPOINT";

    axios.post(API_ENDPOINT, formData)
      .then((response) => {
        // Handle success
        console.log("Form submitted successfully!");
      })
      .catch((error) => {
        // Handle error
        console.error("Error submitting form:", error);
      });
  };

  return (
    <Box sx={{ py: 8 }}>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" align="center" fontFamily="Montserrat, sans-serif">
            Contact Me
          </Typography>
          <Box mt={3}>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              InputLabelProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
              InputProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              InputLabelProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
              InputProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
          </Box>
          <Box mt={3}>
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              InputLabelProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
              InputProps={{ style: { fontFamily: 'Montserrat, sans-serif' } }}
              name="message"
              value={formData.message}
              onChange={handleInputChange}
            />
          </Box>
          <Box mt={3} display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              sx={{
                width: '50%',
                fontFamily: 'Montserrat, sans-serif',
                backgroundColor: '#2d3436',
                '&:hover': {
                  backgroundColor: '#2d3436', // Set the hover color to match the background color
                },
              }}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactMe;

