import React from 'react';

import { Wrapper, Typography } from '../../components';

const Pokemon: React.FC<any> = ({ route }) => {
    console.log(route);
    return (
        <Wrapper>
            <Typography>Pokemon</Typography>
        </Wrapper>
    );
};

export default Pokemon;
