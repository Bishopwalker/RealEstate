// store.js
import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './agentListingsSlice.js';
import propertyDetailReducer from './propertyDetailSlice.js';
export const store = configureStore({
    reducer: {
        houses: housesReducer,
        propertyDetail: propertyDetailReducer,
    },
});
