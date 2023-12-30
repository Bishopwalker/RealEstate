import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch property detail data
export const fetchPropertyDetail = createAsyncThunk('propertyDetail/fetchPropertyDetail', async (propertyId) => {
    const response = await axios.get(`http://localhost:5000/api/property-detail/${propertyId}`);
    return response.data.data;
});

// Create a slice
const propertyDetailSlice = createSlice({
    name: 'propertyDetail',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPropertyDetail.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default propertyDetailSlice.reducer;
