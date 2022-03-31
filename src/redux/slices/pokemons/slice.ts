import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { AppDispatch, Reducer } from 'src/redux/types';

import { PokemonsState, TrainPokemonType } from './types';

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
                state.pokemons = [...state.pokemons, { ...action.payload, xp: 0, is_training: false }];
            }
        },
        trainPokemon(state, action: PayloadAction<TrainPokemonType>) {
            const myPokeId = state.pokemons.findIndex((item) => item.name === action.payload.name);
            state.pokemons[myPokeId].is_training = action.payload.is_training;
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

export const trainPokemon = ({ name, is_training }: TrainPokemonType) => {
    return (dispatch: AppDispatch) => {
        dispatch(pokemonsState.actions.trainPokemon({ name, is_training }));
    };
};
export default pokemonsState.reducer;
