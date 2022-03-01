import { StackScreenProps } from '@react-navigation/stack';

import { ScreenRoutes } from '../../routes';

export type MainParamsList = {
    [ScreenRoutes.Main]: undefined;
    [ScreenRoutes.Pokemon]: { name: string; id: string };
};
export type AuthenticationStackProps<RouteName extends keyof MainParamsList> = StackScreenProps<
    MainParamsList,
    RouteName
> & { navigation: any };
