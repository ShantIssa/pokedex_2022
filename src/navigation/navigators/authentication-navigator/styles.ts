import { StyleSheet } from 'react-native';

import colors from 'src/theme/colors';

export const styles = StyleSheet.create({
    tabBarStyle: {
        height: 60,
        marginHorizontal: 10,
        borderWidth: 1.2,
        borderTopWidth: 1.2,
        borderTopEndRadius: 25,
        borderTopStartRadius: 25,
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
        borderColor: colors.secondary,
        backgroundColor: colors.light,
        borderTopColor: colors.secondary,
    },
});
