import React from 'react';
import { useQuery } from 'react-query';
import { Image, View } from 'react-native';

import { getPokemonById } from 'src/services/api/pokemons';
import Stats from 'src/screens/pokemon/components/Stats';

import { PokemonCard } from './styles';
import Abilities from './components/Abilities';

import { Typography } from '../../components';

const Pokemon: React.FC<any> = ({ route }) => {
    const { id, name, colors } = route.params;
    const { data, isLoading } = useQuery(id, getPokemonById);

    const imgUri = data?.sprites?.other['official-artwork']?.front_default;
    const abilities = data?.abilities;
    const stats = data?.stats;

    return (
        <PokemonCard background={'white'}>
            {!isLoading && (
                <View style={{ alignSelf: 'center' }}>
                    <Image source={{ uri: imgUri }} style={{ height: 200, width: 200 }} />
                    <Typography
                        type="h1"
                        textAlign="center"
                        textTransform="capitalize"
                        textStyle={{ color: colors.primary }}
                    >
                        {name}
                    </Typography>
                    <Abilities colors={colors} abilities={abilities} />
                    <Stats stats={stats} />
                </View>
            )}
        </PokemonCard>
    );
};

export default Pokemon;
