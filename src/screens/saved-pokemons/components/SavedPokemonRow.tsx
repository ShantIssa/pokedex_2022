import React from 'react';

import { Typography, Flex } from 'src/components';
import { useImageColors } from 'src/hooks';
import { PokeballCard } from 'src/assets/icons';

import { SavedPokemonsProps } from '../types';
import { SavedPokemonCard, PokeImage, PokeballWrapper, TitleWrapper } from '../styles';

const SavedPokemonRow: React.FC<SavedPokemonsProps> = ({ pokemon }) => {
    const img = pokemon.sprites.other['official-artwork'].front_default;
    const { colors } = useImageColors(img || '');
    return (
        <SavedPokemonCard borderColor={colors.primary}>
            <TitleWrapper backgroundColor={colors.primary}>
                <Typography
                    textAlign="center"
                    textTransform="capitalize"
                    type="h1-small"
                    textStyle={{ color: colors.secondary }}
                >
                    {pokemon.name}
                </Typography>
            </TitleWrapper>
            <PokeballWrapper>
                <PokeballCard ballColor={colors.secondary} />
            </PokeballWrapper>

            <PokeImage source={{ uri: img || '' }} />
            <Flex paddingString="8px" flexDirection="row">
                <Typography textAlign="center" type="bodyLarge" textStyle={{ color: colors.secondary }}>
                    XP: {pokemon.xp}
                </Typography>
            </Flex>
        </SavedPokemonCard>
    );
};

export default SavedPokemonRow;
