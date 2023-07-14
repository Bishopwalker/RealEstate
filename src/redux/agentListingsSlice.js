// housesSliceByMlsID.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch houses data
export const fetchHousesbyMLS = createAsyncThunk('houses/fetchHouses', async (mlsIds) => {
    const response = await axios.post(' http://localhost:5000/api/properties-by-mls-ids', { mlsIds });
    return response.data;
});
// Create a slice
const housesSliceByMlsID = createSlice({
    name: 'houses',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHousesbyMLS.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default housesSliceByMlsID.reducer;

