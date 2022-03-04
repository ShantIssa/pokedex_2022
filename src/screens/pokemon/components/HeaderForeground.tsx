import React from 'react';
import { View } from 'react-native';

import { Flex, Typography } from 'src/components';

import { HeaderForegroundProps } from '../types';

const HeaderForeground: React.FC<HeaderForegroundProps> = ({ colors }) => {
    return (
        <View>
            <Flex marginString="30px" alignSelf="center">
                <Typography
                    type="h1"
                    textAlign="center"
                    fontFamily="regular"
                    textTransform="capitalize"
                    textStyle={{ color: colors.secondary }}
                >
                    Evolution
                </Typography>
            </Flex>
        </View>
    );
};

export default HeaderForeground;
