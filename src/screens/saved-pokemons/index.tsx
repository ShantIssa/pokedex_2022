import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import { selectSavedPokemons } from 'src/redux/slices/pokemons/selectors';

import SavedPokemons from './components/SavedPokemons';

import { Wrapper } from '../../components';

const Settings = () => {
    const savedPokemons = useSelector(selectSavedPokemons);
    return (
        <Wrapper>
            <FlatList
                bounces={false}
                data={savedPokemons}
                renderItem={({ item }) => <SavedPokemons pokemon={item} />}
            />
        </Wrapper>
    );
};

export default Settings;
