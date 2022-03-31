import React from 'react';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import { ActivityIndicator, Alert } from 'react-native';

import { capitalize } from 'src/utils/capitalize';
import { Flex, Typography } from 'src/components';
import { Compass, DeleteOutlined, Dingtalk } from 'src/assets/icons';
import { removePokemon, trainPokemon } from 'src/redux/slices/pokemons/slice';
import { ActionsWrapper, DeleteButton, LineInBetween, StyledButton } from 'src/screens/saved-pokemons/styles';

import { BottomBarProps } from '../types';

const BottomBar: React.FC<BottomBarProps> = ({ colors, pokemon }) => {
    const dispatch = useDispatch();

    const alertHandler = () => {
        Alert.alert(
            `Remove ${capitalize(pokemon.name)}`,
            `You are about to remove ${capitalize(pokemon.name)}, you will lose all the ${
                pokemon.xp
            } XP and History of battles which you've gained`,
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

    const onTrainPress = () => {
        dispatch(trainPokemon({ name: pokemon.name, is_training: !pokemon.is_training }));
    };

    return (
        <ActionsWrapper borderColor={colors.primary}>
            <DeleteButton onPress={alertHandler}>
                <DeleteOutlined fill={colors.secondary} width="25px" />
            </DeleteButton>
            <LineInBetween borderColor={colors.primary} />
            <StyledButton onPress={onTrainPress}>
                <Flex paddingString="0 5px 0 0">
                    {pokemon.is_training ? (
                        <ActivityIndicator size={30} color={colors.secondary} />
                    ) : (
                        <Compass fill={colors.secondary} />
                    )}
                </Flex>
                <Typography type="bodyLarge">{pokemon.is_training ? 'Stop' : 'Train'}</Typography>
            </StyledButton>
            <LineInBetween borderColor={colors.primary} />
            <StyledButton>
                <Flex paddingString="0 5px 0 0">
                    <Dingtalk fill={colors.secondary} />
                </Flex>
                <Typography type="bodyLarge">Battle</Typography>
            </StyledButton>
        </ActionsWrapper>
    );
};

export default BottomBar;
