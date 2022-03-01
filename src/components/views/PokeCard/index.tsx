import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { pokemonUrlToId } from 'src/utils/pokemonUrlToId';

import Pokemon from './elements/Pokemon';
import { PokeCardProps } from './types';

const PokeCard: React.FC<PokeCardProps> = ({ pokemons }) => {
    const pokemonList = useMemo(() => {
        return (
            <FlatList
                data={pokemons}
                showsVerticalScrollIndicator={false}
                keyExtractor={({ url }) => url}
                renderItem={({ item }) => <Pokemon name={item.name} id={pokemonUrlToId(item.url)} url={item.url} />}
            />
        );
    }, [pokemons]);

    return <View>{pokemons.length && pokemonList}</View>;
};

export default PokeCard;
