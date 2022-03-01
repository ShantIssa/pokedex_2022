import React from 'react';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { Button } from 'src/components';
import { useImageColors } from 'src/hooks';
import { PokeballCard } from 'src/assets/icons';
import { ScreenRoutes } from 'src/navigation/routes';
import { getPokemonById } from 'src/services/api/pokemons';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

import Skeleton from './Skeleton';
import BottomBar from './BottomBar';
import WhiteCard from './WhiteCard';
import CardHeader from './CardHeader';

import { PokemonViewType } from '../types';
import { Card, PokeballCardStyled, PokemonImg } from '../styles';

const Pokemon: React.FC<PokemonViewType> = ({ name, id }) => {
    const navigation = useNavigation<MainScreenNavigatorStack>();

    const { data, isLoading } = useQuery(id, getPokemonById);

    const pokemonImg = data?.sprites?.other['official-artwork']?.front_default;

    const { picLoading, colors } = useImageColors(pokemonImg);

    const averageStrength =
        data?.stats
            ?.map((item: { base_stat: any }) => item.base_stat)
            .reduce((prev: number, curr: number) => prev + curr, 0) / data?.stats?.length;

    return isLoading || picLoading ? (
        <Skeleton />
    ) : (
        <Card background={colors.primary}>
            <CardHeader name={name} id={data.id} base_experience={data.base_experience} />
            <PokeballCardStyled>
                <PokeballCard ballColor={colors.secondary} />
            </PokeballCardStyled>
            <Button style={{ zIndex: 1 }} onPress={() => navigation.navigate(ScreenRoutes.Pokemon, { name, id })}>
                {pokemonImg && <PokemonImg source={{ uri: pokemonImg }} />}
            </Button>
            <WhiteCard
                name={name}
                colors={colors}
                types={data.types}
                height={data.height}
                weight={data.weight}
                abilities={data.abilities}
                averageStrength={Math.round(averageStrength)}
            />
            <BottomBar />
        </Card>
    );
};

export default Pokemon;
