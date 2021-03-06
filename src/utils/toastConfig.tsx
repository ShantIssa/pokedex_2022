import React from 'react';
import { BaseToast } from 'react-native-toast-message';

import { fonts } from 'src/theme';
import { PokeballGrey } from 'src/assets/icons';
import Flex from 'src/components/shared/Flex';
import { IS_ANDROID } from 'src/constants/constants';

export const toastConfig = {
    catch: ({ props: { colors, name } }: any) => {
        return (
            <BaseToast
                renderLeadingIcon={() => (
                    <Flex alignItems="center" paddingString="15px">
                        <PokeballGrey />
                    </Flex>
                )}
                style={{
                    marginTop: IS_ANDROID ? -30 : 0,
                    borderLeftColor: colors.secondary,
                    borderRightColor: colors.secondary,
                    borderRightWidth: 5,
                }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 16,
                    fontFamily: fonts.medium,
                    fontWeight: '400',
                }}
                text1="Catch"
                text2={name}
                text2Style={{
                    fontSize: 20,
                    fontWeight: '600',
                    fontFamily: fonts.medium,
                    color: colors.primary,
                }}
            />
        );
    },
    release: ({ props: { colors, name } }: any) => {
        return (
            <BaseToast
                renderLeadingIcon={() => (
                    <Flex alignItems="center" paddingString="15px">
                        <PokeballGrey />
                    </Flex>
                )}
                style={{
                    marginTop: IS_ANDROID ? -30 : 0,
                    borderLeftColor: colors.secondary,
                    borderRightColor: colors.secondary,
                    borderRightWidth: 5,
                }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 16,
                    fontFamily: fonts.medium,
                    fontWeight: '400',
                }}
                text1="Release"
                text2={name}
                text2Style={{
                    fontSize: 20,
                    fontWeight: '600',
                    fontFamily: fonts.medium,
                    color: colors.primary,
                }}
            />
        );
    },
    limit: ({ props: { colors, name, slotsQuantity } }: any) => {
        return (
            <BaseToast
                style={{
                    marginTop: IS_ANDROID ? -30 : 0,
                    borderRightWidth: 5,
                    borderLeftColor: colors.secondary,
                    borderRightColor: colors.secondary,
                }}
                contentContainerStyle={{ paddingHorizontal: 15 }}
                text1Style={{
                    fontSize: 16,
                    fontFamily: fonts.medium,
                    fontWeight: '400',
                }}
                text2={`Slots are limited to ${slotsQuantity}`}
                text1={`Gain more XP to catch ${name}`}
                text2Style={{
                    fontSize: 16,
                    fontWeight: '600',
                    fontFamily: fonts.medium,
                    color: colors.primary,
                }}
            />
        );
    },
};
