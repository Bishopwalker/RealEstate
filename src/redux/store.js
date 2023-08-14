import {combineReducers, configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import logger from 'redux-logger';
import housesReducer from './agentListingsSlice.js';
import propertyDetailReducer from './propertyDetailSlice.js';
import searchHomeReducer from './fetchHousesSlice.js';
import reviewsReducer from './reviewsSlice.js';
import propertyDetailSliceRealator from './realatorPropertyDetailSlice.js';

const rootReducer = combineReducers({
    agentListings: housesReducer,
    propertyDetail: propertyDetailReducer,
    searchHome: searchHomeReducer,
    reviews: reviewsReducer,
    realatorPropertyDetail: propertyDetailSliceRealator,
});

const middleware = [...getDefaultMiddleware(), logger];

export const store = configureStore({
    reducer: rootReducer,
    middleware,
});
