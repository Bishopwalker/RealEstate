// reviewsSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch reviews data
export const fetchReviews = createAsyncThunk(
    'reviews/fetchReviews',
    async () => {
        const response = await axios.get('https://977e-119-30-41-109.ngrok-free.app/api/reviews');
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
