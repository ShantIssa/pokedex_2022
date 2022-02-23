import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ImageColors from 'react-native-image-colors';
import { ActivityIndicator, View } from 'react-native';

import { Typography } from 'src/components';
import { getPokemonById } from 'src/services/api/pokemons';

import { PokemonViewType } from './types';
import { Card, PokemonImg } from './styles';

const initialState = {
    rawResult: '',
};

const Pokemon: React.FC<PokemonViewType> = ({ name, id }) => {
    const [color, setColor] = useState<string>('transparent');
    const [loading, setLoading] = useState(true);
    const { data, isLoading } = useQuery(id, getPokemonById);
    const pokemonImg = data?.sprites?.other['official-artwork']?.front_default;

    useEffect(() => {
        const fetchColors = async () => {
            if (!isLoading) {
                const result = await ImageColors.getColors(pokemonImg, {
                    fallback: '#000000',
                    quality: 'highest',
                    pixelSpacing: 5,
                    cache: true,
                    headers: {
                        authorization: 'Basic 123',
                    },
                });

                switch (result.platform) {
                    case 'android':
                        setColor(result.dominant || 'transparent');
                        break;
                    case 'web':
                        setColor(result.dominant || 'transparent');
                        break;
                    case 'ios':
                        setColor(result.background || 'transparent');
                        break;
                    default:
                        throw new Error('Unexpected platform');
                }

                setLoading(false);
            }
        };

        fetchColors();
    }, [isLoading, pokemonImg]);

    return isLoading || loading ? (
        <ActivityIndicator />
    ) : (
        <Card color={color}>
            <View>
                <Typography>{name}</Typography>
                {pokemonImg && <PokemonImg source={{ uri: pokemonImg }} />}
            </View>
        </Card>
    );
};

export default Pokemon;
