import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    housesByParams: [],
    params: {
        city: '',
        limit: 0,
        price_min: 0,
        price_max: 0,
        beds_min: '',
        beds_max: '',
        baths_min: '',
        baths_max: '',
        property_type: '',
        community_ammenities: '',
        lot_views: '',
        new_construction: false,
        hide_pending_contingent: false,
        has_virtual_tours: false,
        has3d_tours: false,
        hide_foreclosure: false,
        price_reduction: false,
        open_house: false,
        no_hoa_fee: false,
        days_on_realtor: '',
        expand_search_radius: '',
        home_size_max: '',
        home_size_min: '',
        lot_size_min: '',
        lot_size_max: ''
    }
};


export const fetchHouses = createAsyncThunk(
    'houses/fetchHouses',
    async (params) => {




        // Create a query string from the params object
        const queryParams = new URLSearchParams({
            ...params,
            sort: 'newest',
            stateCode: 'VA',
            offset: 0
        }).toString();
console.log(queryParams);
        const response = await axios.get(`http://localhost:5000/api/for-sale?${queryParams}`);

        const data = response.data;
        console.log(data.data.home_search.results);
        return data.data.home_search.results;
    }
);



export const housesSlice = createSlice({
    name: 'housesByParams', // changed from 'houses' to 'housesByParams'
    initialState,
    reducers: {
        updateParams: (state, action) => {
            state.params = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            state.housesByParams = action.payload;
            state.params = action.meta.arg;
        });
    },
});
;

export default housesSlice.reducer;
