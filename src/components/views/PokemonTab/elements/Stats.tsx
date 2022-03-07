import React from 'react';
import { FlatList, View } from 'react-native';

import { Flex, Typography } from 'src/components';
import { MULTIPLY_STRENGTH } from 'src/constants/constants';
import { averageStrengthCalculator } from 'src/utils/averageStrengthCalculator';
import { StrengthBackground, StrengthColored } from 'src/screens/pokemon/styles';

import { StatsProps } from '../types';

const Stats: React.FC<StatsProps> = ({ stats, colors }) => {
    const statsRenderer = ({ item: { base_stat, stat } }: any) => {
        const width = Math.round(base_stat * MULTIPLY_STRENGTH);
        return (
            <Flex marginString="3px 0" key={stat.url}>
                <Typography type="bodyLarge" textTransform="capitalize">
                    {base_stat} {stat.name}
                </Typography>
                <StrengthBackground background={colors.primary}>
                    <StrengthColored width={width} background={colors.secondary} />
                </StrengthBackground>
            </Flex>
        );
    };
    const avgStrength = averageStrengthCalculator(stats);
    const avgStrengthWidth = Math.round(avgStrength * MULTIPLY_STRENGTH);

    return (
        <Flex alignSelf="center" width="200px">
            <FlatList data={stats} renderItem={statsRenderer} />
            <Typography type="bodyLarge" textTransform="capitalize">
                {avgStrength} Avg Strength
            </Typography>
            <StrengthBackground background={colors.primary}>
                <StrengthColored width={avgStrengthWidth} background={colors.secondary} />
            </StrengthBackground>
        </Flex>
    );
};

export default Stats;
