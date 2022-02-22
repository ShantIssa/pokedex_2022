import React from 'react';
import {View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from 'styled-components/native';

import {Pokeball, Rocket, RocketRed} from 'src/assets/icons';
import {Main, Settings} from 'src/screens';
import {styles} from 'src/navigation/navigators/authentication-navigator/styles';

import {ScreenRoutes} from '../../routes';

const Tab = createBottomTabNavigator();

const getTabIconsMapping = (route: ScreenRoutes, focused: boolean) => {
  const iconMap: {[key in ScreenRoutes]?: () => any} = {
    [ScreenRoutes.Main]: () => (focused ? Pokeball : Pokeball),
    [ScreenRoutes.Settings]: () => (focused ? RocketRed : Rocket),
  };
  return iconMap[route]?.();
};

const TabIcon: React.FC = ({children}) => {
  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
      {children}
    </View>
  );
};

const getTabBarIcon = (
  route: ScreenRoutes,
  focused: boolean,
  activeColor: string,
  inactiveColor: string,
) => {
  const Icon = getTabIconsMapping(route, focused);

  return (
    <TabIcon>
      <Icon
        height={24}
        width={24}
        color={focused ? activeColor : inactiveColor}
      />
    </TabIcon>
  );
};

const AuthenticationStackNavigator = () => {
  const theme = useTheme();

  const activeColor = theme.colors.secondary;
  const inactiveColor = theme.colors.primary;

  return (
    <Tab.Navigator
      initialRouteName={ScreenRoutes.Main}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarBounces: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: activeColor,
        tabBarInactiveTintColor: inactiveColor,
        tabBarIcon: ({focused}) =>
          getTabBarIcon(
            route.name as ScreenRoutes,
            focused,
            activeColor,
            inactiveColor,
          ),
      })}>
      <Tab.Screen name={ScreenRoutes.Main} component={Main} />
      <Tab.Screen name={ScreenRoutes.Settings} component={Settings} />
    </Tab.Navigator>
  );
};

export default AuthenticationStackNavigator;
