import { PokemonType } from 'src/redux/slices/pokemons/types';
import { CardColors } from 'src/hooks/useImageColors/types';

export type SavedPokemonsProps = {
    pokemon: PokemonType;
};

export type BottomBarProps = {
    pokemon: PokemonType;
    colors: CardColors;
};
