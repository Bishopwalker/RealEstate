import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

// Async action to fetch property detail by propertyId
export const fetchPropertyDetailRealator = createAsyncThunk(
    'propertyDetail_realator/fetchPropertyDetailRealator',
    async (propertyId) => {
        const response = await axios.get(`http://localhost:5000/api/property-detail-realtor/${propertyId}`);
        return response.data;
    }
);

// Slice
const propertyDetailSliceRealator = createSlice({
    name: 'propertyDetail_realator',
    initialState: null,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchPropertyDetailRealator.fulfilled, (state, action) => {
            console.log('Fulfilled action called', action.payload);
            return action.payload;
        });
    },
});

export default propertyDetailSliceRealator.reducer;
