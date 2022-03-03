import React from 'react';
import { View } from 'react-native';

import { Flex, Typography } from 'src/components';
import { MULTIPLY_STRENGTH } from 'src/constants/constants';
import { averageStrengthCalculator } from 'src/utils/averageStrengthCalculator';
import { StrengthBackground, StrengthColored } from 'src/screens/pokemon/styles';

import { StatsProps } from '../types';

const Stats: React.FC<StatsProps> = ({ stats, colors }) => {
    const statsRenderer = stats.map((item) => {
        const width = Math.round(item.base_stat * MULTIPLY_STRENGTH);
        return (
            <View key={item.stat.url}>
                <Typography type="bodyLarge" textTransform="capitalize">
                    {item.base_stat} {item.stat.name}
                </Typography>
                <StrengthBackground>
                    <StrengthColored width={width} background={colors.secondary} />
                </StrengthBackground>
            </View>
        );
    });
    const avgStrength = averageStrengthCalculator(stats);
    const avgStrengthWidth = Math.round(avgStrength * MULTIPLY_STRENGTH);

    return (
        <View>
            <Flex alignSelf="center" width="100px">
                <Typography type="bodyLarge" textTransform="capitalize">
                    {avgStrength} Average Strength
                </Typography>
                <StrengthBackground>
                    <StrengthColored width={avgStrengthWidth} background={colors.secondary} />
                </StrengthBackground>
                {statsRenderer}
            </Flex>
        </View>
    );
};

export default Stats;
