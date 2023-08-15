require('dotenv').config();
const {RAPIDAPI_KEY, RAPIDAPI_HOST,SERVER_TOKEN,RAPIDAPI_HOST_REALTOR} = process.env;
const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
console.log(process.env.RAPIDAPI_KEY);
//Property Detail US Real Estate API
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

//Property Detail realtor.com API
app.get('/api/property-detail-realtor/:propertyId', async (req, res) => {
    const { propertyId } = req.params;

    const options = {
        method: 'GET',
        url: 'https://realty-in-us.p.rapidapi.com/properties/v3/detail',
        params: {
            property_id: propertyId
        },
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST_REALTOR
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
})

//Get nearby areas for include_nearby_areas_slug_id parameter in /for-sale endpoint. Get by (area_type="city" & city & state_code) or by (area_type="neighborhood" & city & state_code & neighborhood) or by (area_type="postal_c...
app.get('/api/for-sale', async (req, res) => {
    console.log('query', JSON.stringify(req.query, null, 2));
    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/v3/for-sale',
        params: {
            ...req.query,
            state_code: 'VA',
            sort: 'newest',
            offset: '0',

        },
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST
        }
    };

    try {
        const response = await axios.request(options);
        console.log('query', JSON.stringify(req.query, null, 2))
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
app.get('/api/similar-listing/:propertyId', async (req, res) => {
    console.log('similar')
    const { propertyId } = req.params;
    const options = {
        method: 'GET',
        url: 'https://us-real-estate.p.rapidapi.com/for-sale/similiar-homes',
        params: {
            property_id: propertyId
        },
        headers: {
            'X-RapidAPI-Key': RAPIDAPI_KEY,
            'X-RapidAPI-Host': RAPIDAPI_HOST,
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
})

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

app.get('/api/reviews', async (req, res) => {
console.log('reviews')
    const options = {
        method: 'GET',
        url: 'https://api.bridgedataoutput.com/api/v2/OData/reviews/Reviews',
        params: {
            access_token: SERVER_TOKEN,
            $top: 50,
            $filter: 'RevieweeKey eq \'9cd8ff818cadffc22de689f80638b527\'',
        }
    };
    try {
        const response = await axios.request(options);
        res.json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
});







app.listen(port, () => {
    console.log(`Server is running on ports ${port}`);
});
