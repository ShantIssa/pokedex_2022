import api from 'src/services/api';
import { QUERY_KEYS } from 'src/services/api/keys';

const fetchUrl = async (url: string) => {
    const { data } = await api.get(url);
    return data;
};

export const getPokemons = ({ pageParam = QUERY_KEYS.GetPokemons }) => {
    return fetchUrl(pageParam);
};

export const getPokemonsEvolutionChain = ({ pageParam = QUERY_KEYS.GetPokemonsEvolutionChain }) => {
    return fetchUrl(pageParam);
};

export const getAllPokemonsViaGender = async ({ queryKey }: { queryKey: string[] }) => {
    const gender = queryKey[0].toLocaleLowerCase() === 'male' ? 2 : 1;
    const { data } = await api.get(QUERY_KEYS.GetAllPokemonsViaGender + gender);
    return data;
};

export const getPokemonByEvlotuionId = async ({ queryKey }: { queryKey: string[] }) => {
    const id = queryKey[0];

    const { data } = await api.get(QUERY_KEYS.GetPokemonEvolutionChainId + id);
    return data;
};

export const getSinglePokemon = async ({ queryKey }: { queryKey: string[] }) => {
    const id = queryKey[0];

    const { data } = await api.get(QUERY_KEYS.GetPokemonId + id);
    return data;
};
