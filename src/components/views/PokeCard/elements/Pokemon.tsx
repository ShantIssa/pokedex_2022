import React from 'react';
import { useQuery } from 'react-query';
import { useNavigation } from '@react-navigation/native';

import { useImageColors } from 'src/hooks';
import { PokeballCard } from 'src/assets/icons';
import { ScreenRoutes } from 'src/navigation/routes';
import { averageStrengthCalculator } from 'src/utils/averageStrengthCalculator';
import { getPokemonByEvlotuionId, getSinglePokemon } from 'src/services/api/pokemons';
import { MainScreenNavigatorStack } from 'src/navigation/navigators/main-screen-navigator/types';

import Skeleton from './Skeleton';
import BottomBar from './BottomBar';
import WhiteCard from './WhiteCard';
import CardHeader from './CardHeader';

import { PokemonViewType } from '../types';
import Button from '../../../shared/Button';
import { Card, PokeballCardStyled, PokemonImg } from '../styles';

const Pokemon: React.FC<PokemonViewType> = ({ id }) => {
    const { data: evolutionData, isLoading: evolutionLoading } = useQuery(id, getPokemonByEvlotuionId);

    const { data: pokemon, isLoading: pokemonLoading } = useQuery(
        evolutionData?.chain?.species?.name || '',
        getSinglePokemon,
    );

    const navigation = useNavigation<MainScreenNavigatorStack>();

    const pokemonImg = pokemon?.sprites?.other['official-artwork']?.front_default;

    const { picLoading, colors } = useImageColors(pokemonImg);

    const averageStrength = averageStrengthCalculator(pokemon?.stats);

    const navigateToPokemonScreen = () => {
        navigation.navigate(ScreenRoutes.Pokemon, {
            name: pokemon?.name,
            colors,
            imgUri: pokemonImg,
            evolutionNames: [
                evolutionData?.chain?.species?.name,
                evolutionData?.chain?.evolves_to[0]?.species?.name,
                evolutionData?.chain?.evolves_to[0]?.evolves_to[0]?.species?.name,
            ].filter((i) => i !== undefined),
        });
    };

    const isLoading = pokemonLoading || evolutionLoading || picLoading;

    return isLoading ? (
        <Skeleton />
    ) : (
        <Card background={colors.primary}>
            <CardHeader
                name={pokemon.name}
                base_experience={pokemon.base_experience}
                navigateToPokemonScreen={navigateToPokemonScreen}
            />
            <PokeballCardStyled>
                <PokeballCard ballColor={colors.secondary} />
            </PokeballCardStyled>
            <Button style={{ zIndex: 1 }} onPress={navigateToPokemonScreen}>
                {pokemonImg && <PokemonImg source={{ uri: pokemonImg }} />}
            </Button>
            <WhiteCard
                colors={colors}
                name={pokemon.name}
                types={pokemon.types}
                height={pokemon.height}
                weight={pokemon.weight}
                abilities={pokemon.abilities}
                averageStrength={Math.round(averageStrength)}
            />
            <BottomBar />
        </Card>
    );
};

export default Pokemon;
