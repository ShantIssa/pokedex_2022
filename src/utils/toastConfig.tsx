import React from 'react';
import { BaseToast } from 'react-native-toast-message';

import { PokeballGrey } from 'src/assets/icons';
import { Flex } from 'src/components';

export const toastConfig = {
    catch: ({ props: { colors, name, caught } }: any) => {
        return (
            <BaseToast
                renderLeadingIcon={() => (
                    <Flex alignItems="center" paddingString="15px">
                        <PokeballGrey />
                    </Flex>
                )}
                style={{ borderLeftColor: colors.secondary, borderRightColor: colors.secondary, borderRightWidth: 5 }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 16,
                    fontWeight: '400',
                }}
                text1={!caught ? 'Release' : 'Catch'}
                text2={name}
                text2Style={{
                    fontSize: 20,
                    fontWeight: '600',
                    color: colors.primary,
                }}
            />
        );
    },
};
