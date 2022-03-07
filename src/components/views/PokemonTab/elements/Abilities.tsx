import React from 'react';

import { AbilitiesProps } from '../types';
import { AbilityWrapper } from '../styles';
import Flex from '../../../shared/Flex';
import Typography from '../../../shared/Typography';

const Abilities: React.FC<AbilitiesProps> = ({ abilities, colors }) => {
    const renderAbilities = abilities.map((item) => (
        <AbilityWrapper backgroundColor={colors.primary} key={item.ability.url}>
            <Typography type="h4" textAlign="center" textTransform="capitalize" textStyle={{ color: colors.secondary }}>
                {item.ability.name}
            </Typography>
        </AbilityWrapper>
    ));

    return (
        <Flex marginString="20px 0">
            <Typography
                type="h1-small"
                textAlign="center"
                fontFamily="semiBold"
                textStyle={{ color: colors.secondary }}
            >
                Abilities
            </Typography>
            <Flex alignSelf="center" flexDirection="row">
                {renderAbilities}
            </Flex>
        </Flex>
    );
};

export default Abilities;
