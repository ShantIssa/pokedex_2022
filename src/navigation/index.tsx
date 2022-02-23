import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import AuthenticationStackNavigator from './navigators/authentication-navigator';

const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <AuthenticationStackNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
