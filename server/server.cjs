require('dotenv').config();
const {RAPIDAPI_KEY, RAPIDAPI_HOST} = process.env;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
console.log(process.env.RAPIDAPI_KEY);
app.get('/api/property-detail/:propertyId', async (req, res) => {
    const { propertyId } = req.params;

    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/v2/property-detail',
        params: {
            property_id: propertyId,
        },
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST,
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

//Get nearby areas for include_nearby_areas_slug_id parameter in /for-sale endpoint. Get by (area_type="city" & city & state_code) or by (area_type="neighborhood" & city & state_code & neighborhood) or by (area_type="postal_c...
app.get('/api/for-sale', async (req, res) => {
    const { stateCode, city, sort, offset, limit, price_min,price_max,beds_min,beds_max,baths_min,baths_max,property_type,new_construction,hide_pending_contingent,
    has_virtual_tours,hide_foreclosure,price_reduction,open_house,no_hoa_fee,days_on_realtor,expand_search_radius,home_size_min,
    home_size_max,lot_size_min,lot_size_max} = req.query;
    console.log('query', JSON.stringify(req.query, null, 2));
    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/v3/for-sale',
        params: {
            state_code: stateCode,
            city,
            sort,
            offset,
            limit,
            price_min,price_max,beds_min,beds_max,baths_min,baths_max,property_type,new_construction,hide_pending_contingent,
            has_virtual_tours,hide_foreclosure,price_reduction,open_house,no_hoa_fee,days_on_realtor,expand_search_radius,home_size_min,
            home_size_max,lot_size_min,lot_size_max
        },
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST
        }
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
console.log(RAPIDAPI_KEY)
    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/property-by-mls-id',
        params: {
            mls_id: mlsId,
        },
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST,
        },
    };

    try {
        const response = await axios.request(options);
        console.log(response.data);
        res.json(response.data);
    } catch (error) {
      //  console.error(error);
        console.log(RAPIDAPI_KEY)
        res.status(500).json({ error: 'An error occurred' });
    }
});

app.post('/api/properties-by-mls-ids', async (req, res) => {
    const { mlsIds } = req.body;

    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/property-by-mls-id',
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST,
        },
    };

    try {
        const responses = await Promise.all(
            mlsIds.map(async (mlsId) => {
                options.params = { mls_id: mlsId };
                const response = await axios.request(options);
                return response.data;
            })
        );

        res.json(responses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});






app.listen(port, () => {
    console.log(`Server is running on ports ${port}`);
});
