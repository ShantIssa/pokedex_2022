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
export type CardColors = {
    background: string;
    border: string;
};
