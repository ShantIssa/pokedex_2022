import {StyleSheet} from 'react-native';

import colors from 'src/theme/colors';

export const styles = StyleSheet.create({
  tabBarStyle: {
    height: 60,
    margin: 15,
    borderWidth: 2,
    borderTopWidth: 2,
    borderTopEndRadius: 20,
    borderTopStartRadius: 20,
    borderBottomEndRadius: 40,
    borderBottomStartRadius: 40,
    borderColor: colors.secondary,
    backgroundColor: colors.light,
    borderTopColor: colors.secondary,
  },
});
