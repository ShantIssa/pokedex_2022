import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SavedPokemons } from 'src/screens';
import { ScreenRoutes } from 'src/navigation/routes';

const Stack = createStackNavigator();

const SavedPokemonsScreen = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={ScreenRoutes.SavedPokemons} component={SavedPokemons} />
        </Stack.Navigator>
    );
};

export default SavedPokemonsScreen;
