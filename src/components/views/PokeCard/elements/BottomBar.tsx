import React from 'react';

import { PokeballGrey, Save } from 'src/assets/icons';

import { BottomBarWrapper, PokeButton } from '../styles';

const BottomBar = () => {
    return (
        <BottomBarWrapper>
            <PokeButton>
                <PokeballGrey height={40} />
            </PokeButton>
            <PokeButton>
                <Save height={40} />
            </PokeButton>
        </BottomBarWrapper>
    );
};

export default BottomBar;
