import { RootState } from 'src/redux/types';

export const selectPokemons = (state: RootState) => state.pokemons.pokemons;
