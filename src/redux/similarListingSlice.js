import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSimilarListing =
    createAsyncThunk('similarListing/fetchSimilarListing', async (propertyId) => {
        const response = await axios.get(`http://localhost:5000/api/similar-listing/${propertyId}`);
        return response.data.data;
    });


// Create a slice
const similarListingSlice = createSlice({
    name: 'similarListing',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchSimilarListing.fulfilled, (state, action) => {
           console.log('similarListingSlice', action.payload);
            return action.payload;
        });
    }
});

export default similarListingSlice.reducer;