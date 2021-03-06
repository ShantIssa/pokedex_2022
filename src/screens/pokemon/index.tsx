import React from 'react';
import StickyParallaxHeader, { Tab } from 'react-native-sticky-parallax-header';

import { PokemonTab } from 'src/components';
import { capitalize } from 'src/utils/capitalize';
import HeaderForeground from 'src/screens/pokemon/components/HeaderForeground';

import { PokemonScreenProps } from './types';

const Pokemon: React.FC<PokemonScreenProps> = ({ route }) => {
    const { colors, evolutionNames } = route.params;

    const tabsRenderer = (pokeNames: string[]) =>
        pokeNames.map((name) => ({
            title: capitalize(name),
            content: <PokemonTab colors={colors} name={name} />,
        }));

    return (
        <StickyParallaxHeader
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            logo={null}
            bounces={false}
            headerHeight={30}
            snapToEdge={false}
            parallaxHeight={100}
            decelerationRate={300}
            headerType="TabbedHeader"
            rememberTabScrollPosition
            backgroundColor={colors.primary}
            foreground={() => <HeaderForeground />}
            tabTextActiveStyle={{ fontWeight: '600' }}
            tabs={tabsRenderer(evolutionNames) as unknown as Tab[]}
            tabTextContainerActiveStyle={{ backgroundColor: '#CCCDC6' }}
            tabsContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }}
            tabTextStyle={{ fontWeight: '600', padding: 8, color: 'black' }}
            tabTextContainerStyle={{ backgroundColor: '#E8E9EB', borderRadius: 8 }}
        />
    );
};

export default Pokemon;
