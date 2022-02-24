import { CardColors } from 'src/hooks/useImageColors';

export type PokemonType = {
    name: string;
    url: string;
};
export type PokemonViewType = {
    name: string;
    id: string;
};

export type PokeCardProps = {
    pokemons: PokemonType[];
};

export type CardHeaderProps = {
    name: string;
    id: string;
    base_experience: string;
};

export type WhiteCardProps = {
    height: number;
    weight: number;
    name: string;
    colors: CardColors;
    abilities: any;
    types: any;
};
