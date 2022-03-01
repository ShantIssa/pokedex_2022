import React from 'react';
import { View } from 'react-native';

import Flex from '../../../shared/Flex';
import { CardHeaderProps } from '../types';
import Button from '../../../shared/Button';
import Typography from '../../../shared/Typography';

const CardHeader: React.FC<CardHeaderProps> = ({ name, id, base_experience, navigateToPokemonScreen }) => {
    return (
        <Flex marginString="12px" flexDirection="row" alignItems="center" justifyContent="space-between">
            <View>
                <Flex flexDirection="row" alignItems="center">
                    <Button onPress={navigateToPokemonScreen}>
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
                    </Button>
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
};

export default CardHeader;
