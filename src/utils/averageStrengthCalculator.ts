import { Stats } from 'src/screens/pokemon/types';

export const averageStrengthCalculator = (data: Stats[]) =>
    data?.map((item: { base_stat: any }) => item.base_stat).reduce((prev: number, curr: number) => prev + curr, 0) /
    data?.length;
