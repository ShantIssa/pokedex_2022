import React from 'react';
import { View } from 'react-native';
import { useQuery } from 'react-query';

import { getSinglePokemon } from 'src/services/api/pokemons';

import Stats from './elements/Stats';
import { PokemonTabProps } from './types';
import { WhiteBackground } from './styles';
import Abilities from './elements/Abilities';

import Typography from '../../shared/Typography';

const PokemonTab: React.FC<PokemonTabProps> = ({ name, colors }) => {
    const { data, isLoading } = useQuery(name, getSinglePokemon);
    const stats = data?.stats;
    const abilities = data?.abilities;
    return (
        <View>
            {!isLoading && (
                <View>
                    <WhiteBackground>
                        <Typography
                            type="h1"
                            textAlign="center"
                            textTransform="capitalize"
                            textStyle={{ color: colors.primary }}
                        >
                            {name}
                        </Typography>
                    </WhiteBackground>
                    <Abilities colors={colors} abilities={abilities} />
                    <Stats colors={colors} stats={stats} />
                </View>
            )}
        </View>
    );
};

export default PokemonTab;
