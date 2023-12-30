import React, { useEffect, useState } from 'react';
import { List, ListItem, ListItemIcon, ListItemText, Avatar, Typography } from '@mui/material';
import { cities } from './cities';
import { Link } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});


const CityList = () => {
  const [firstLoad, setFirstLoad] = useState(true);

  useEffect(() => {
    if (firstLoad) {
      window.scrollTo(0, 0);
      setFirstLoad(false);
    }
  }, [firstLoad]);

  return (
    <>
	<ThemeProvider theme={theme}>
      <Typography
        variant="h3"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
          margin: '2rem 0',
          color: '#2d3436',
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        Areas We Serve
      </Typography>

      <List>
        {cities.map((city, index) => (
          <ListItem
            key={index}
            sx={{
              borderBottom: '1px solid #b2bec3', // Add a bottom border to separate the items
              transition: 'background-color 0.3s ease-in-out', // Add a smooth transition on hover
              '&:hover': {
                backgroundColor: '#dfe6e9', // Change background color on hover
              },
            }}
          >
            <ListItemIcon>
              <Avatar
                sx={{
                  backgroundColor: '#2d3436', // Set avatar background color
                  color: '#fff', // Set avatar text color
                }}
              >
                {city.url.substring(0, 1)}
              </Avatar>
            </ListItemIcon>
            <Link to={city.url} style={{ textDecoration: 'none' }}>
              <ListItemText
                primary={city.name}
                secondary={city.url}
                sx={{
                  color: '#2d3436', // Set primary and secondary text color
                  fontFamily: 'Montserrat, sans-serif', // Set font family
                  '& .MuiListItemText-secondary': {
                    color: '#636e72', // Set secondary text color
                    fontSize: '0.9rem', // Reduce secondary text font size
                  },
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
	</ThemeProvider>
    </>
  );
};

export default CityList;

