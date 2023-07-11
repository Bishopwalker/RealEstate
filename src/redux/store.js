// store.js
import { configureStore } from '@reduxjs/toolkit';
import housesReducer from './agentListingsSlice.js';

export const store = configureStore({
    reducer: {
        houses: housesReducer,
    },
});
