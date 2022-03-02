import React from 'react';
import { useQuery } from 'react-query';
import { Alert, Image, View } from 'react-native';
import StickyParallaxHeader from 'react-native-sticky-parallax-header';
import { useNavigation } from '@react-navigation/native';

import Stats from 'src/screens/pokemon/components/Stats';
import { getPokemonById } from 'src/services/api/pokemons';

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
                title={name}
                snapValue={100}
                subtitle={name}
                bounces={false}
                snapToEdge={false}
                decelerationRate={300}
                //eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                image={{ uri: imgUri }}
                headerType="AvatarHeader"
                backgroundColor={colors.primary}
                backgroundImage={{ uri: imgUri }}
                contentContainerStyles={{ backgroundColor: 'white' }}
                leftTopIconOnPress={() => navigation.goBack()}
            >
                <View>
                    {!isLoading && (
                        <View>
                            <WhiteBackground>
                                <Image source={{ uri: imgUri }} style={{ height: 200, width: 200 }} />
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
