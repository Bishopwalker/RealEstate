// reviewsSlice.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch reviews data
export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const response = await axios.get('http://localhost:5000/api/reviews');
        return response.data;
    }
);

// Create a slice
const reviewsSlice = createSlice({
    name: 'reviews',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchReviews.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default reviewsSlice.reducer;
