import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Reducer } from 'src/redux/types';

import { PokemonsState } from './types';

const initialPokemonsState: PokemonsState = {
    pokemons: [{ name: '', url: '' }],
};

const pokemonsState = createSlice({
    name: Reducer.POKEMONS,
    initialState: initialPokemonsState,
    reducers: {
        setPokemons(state, action: PayloadAction<any>) {
            state.pokemons = action.payload;
        },
    },
});

export const { setPokemons } = pokemonsState.actions;
export default pokemonsState.reducer;
