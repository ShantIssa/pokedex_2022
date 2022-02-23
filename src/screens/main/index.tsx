import React from 'react';
import { Text } from 'react-native';
import { useQuery } from 'react-query';

import { Wrapper } from 'src/components';
import { getAllPokemonsViaGender } from 'src/services/api/pokemons';

const Main = () => {
    // const { data } = useQuery('gender', getPokemonsData);
    const { data } = useQuery('female', getAllPokemonsViaGender);
    console.warn(data);
    return (
        <Wrapper>
            <Text>Pokedex</Text>
        </Wrapper>
    );
};

export default Main;
