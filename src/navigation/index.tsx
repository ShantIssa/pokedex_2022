import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import BottomTabNavigator from './navigators/bottom-tab-navigator';

const Navigation = () => {
    return (
        <NavigationContainer>
            <StatusBar barStyle="light-content" />
            <BottomTabNavigator />
        </NavigationContainer>
    );
};

export default Navigation;
