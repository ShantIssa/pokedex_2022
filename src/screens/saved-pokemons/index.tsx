import React from 'react';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { selectSavedPokemons } from 'src/redux/slices/pokemons/selectors';
import { Typography } from 'src/components';
import { PokeballCard } from 'src/assets/icons';
import { ScreenRoutes } from 'src/navigation/routes';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

import SavedPokemonRow from './components/SavedPokemonRow';
import { NavigateHomeBtn, BindBottomView, PokeballCardWrapper } from './styles';

import { Wrapper } from '../../components';

const SavedPokemons = () => {
    const navigation = useNavigation<MainScreenNavigatorStack>();
    const savedPokemons = useSelector(selectSavedPokemons);

    return (
        <Wrapper>
            {savedPokemons.length ? (
                <FlatList
                    bounces={false}
                    data={savedPokemons}
                    pinchGestureEnabled={true}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => <SavedPokemonRow pokemon={item} />}
                />
            ) : (
                <BindBottomView>
                    <PokeballCardWrapper>
                        <PokeballCard ballColor="red" />
                    </PokeballCardWrapper>
                    <Typography fontFamily="semiBold" type="labelAlt" textAlign="center">
                        You may add a pokemon in your slots from "Home Screen"
                    </Typography>
                    <NavigateHomeBtn onPress={() => navigation.navigate(ScreenRoutes.Main)}>
                        <Typography color="light" textAlign="center" type="bodyLarge">
                            Navigate Home
                        </Typography>
                    </NavigateHomeBtn>
                </BindBottomView>
            )}
        </Wrapper>
    );
};

export default SavedPokemons;
