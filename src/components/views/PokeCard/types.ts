import { CardColors } from 'src/hooks/useImageColors/types';

export type PokemonType = {
    url: string;
};
export type PokemonViewType = {
    id: string;
};

export type PokeCardProps = {
    pokemons: PokemonType[];
};

export type CardHeaderProps = {
    name: string;
    base_experience: string;
    navigateToPokemonScreen: () => void;
};

export type WhiteCardProps = {
    height: number;
    weight: number;
    name: string;
    colors: CardColors;
    abilities: any;
    types: any;
    averageStrength: number;
};
