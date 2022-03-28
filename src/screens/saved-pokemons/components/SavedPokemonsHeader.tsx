import React from 'react';
import { View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Flex, Typography } from 'src/components';

const SavedPokemonsHeader = () => (
    <SafeAreaView>
        <Flex paddingString="10px 0 ">
            <Typography type="bodyLarge">Saved</Typography>
        </Flex>
    </SafeAreaView>
);

export default SavedPokemonsHeader;
