import React from 'react';
import { View } from 'react-native';

import { Flex, Typography } from 'src/components';

import { AbilitiesProps } from '../types';

const Abilities: React.FC<AbilitiesProps> = ({ abilities, colors }) => {
    const renderAbilities = abilities.map((item) => {
        return (
            <Typography
                type="h4"
                textAlign="center"
                key={item.ability.url}
                textTransform="capitalize"
                textStyle={{ color: colors.tertiary }}
            >
                {item.ability.name}
            </Typography>
        );
    });
    return (
        <Flex marginString="20px 0">
            <Typography textAlign="center" textStyle={{ color: colors.primary }} type="bodyLarge" fontFamily="semiBold">
                Abilities
            </Typography>
            {renderAbilities}
        </Flex>
    );
};

export default Abilities;
