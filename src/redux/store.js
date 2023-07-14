// store.js
import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './agentListingsSlice.js';
import propertyDetailReducer from './propertyDetailSlice.js';
import searchHomeReducer from './fetchHousesSlice.js';
export const store = configureStore({
    reducer: {
        houses: housesReducer,
        propertyDetail: propertyDetailReducer,
        searchHome: searchHomeReducer,

    },
});
