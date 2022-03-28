import { CardColors } from 'src/hooks/useImageColors/types';

export type PokemonScreenProps = {
    route: {
        params: {
            name: string;
            imgUri: string;
            colors: CardColors;
            evolutionNames: string[];
        };
    };
};
