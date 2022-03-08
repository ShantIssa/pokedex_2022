import { RootState } from 'src/redux/types';

export const selectSavedPokemons = (state: RootState) => state.pokemons.pokemons;
