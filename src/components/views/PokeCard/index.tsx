import React, { useMemo } from 'react';
import { FlatList, View } from 'react-native';

import { pokemonUrlToId } from 'src/utils/pokemonUrlToId';

import Pokemon from './elements/Pokemon';
import { PokeCardProps } from './types';

const PokeCard: React.FC<PokeCardProps> = ({ pokemons }) => {
    const pokemonList = useMemo(
        () => (
            <FlatList
                data={pokemons}
                maxToRenderPerBatch={5}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                keyExtractor={({ url }) => url}
                renderItem={({ item }) => <Pokemon id={pokemonUrlToId(item.url)} />}
            />
        ),
        [pokemons],
    );

    return <View>{pokemons.length && pokemonList}</View>;
};

export default PokeCard;
