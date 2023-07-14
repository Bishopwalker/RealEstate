// housesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchHouses = createAsyncThunk(
    'houses/fetchHouses',
    async ({ city, limit }, { getState }) => {
        const { houses, city: currentCity, limit: currentLimit } = getState().houses;

        if (city === currentCity && limit === currentLimit) {
            // If city and limit haven't changed, return the current houses data
            return houses;
        }

        const response = await fetch(`http://localhost:5000/api/for-sale?sort=newest&city=${city}&stateCode=VA&limit=${limit}&offset=0`);
        const data = await response.json();
        console.log(data.data.home_search.results);
        return data.data.home_search.results;
    }
);

const initialState = {
    houses: [],
    city: '',
    limit: 0,
};

export const housesSlice = createSlice({
    name: 'houses',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchHouses.fulfilled, (state, action) => {
            state.houses = action.payload;
            state.city = action.meta.arg.city;
            state.limit = action.meta.arg.limit;
        });
    },
});

export default housesSlice.reducer;
