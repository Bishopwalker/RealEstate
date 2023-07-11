// housesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch houses data
export const fetchHouses = createAsyncThunk('houses/fetchHouses', async (mlsIds) => {
    const response = await axios.post(' http://localhost:5000/api/properties-by-mls-ids', { mlsIds });
    return response.data;
});
// Create a slice
const housesSlice = createSlice({
    name: 'houses',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default housesSlice.reducer;
