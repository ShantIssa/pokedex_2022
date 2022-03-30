import React from 'react';
import { useDispatch } from 'react-redux';
import { Alert } from 'react-native';
import Toast from 'react-native-toast-message';

import { useImageColors } from 'src/hooks';
import { Typography, Flex } from 'src/components';
import { Compass, Dingtalk, PokeballCard, DeleteOutlined } from 'src/assets/icons';
import { averageStrengthCalculator } from 'src/utils/averageStrengthCalculator';
import { removePokemon } from 'src/redux/slices/pokemons/slice';
import { capitalize } from 'src/utils/capitalize';

import { SavedPokemonsProps } from '../types';
import {
    SavedPokemonCard,
    PokeImage,
    PokeballWrapper,
    TitleWrapper,
    StyledButton,
    ActionsWrapper,
    LineInBetween,
    DeleteButton,
} from '../styles';

const SavedPokemonRow: React.FC<SavedPokemonsProps> = ({ pokemon }) => {
    const dispatch = useDispatch();

    const img = pokemon.sprites.other['official-artwork'].front_default;
    const { colors } = useImageColors(img || '');
    const avgStrength = averageStrengthCalculator(pokemon.stats);

    const alertHandler = () => {
        Alert.alert(
            `Remove ${capitalize(pokemon.name)}`,
            `You are about to remove ${capitalize(
                pokemon.name,
            )}, you will lose all the XP and History of battles which you've gained`,
            [
                {
                    text: 'Remove',
                    onPress: () => {
                        Toast.show({
                            type: 'release',
                            props: { colors, name: capitalize(pokemon.name) },
                        });
                        dispatch(removePokemon(pokemon));
                    },
                    style: 'destructive',
                },
                {
                    text: 'Cancel',
                    onPress: () => null,
                    style: 'cancel',
                },
            ],
        );
    };

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
            <ActionsWrapper borderColor={colors.primary}>
                <DeleteButton onPress={alertHandler}>
                    <DeleteOutlined fill={colors.secondary} width="25px" />
                </DeleteButton>
                <LineInBetween borderColor={colors.primary} />
                <StyledButton>
                    <Flex paddingString="0 5px 0 0">
                        <Compass fill={colors.secondary} />
                    </Flex>
                    <Typography type="bodyLarge">Train</Typography>
                </StyledButton>
                <LineInBetween borderColor={colors.primary} />
                <StyledButton>
                    <Flex paddingString="0 5px 0 0">
                        <Dingtalk fill={colors.secondary} />
                    </Flex>
                    <Typography type="bodyLarge">Battle</Typography>
                </StyledButton>
            </ActionsWrapper>
        </SavedPokemonCard>
    );
};

export default SavedPokemonRow;
