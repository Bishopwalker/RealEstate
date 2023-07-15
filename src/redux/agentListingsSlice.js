// housesSliceByMlsID.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch houses data
// Async action to fetch houses data
export const fetchHousesbyMLS = createAsyncThunk(
    'houses/fetchHouses',
    async (mlsIds, { getState }) => {
        const { houses } = getState();
        if (houses.length > 0) {
            // If houses data already exists in the state, do not make a new API call
            return houses;
        }
        const response = await axios.post('http://localhost:5000/api/properties-by-mls-ids', { mlsIds });
        return response.data;
    }
);

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

