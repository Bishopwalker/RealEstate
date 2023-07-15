import React from 'react';
import { Card, CardHeader, CardMedia, Typography, Box } from '@mui/material';

export default function BusinessCard() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
                background: 'linear-gradient(to top, black, lightgrey)',
                pt: 2, // padding-top
                pb: 2, // padding-bottom
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    zIndex: 1,
                    color: '#fff',
                    textShadow: '2px 2px 4px #000000',
                    marginBottom: '1rem',
                }}
            >
                Meet The Agent
            </Typography>
            <Card
                sx={{
                    maxWidth: 345,
                    textAlign: 'center',
                    border: '1px solid',
                }}
            >
                <CardHeader
                    title="David"
                    subheader="Real Estate Agent"
                />
                <CardMedia
                    component="img"
                    height="140"
                    image="/david_photo.jpg"
                    alt="David"
                />
            </Card>
        </Box>
    );
}
