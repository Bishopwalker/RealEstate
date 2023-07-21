import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import housesReducer from './agentListingsSlice.js';
import propertyDetailReducer from './propertyDetailSlice.js';
import searchHomeReducer from './fetchHousesSlice.js';

const persistConfig = {
    key: 'root',
    storage,
};

const rootReducer = combineReducers({
    houses: housesReducer,
    propertyDetail: propertyDetailReducer,
    searchHome: searchHomeReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer:rootReducer,
});


