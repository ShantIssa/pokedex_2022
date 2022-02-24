import React from 'react';
import { useQuery } from 'react-query';
import { ActivityIndicator, View } from 'react-native';

import { useImageColors } from 'src/hooks';
import { Flex, Typography } from 'src/components';
import { getPokemonById } from 'src/services/api/pokemons';

import { PokemonViewType } from './types';
import { Card, PokemonImg, WhiteCard } from './styles';

const Pokemon: React.FC<PokemonViewType> = ({ name, id }) => {
    const { data, isLoading } = useQuery(id, getPokemonById);
    const pokemonImg = data?.sprites?.other['official-artwork']?.front_default;

    const { picLoading, colors } = useImageColors(pokemonImg);
    return isLoading || picLoading ? (
        <ActivityIndicator />
    ) : (
        <Card background={colors.background}>
            <Flex marginString="12px">
                <Typography
                    color="light"
                    type="h1-small"
                    fontFamily="bold"
                    textAlign="center"
                    textTransform="capitalize"
                >
                    {name}
                </Typography>
            </Flex>
            {pokemonImg && <PokemonImg source={{ uri: pokemonImg }} />}
            <WhiteCard>
                <Typography type="h1-small" fontFamily="bold" textAlign="center" textTransform="capitalize">
                    {name}
                </Typography>
            </WhiteCard>
        </Card>
    );
};

export default Pokemon;
