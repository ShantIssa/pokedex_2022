import React from 'react';
import { Image, View } from 'react-native';

import { Flex, Typography } from 'src/components';

import { HeaderForegroundProps } from '../types';

const HeaderForeground: React.FC<HeaderForegroundProps> = ({ name, imgUri, colors }) => {
    return (
        <View>
            <Flex alignSelf="center">
                <Image source={{ uri: imgUri }} style={{ height: 200, width: 200 }} />
                <Typography
                    type="h1"
                    textAlign="center"
                    fontFamily="regular"
                    textTransform="capitalize"
                    textStyle={{ color: colors.secondary }}
                >
                    {name}
                </Typography>
            </Flex>
        </View>
    );
};

export default HeaderForeground;
