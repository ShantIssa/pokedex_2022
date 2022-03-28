import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import { selectSavedPokemons } from 'src/redux/slices/pokemons/selectors';

import SavedPokemonRow from './components/SavedPokemonRow';

import { Wrapper } from '../../components';

const SavedPokemons = () => {
    const savedPokemons = useSelector(selectSavedPokemons);
    return (
        <Wrapper>
            <FlatList
                bounces={false}
                data={savedPokemons}
                renderItem={({ item }) => <SavedPokemonRow pokemon={item} />}
            />
        </Wrapper>
    );
};

export default SavedPokemons;
