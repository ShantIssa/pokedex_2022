import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { Wrapper } from 'src/components';

import AuthenticationStackNavigator from './navigators/authentication-navigator';

const Navigation = () => {
    return (
        <NavigationContainer>
            <Wrapper>
                <StatusBar barStyle="light-content" />
                <AuthenticationStackNavigator />
            </Wrapper>
        </NavigationContainer>
    );
};

export default Navigation;
