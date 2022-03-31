import React from 'react';

import { useImageColors } from 'src/hooks';
import { PokeballCard } from 'src/assets/icons';
import { Typography, Flex } from 'src/components';
import BottomBar from 'src/screens/saved-pokemons/components/BottomBar';
import { averageStrengthCalculator } from 'src/utils/averageStrengthCalculator';

import { SavedPokemonsProps } from '../types';
import { PokeImage, TitleWrapper, PokeballWrapper, SavedPokemonCard } from '../styles';

const SavedPokemonRow: React.FC<SavedPokemonsProps> = ({ pokemon }) => {
    const img = pokemon.sprites.other['official-artwork'].front_default;
    const { colors } = useImageColors(img || '');
    const avgStrength = averageStrengthCalculator(pokemon.stats);

    return (
        <SavedPokemonCard borderColor={colors.primary}>
            <TitleWrapper backgroundColor={colors.primary}>
                <Typography
                    type="h1-small"
                    textAlign="center"
                    textTransform="capitalize"
                    textStyle={{ color: colors.secondary }}
                >
                    {pokemon.name}
                </Typography>
            </TitleWrapper>
            <PokeballWrapper>
                <PokeballCard ballColor={colors.secondary} />
            </PokeballWrapper>
            <Flex flexDirection="row" alignItems="flex-start" paddingString="10px" justifyContent="space-between">
                <PokeImage source={{ uri: img || '' }} />
                <Flex alignItems="center">
                    <Typography type="bodyLarge" textStyle={{ color: colors.secondary }}>
                        XP: {pokemon.xp}
                    </Typography>
                    <Typography type="bodyLarge" textStyle={{ color: colors.secondary }}>
                        Power: {avgStrength}
                    </Typography>
                </Flex>
            </Flex>
            <BottomBar pokemon={pokemon} colors={colors} />
        </SavedPokemonCard>
    );
};

export default SavedPokemonRow;
