import { CardColors } from 'src/hooks/useImageColors/types';

export type AbilitiesProps = {
    abilities: any[];
    colors: CardColors;
};

export type Stats = {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
};

export type StatsProps = {
    stats: Stats[];
    colors: CardColors;
};
