import React, { useEffect, useMemo } from 'react';
import { FlatList, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { pokemonUrlToId } from 'src/utils/pokemonUrlToId';
import { selectPokemons } from 'src/redux/slices/pokemons/selectors';
import { setPokemons } from 'src/redux/slices/pokemons/slice';

import Pokemon from './elements/Pokemon';
import { PokeCardProps } from './types';

const PokeCard: React.FC<PokeCardProps> = ({ pokemons }) => {
    const dispatch = useDispatch();
    const selectedPokemons = useSelector(selectPokemons);

    useEffect(() => {
        dispatch(setPokemons([...selectedPokemons, ...pokemons]));
    }, [dispatch, pokemons, selectedPokemons]);

    const pokemonList = useMemo(() => {
        return (
            <FlatList
                data={selectedPokemons}
                showsVerticalScrollIndicator={false}
                keyExtractor={({ url }) => url}
                renderItem={({ item }) => <Pokemon name={item.name} id={pokemonUrlToId(item.url)} />}
            />
        );
    }, [selectedPokemons]);

    return <View>{selectedPokemons && pokemonList}</View>;
};

export default PokeCard;
