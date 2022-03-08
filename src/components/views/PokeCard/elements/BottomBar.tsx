import React from 'react';
import Toast from 'react-native-toast-message';
import { Portal } from 'react-native-portalize';

import { PokeballGrey } from 'src/assets/icons';
import { toastConfig } from 'src/utils/toastConfig';
import { capitalize } from 'src/utils/capitalize';

import { BottomBarProps } from '../types';
import { BottomBarWrapper, PokeButton } from '../styles';

const BottomBar: React.FC<BottomBarProps> = ({ colors, name }) => {
    const showToast = () => {
        Toast.show({
            type: 'catch',
            props: { colors, name: capitalize(name), caught: true },
        });
    };

    return (
        <BottomBarWrapper borderColor={colors.primary}>
            <PokeButton onPress={showToast}>
                <PokeballGrey height={40} />
            </PokeButton>
            <Portal>
                <Toast config={toastConfig} />
            </Portal>
        </BottomBarWrapper>
    );
};

export default BottomBar;
