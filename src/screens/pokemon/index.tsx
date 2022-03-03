import React from 'react';
import { useQuery } from 'react-query';
import { Alert, Image, View } from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import { useNavigation } from '@react-navigation/native';

import Stats from 'src/screens/pokemon/components/Stats';
import { getPokemonById } from 'src/services/api/pokemons';
import { capitilize } from 'src/utils/capitilze';
import HeaderForeground from 'src/screens/pokemon/components/HeaderForeground';

import { WhiteBackground } from './styles';
import Abilities from './components/Abilities';

import { Typography } from '../../components';

const Pokemon: React.FC<any> = ({ route }) => {
    const { id, name, colors } = route.params;
    const { data, isLoading } = useQuery(id, getPokemonById);

    const stats = data?.stats;
    const abilities = data?.abilities;
    const imgUri = data?.sprites?.other['official-artwork']?.front_default;

    const navigation = useNavigation();
    return (
        <>
            <StickyParallaxHeader
                bounces={false}
                snapToEdge={false}
                decelerationRate={300}
                rememberTabScrollPosition
                headerType="TabbedHeader"
                backgroundColor={colors.primary}
                //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                logo={{ uri: null }}
                foreground={() => <HeaderForeground name={name} colors={colors} imgUri={imgUri} />}
            >
                <View>
                    {!isLoading && (
                        <View>
                            <WhiteBackground>
                                <Typography
                                    type="h1"
                                    textAlign="center"
                                    textTransform="capitalize"
                                    textStyle={{ color: colors.primary }}
                                >
                                    {name}
                                </Typography>
                            </WhiteBackground>

                            <Abilities colors={colors} abilities={abilities} />
                            <Stats colors={colors} stats={stats} />
                        </View>
                    )}
                </View>
            </StickyParallaxHeader>
        </>
    );
};

export default Pokemon;
