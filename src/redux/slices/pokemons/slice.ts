import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, Reducer } from 'src/redux/types';

import { PokemonsState } from './types';

const initialPokemonsState: PokemonsState = {
    pokemons: [],
    slots: 5,
};

const pokemonsState = createSlice({
    name: Reducer.POKEMONS,
    initialState: initialPokemonsState,
    reducers: {
        setSlots(state, action: PayloadAction<any>) {
            state.slots = action.payload;
        },
        savePokemon(state, action: PayloadAction<any>) {
            if (state.pokemons.length < state.slots) {
                state.pokemons = [...state.pokemons, action.payload];
            }
        },
        removePokemon(state, action: PayloadAction<any>) {
            state.pokemons = state.pokemons.filter((item) => {
                return item.name !== action.payload.name;
            });
        },
    },
});

export const { setSlots } = pokemonsState.actions;
export const { removePokemon } = pokemonsState.actions;

export const savePokemon = (pokemon: any) => (dispatch: AppDispatch) => {
    dispatch(pokemonsState.actions.savePokemon(pokemon));
};
export default pokemonsState.reducer;
