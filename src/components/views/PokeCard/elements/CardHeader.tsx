import React from 'react';
import { View } from 'react-native';

import { Flex, Typography } from 'src/components';
import { CardHeaderProps } from 'src/components/views/PokeCard/types';

const CardHeader: React.FC<CardHeaderProps> = ({ name, id, base_experience }) => (
    <Flex marginString="12px" flexDirection="row" alignItems="center" justifyContent="space-between">
        <View>
            <Flex flexDirection="row" alignItems="center">
                <Flex marginString="0 10px 0 10px">
                    <Typography
                        color="dark"
                        type="h1-small"
                        fontFamily="bold"
                        textAlign="left"
                        textTransform="capitalize"
                    >
                        {name}
                    </Typography>
                </Flex>
                <Typography color="dark" type="h1-small" textAlign="left" textTransform="capitalize">
                    #{id}
                </Typography>
            </Flex>
        </View>
        <View>
            <Typography color="dark" type="h2" fontFamily="bold" textAlign="left" textTransform="capitalize">
                {base_experience} Base xp
            </Typography>
        </View>
    </Flex>
);

export default CardHeader;
