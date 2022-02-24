import React from 'react';

import { Flex, Typography } from 'src/components';

import { WhiteCardProps } from '../types';
import { PokemonColorText, WhiteCardWrapper, LinesFlex, TagCard } from '../styles';

const WhiteCard: React.FC<WhiteCardProps> = ({ height, name, weight, colors, abilities, types }) => {
    console.log(abilities);

    const abilitiesRenderer = abilities.map(({ slot, ability }: any) => {
        return (
            <Typography key={slot} textTransform="capitalize" type="h3">
                {ability.name}
            </Typography>
        );
    });

    const typesTags = types.map(({ slot, type }: any) => {
        return (
            <TagCard paddingString="5px 12px" background={colors.tertiary} marginString="0 12px 0 0" key={slot}>
                <Typography color="light" textTransform="capitalize" type="h3" fontFamily="bold">
                    {type.name}
                </Typography>
            </TagCard>
        );
    });
    return (
        <WhiteCardWrapper>
            <Flex flexDirection="row" alignItems="center">
                <PokemonColorText type="h1-small" pokemonColor={colors.tertiary}>
                    About
                </PokemonColorText>
                <Flex marginString="0 0 0 4px">
                    <PokemonColorText textTransform="capitalize" type="h1-small" pokemonColor={colors.tertiary}>
                        {name}
                    </PokemonColorText>
                </Flex>
            </Flex>
            <Flex width="290px" flexDirection="row" marginString="12px 0 0 0" justifyContent="space-between">
                <Flex>
                    <Typography type="bodyLarge" fontFamily="semiBold">
                        Height
                    </Typography>
                    <Typography type="h3">{height * 10} cm</Typography>
                </Flex>
                <LinesFlex borderColor={colors.tertiary} paddingString="0 20px">
                    <Typography type="bodyLarge" fontFamily="semiBold">
                        Weight
                    </Typography>
                    <Typography type="h3">{weight / 10} kg</Typography>
                </LinesFlex>
                <Flex>
                    <Typography type="bodyLarge" fontFamily="semiBold">
                        Abilities
                    </Typography>
                    {abilitiesRenderer}
                </Flex>
            </Flex>
            <Flex marginString="12px 38px" alignSelf="flex-start">
                <Typography type="bodyLarge" fontFamily="semiBold">
                    Types
                </Typography>
                <Flex width="290px" flexDirection="row" marginString="12px 0">
                    {typesTags}
                </Flex>
            </Flex>
        </WhiteCardWrapper>
    );
};

export default WhiteCard;
