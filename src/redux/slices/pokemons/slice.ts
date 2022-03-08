import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Reducer } from 'src/redux/types';

import { PokemonsState } from './types';

const initialPokemonsState: PokemonsState = {
    pokemons: [{ name: '' }],
};

const pokemonsState = createSlice({
    name: Reducer.POKEMONS,
    initialState: initialPokemonsState,
    reducers: {
        savePokemon(state, action: PayloadAction<any>) {
            state.pokemons = [...state.pokemons, { name: action.payload.name }];
        },
        removePokemon(state, action: PayloadAction<any>) {
            state.pokemons = state.pokemons.filter((item) => item.name !== action.payload.name);
        },
    },
});

export const { savePokemon } = pokemonsState.actions;
export const { removePokemon } = pokemonsState.actions;
export default pokemonsState.reducer;
