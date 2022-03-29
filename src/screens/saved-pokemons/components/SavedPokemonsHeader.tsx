import React from 'react';
import { useSelector } from 'react-redux';

import { PokeballGrey } from 'src/assets/icons';
import { IS_IOS } from 'src/constants/constants';
import { Flex, Typography } from 'src/components';
import { selectSlots, selectSavedPokemons } from 'src/redux/slices/pokemons/selectors';

const SavedPokemonsHeader = () => {
    const slots = useSelector(selectSlots);
    const savedPokemons = useSelector(selectSavedPokemons);
    return (
        <Flex
            alignItems="center"
            flexDirection="row"
            justifyContent="space-between"
            paddingString={IS_IOS ? '40px 10px 10px 10px' : '10px 10px'}
        >
            <PokeballGrey />
            <Typography type="bodyLarge">
                Slots: {savedPokemons.length}/{slots}
            </Typography>
            <Typography type="bodyLarge" />
        </Flex>
    );
};

export default SavedPokemonsHeader;
