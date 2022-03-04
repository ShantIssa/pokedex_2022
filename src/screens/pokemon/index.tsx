import React from 'react';
import { useNavigation } from '@react-navigation/native';
import StickyParallaxHeader, { Tab } from 'react-native-sticky-parallax-header';

import { PokemonTab } from 'src/components';
import { capitalize } from 'src/utils/capitalize';
import HeaderForeground from 'src/screens/pokemon/components/HeaderForeground';

import { PokemonScreenProps } from './types';

const Pokemon: React.FC<PokemonScreenProps> = ({ route }) => {
    const { colors, evolutionNames } = route.params;

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
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            logo={null}
            bounces={false}
            snapToEdge={false}
            headerHeight={30}
            parallaxHeight={100}
            decelerationRate={300}
            rememberTabScrollPosition
            headerType="TabbedHeader"
            backgroundColor={'#8d8e8b'}
            tabTextActiveStyle={{ fontWeight: '600' }}
            foreground={() => <HeaderForeground colors={colors} />}
            tabs={tabsRenderer(evolutionNames) as unknown as Tab[]}
            tabTextContainerActiveStyle={{ backgroundColor: '#CCCDC6' }}
            tabsContainerStyle={{ width: '100%', justifyContent: 'space-evenly' }}
            tabTextStyle={{ fontWeight: '600', padding: 8, color: colors.secondary }}
            tabTextContainerStyle={{ backgroundColor: '#E8E9EB', borderRadius: 12 }}
        />
    );
};

export default Pokemon;
