import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import ImageColors from 'react-native-image-colors';
import { ActivityIndicator } from 'react-native';

import { Typography } from 'src/components';
import { getPokemonById } from 'src/services/api/pokemons';

import { CardColors, PokemonViewType } from './types';
import { Card, PokemonImg } from './styles';

const Pokemon: React.FC<PokemonViewType> = ({ name, id }) => {
    const [colors, setColor] = useState<CardColors>({ background: 'transparent', border: 'transparent' });
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
                        setColor({
                            border: result.darkMuted || 'transparent',
                            background: result.dominant || 'transparent',
                        });
                        break;
                    case 'web':
                        setColor({
                            border: result.darkMuted || 'transparent',
                            background: result.dominant || 'transparent',
                        });
                        break;
                    case 'ios':
                        setColor({
                            border: result.background || 'transparent',
                            background: result.secondary || 'transparent',
                        });
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
        <Card colors={colors}>
            <Typography>{name}</Typography>
            {pokemonImg && <PokemonImg source={{ uri: pokemonImg }} />}
        </Card>
    );
};

export default Pokemon;
