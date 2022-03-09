import React from 'react';
import Toast from 'react-native-toast-message';
import { Portal } from 'react-native-portalize';
import { useDispatch, useSelector } from 'react-redux';

import { PokeballGrey } from 'src/assets/icons';
import { capitalize } from 'src/utils/capitalize';
import { Flex, Typography } from 'src/components';
import { toastConfig } from 'src/utils/toastConfig';
import { savePokemon, removePokemon } from 'src/redux/slices/pokemons/slice';
import { selectSavedPokemons, selectSlots } from 'src/redux/slices/pokemons/selectors';

import { BottomBarProps } from '../types';
import { BottomBarWrapper, PokeButton } from '../styles';

const BottomBar: React.FC<BottomBarProps> = ({ colors, name }) => {
    const dispatch = useDispatch();
    const slotsQuantity = useSelector(selectSlots);
    const savedPokemons = useSelector(selectSavedPokemons);

    const caught = savedPokemons.some((item) => item.name === name);

    const showToast = () => {
        if (slotsQuantity === savedPokemons.length) {
            Toast.show({
                type: 'limit',
                props: { colors, name: capitalize(name), slotsQuantity },
            });
            if (caught) {
                Toast.show({
                    type: 'release',
                    props: { colors, name: capitalize(name) },
                });
                dispatch(removePokemon({ name }));
            }
        } else {
            if (!caught) {
                dispatch(savePokemon(name));
                Toast.show({
                    type: 'catch',
                    props: { colors, name: capitalize(name) },
                });
            }
        }
    };

    return (
        <BottomBarWrapper borderColor={colors.primary}>
            <PokeButton onPress={showToast}>
                <Flex flexDirection="row" alignItems="center">
                    <PokeballGrey height={40} />
                    <Flex paddingString="0 10px">
                        <Typography type="bodyLarge">{caught ? 'Release' : 'Catch'}</Typography>
                    </Flex>
                </Flex>
            </PokeButton>
            <Portal>
                <Toast config={toastConfig} />
            </Portal>
        </BottomBarWrapper>
    );
};

export default BottomBar;
