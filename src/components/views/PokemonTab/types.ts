import { CardColors } from 'src/hooks/useImageColors/types';
import { Stats } from 'src/utils/averageStrengthCalculator';

export type PokemonTabProps = {
    name: string;
    colors: CardColors;
};

export type AbilitiesProps = {
    abilities: any[];
    colors: CardColors;
};

export type StatsProps = {
    stats: Stats[];
    colors: CardColors;
};
