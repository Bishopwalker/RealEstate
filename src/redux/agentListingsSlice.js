// housesSliceByMlsID.js
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    agentListings: []
}
// Async action to fetch houses data
// Async action to fetch houses data
export const fetchHousesbyMLS = createAsyncThunk(
    'houses',
    async (mlsIds, { getState }) => {
        // const { houses } = getState();
        // if (houses.length === mlsIds.length && houses.every((house, index) => house.mlsId === mlsIds[index])) {
        //     // If houses data already exists in the state, do not make a new API call
        //     return houses;
        // }
        const response = await axios.post('http://localhost:5000/api/properties-by-mls-ids', { mlsIds });
        console.log('mlsIds', response.data);
        return response.data;
    }
);

// Create a slice
const housesSliceByMlsID = createSlice({
    name: 'housesByMlsID', // changed from 'houses' to 'housesByMlsID'
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHousesbyMLS.fulfilled, (state, action) => {
            return action.payload;
        });
    },
});

export default housesSliceByMlsID.reducer;

