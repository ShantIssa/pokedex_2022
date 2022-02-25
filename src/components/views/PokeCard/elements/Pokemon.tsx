import React from 'react';
import { useQuery } from 'react-query';
import { ActivityIndicator } from 'react-native';

import { useImageColors } from 'src/hooks';
import { PokeballCard } from 'src/assets/icons';
import { getPokemonById } from 'src/services/api/pokemons';

import WhiteCard from './WhiteCard';
import BottomBar from './BottomBar';
import CardHeader from './CardHeader';

import { PokemonViewType } from '../types';
import { Card, PokeballCardStyled, PokemonImg } from '../styles';

const Pokemon: React.FC<PokemonViewType> = ({ name, id }) => {
    const { data, isLoading } = useQuery(id, getPokemonById);
    const pokemonImg = data?.sprites?.other['official-artwork']?.front_default;

    const { picLoading, colors } = useImageColors(pokemonImg);

    const averageStrength =
        data?.stats
            ?.map((item: { base_stat: any }) => item.base_stat)
            .reduce((prev: number, curr: number) => prev + curr, 0) / data?.stats?.length;

    return isLoading || picLoading ? (
        <ActivityIndicator />
    ) : (
        <Card background={colors.primary}>
            <CardHeader name={name} id={data.id} base_experience={data.base_experience} />
            <PokeballCardStyled>
                <PokeballCard ballColor={colors.secondary} />
            </PokeballCardStyled>
            {pokemonImg && <PokemonImg source={{ uri: pokemonImg }} />}
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
