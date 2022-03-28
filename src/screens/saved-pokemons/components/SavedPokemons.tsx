import React from 'react';

import { Flex, Typography } from 'src/components';
import PokeBall from 'src/assets/icons/cards/Pokeball';
import { useImageColors } from 'src/hooks';
import { Pokemon as SinglePokemonType } from 'src/redux/slices/pokemons/types';

import { SavedPokemonCard, PokeImage, PokeballWrapper, TitleWrapper } from '../styles';

const SavedPokemons: React.FC<SinglePokemonType> = ({ pokemon }) => {
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
                <PokeBall ballColor={colors.secondary} />
            </PokeballWrapper>

            <PokeImage source={{ uri: img || '' }} />
        </SavedPokemonCard>
    );
};

export default SavedPokemons;
