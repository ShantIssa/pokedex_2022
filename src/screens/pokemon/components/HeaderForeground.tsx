import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Flex, Typography } from 'src/components';
import { LeftArrow } from 'src/assets/icons';

import { HeaderForegroundProps } from '../types';

const HeaderForeground: React.FC<HeaderForegroundProps> = ({ colors }) => {
    const navigation = useNavigation();

    return (
        <Flex marginString="30px" justifyContent="space-between" alignItems="center" flexDirection="row">
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <LeftArrow />
            </TouchableOpacity>
            <Typography
                type="h1"
                textAlign="center"
                fontFamily="regular"
                textTransform="capitalize"
                textStyle={{ color: colors.secondary }}
            >
                Evolution
            </Typography>
            <Flex marginString="0 9px" />
        </Flex>
    );
};

export default HeaderForeground;
