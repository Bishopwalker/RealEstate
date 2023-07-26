import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import housesReducer from './agentListingsSlice.js';
import propertyDetailReducer from './propertyDetailSlice.js';
import searchHomeReducer from './fetchHousesSlice.js';
import reviewsReducer from './reviewsSlice.js';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    houses: housesReducer,
    propertyDetail: propertyDetailReducer,
    searchHome: searchHomeReducer,
    reviews: reviewsReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:rootReducer,
});


