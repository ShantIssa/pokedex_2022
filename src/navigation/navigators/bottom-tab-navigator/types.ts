import { StackScreenProps } from '@react-navigation/stack';

import { CardColors } from 'src/hooks/useImageColors/types';

import { ScreenRoutes } from '../../routes';

export type MainParamsList = {
    [ScreenRoutes.Main]: undefined;
    [ScreenRoutes.Pokemon]: { name: string; colors: CardColors; evolutionNames: string[]; imgUri: string };
};
export type AuthenticationStackProps<RouteName extends keyof MainParamsList> = StackScreenProps<
    MainParamsList,
    RouteName
> & { navigation: any };
