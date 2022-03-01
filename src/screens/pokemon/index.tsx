import React from 'react';
import { useQuery } from 'react-query';

import { getPokemonById } from 'src/services/api/pokemons';

import { Wrapper, Typography } from '../../components';

const Pokemon: React.FC<any> = ({ route }) => {
    const { id, name } = route.params;
    const { data, isLoading } = useQuery(id, getPokemonById);

    console.log(data);
    return (
        <Wrapper>
            <Typography>{name}</Typography>
        </Wrapper>
    );
};

export default Pokemon;
