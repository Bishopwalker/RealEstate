const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/property-detail/:propertyId', async (req, res) => {
    const { propertyId } = req.params;

    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/v2/property-detail',
        params: {
            property_id: propertyId,
        },
        headers: {
            'X-RapidAPI-Key': '98719ea05bmsh790ff30799ebc39p18a878jsn89341f1405b3',
            'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});


app.get('/api/property-by-mls-id/:mlsId', async (req, res) => {
    const { mlsId } = req.params;

    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/property-by-mls-id',
        params: {
            mls_id: mlsId,
        },
        headers: {
            'X-RapidAPI-Key': '98719ea05bmsh790ff30799ebc39p18a878jsn89341f1405b3',
            'X-RapidAPI-Host': 'us-real-estate.p.rapidapi.com',
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});





app.listen(port, () => {
    console.log(`Server is running on ports ${port}`);
});
