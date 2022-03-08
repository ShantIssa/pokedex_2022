export const QUERY_KEYS = {
    GetPokemons: 'pokemon?limit=$5',
    GetPokemonsEvolutionChain: 'evolution-chain?limit=5',
    GetPokemonEvolutionChainId: 'evolution-chain/',
    GetPokemonId: 'pokemon/',
    GetAllPokemonsViaGender: 'gender/',
} as const;
