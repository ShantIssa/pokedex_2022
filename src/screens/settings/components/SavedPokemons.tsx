import React from 'react';
import { View } from 'react-native';

import { Typography } from 'src/components';

const SavedPokemons: React.FC<any> = ({ name }) => {
    return (
        <View>
            <Typography color="dark">{name}</Typography>
        </View>
    );
};

export default SavedPokemons;
