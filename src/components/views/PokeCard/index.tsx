import React from 'react';
import { View } from 'react-native';

import { pokemonUrlToId } from 'src/utils/pokemonUrlToId';

import Pokemon from './elements/Pokemon';
import { PokeCardProps, PokemonType } from './types';

const PokeCard: React.FC<PokeCardProps> = ({ pokemons }) => {
    return (
        <View>
            {pokemons?.map(({ name, url }: PokemonType, key) => {
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
