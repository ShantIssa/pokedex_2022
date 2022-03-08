import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';

import { selectSavedPokemons } from 'src/redux/slices/pokemons/selectors';

import SavedPokemons from './components/SavedPokemons';

import { Wrapper } from '../../components';

const Settings = () => {
    const savedPokemons = useSelector(selectSavedPokemons).filter((item) => item.name);
    console.log(savedPokemons);
    return (
        <Wrapper>
            <FlatList data={savedPokemons} renderItem={({ item }) => <SavedPokemons name={item.name} />} />
        </Wrapper>
    );
};

export default Settings;
