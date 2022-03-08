import { RootState } from 'src/redux/types';

export const selectSavedPokemons = (state: RootState) => state.pokemons.pokemons;
export const selectSlots = (state: RootState) => state.pokemons.slots;
