import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';

import { ScreenRoutes } from 'src/navigation/routes';
import { Flex, Typography, Button } from 'src/components';
import { CardHeaderProps } from 'src/components/views/PokeCard/types';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

const CardHeader: React.FC<CardHeaderProps> = ({ name, id, base_experience }) => {
    const navigation = useNavigation<MainScreenNavigatorStack>();

    return (
        <Flex marginString="12px" flexDirection="row" alignItems="center" justifyContent="space-between">
            <View>
                <Flex flexDirection="row" alignItems="center">
                    <Button onPress={() => navigation.navigate(ScreenRoutes.Pokemon, { name, id })}>
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
