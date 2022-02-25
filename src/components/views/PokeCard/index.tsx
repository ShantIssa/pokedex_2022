import React, { useEffect } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { pokemonUrlToId } from 'src/utils/pokemonUrlToId';
import { setPokemons } from 'src/redux/slices/pokemons/slice';
import { selectPokemons } from 'src/redux/slices/pokemons/selectors';

import Pokemon from './elements/Pokemon';
import { PokeCardProps, PokemonType } from './types';

const PokeCard: React.FC<PokeCardProps> = ({ pokemons }) => {
    const dispatch = useDispatch();
    const selectedPokemons = useSelector(selectPokemons);
    useEffect(() => {
        dispatch(setPokemons(pokemons));
    }, [dispatch, pokemons]);
    console.log(selectedPokemons);
    return (
        <View>
            {selectedPokemons?.map(({ name, url }: PokemonType, key) => {
                return (
                    <View key={key}>
                        <Pokemon name={name} id={pokemonUrlToId(url)} />
                    </View>
                );
            })}
        </View>
    );
};

export default PokeCard;
