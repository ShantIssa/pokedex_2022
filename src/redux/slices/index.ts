import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

import user from './user/slice';
import pokemons from './pokemons/slice';

const rootReducer = combineReducers({
    user,
    pokemons,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage: AsyncStorage,
    blacklist: [],
};

const slices = persistReducer(persistConfig, rootReducer);

export default slices;
