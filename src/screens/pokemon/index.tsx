import React from 'react';
import { useNavigation } from '@react-navigation/native';
import StickyParallaxHeader, { Tab } from 'react-native-sticky-parallax-header';

import { capitalize } from 'src/utils/capitalize';
import HeaderForeground from 'src/screens/pokemon/components/HeaderForeground';
import { PokemonTab } from 'src/components';

import { PokemonScreenProps } from './types';

const Pokemon: React.FC<PokemonScreenProps> = ({ route }) => {
    const { name, colors, evolutionNames, imgUri } = route.params;

    const navigation = useNavigation();

    const tabsRenderer = (pokeNames: string[]) => {
        return pokeNames.map((i) => {
            return {
                title: capitalize(i),
                content: <PokemonTab colors={colors} name={i} />,
            };
        });
    };

    return (
        <StickyParallaxHeader
            bounces={false}
            snapToEdge={false}
            decelerationRate={300}
            headerHeight={30}
            rememberTabScrollPosition
            headerType="TabbedHeader"
            backgroundColor={colors.primary}
            tabTextActiveStyle={{ fontWeight: '600' }}
            tabsContainerStyle={{ width: 300, justifyContent: 'space-between' }}
            tabTextContainerStyle={{ backgroundColor: 'white', borderRadius: 10 }}
            tabTextContainerActiveStyle={{ backgroundColor: colors.secondary }}
            tabTextStyle={{ fontWeight: '600', padding: 8 }}
            tabs={tabsRenderer(evolutionNames) as unknown as Tab[]}
            //eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            logo={{ uri: null }}
            foreground={() => <HeaderForeground name={name} colors={colors} imgUri={imgUri} />}
        />
    );
};

export default Pokemon;
