import React from 'react';
import { View } from 'react-native';

import { Flex, Typography } from 'src/components';

import { StatsProps } from '../types';

const Stats: React.FC<StatsProps> = ({ stats }) => {
    //     base_stat: number;
    //     effort: number;
    //     stat: { name: string; url: string };

    const statsRenderer = stats.map((item) => {
        return (
            <View>
                <Typography type="bodyLarge" textTransform="capitalize">
                    {item.base_stat} {item.stat.name}
                </Typography>
            </View>
        );
    });
    return (
        <View>
            <Flex alignSelf="center" width={'120px'}>
                {statsRenderer}
            </Flex>
        </View>
    );
};

export default Stats;
