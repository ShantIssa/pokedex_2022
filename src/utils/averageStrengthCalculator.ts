export type Stats = {
    base_stat: number;
    effort: number;
    stat: { name: string; url: string };
};
export const averageStrengthCalculator = (data: Stats[]) => {
    const avgRate =
        data?.map((item: { base_stat: any }) => item.base_stat).reduce((prev: number, curr: number) => prev + curr, 0) /
        data?.length;
    return Math.round(avgRate);
};
