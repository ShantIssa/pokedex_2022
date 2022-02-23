import api from 'src/services/api';
import { QUERY_KEYS } from 'src/services/api/keys';

export const getPokemonsData = async () => {
    const { data } = await api.get(QUERY_KEYS.GetAllPokemons);
    return data.results;
};

export const getAllPokemonsViaGender = async ({ queryKey }: { queryKey: string[] }) => {
    const gender = queryKey[0].toLocaleLowerCase() === 'male' ? 2 : 1;
    const { data } = await api.get(QUERY_KEYS.GetAllPokemonsViaGender + gender);
    return data;
};
