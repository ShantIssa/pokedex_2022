import React, { useMemo } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, SafeAreaView } from 'react-native';
import { useInfiniteQuery } from 'react-query';
import { useScrollToTop } from '@react-navigation/native';

import { PokeCard, Typography } from 'src/components';
import { getPokemons } from 'src/services/api/pokemons';

const Main = () => {
    const ref = React.useRef(null);

    useScrollToTop(ref);
    const { data, fetchNextPage, hasNextPage, isLoading, isRefetching, refetch, isError } = useInfiniteQuery(
        'pokemons',
        getPokemons,
        {
            getNextPageParam: (lastPage) => lastPage.next,
            getPreviousPageParam: (firstPage) => firstPage.previous,
        },
    );

    const dataList = useMemo(() => {
        return (
            <FlatList
                ref={ref}
                data={data?.pages}
                maxToRenderPerBatch={5}
                onEndReachedThreshold={0.4}
                removeClippedSubviews={true}
                showsVerticalScrollIndicator={false}
                onEndReached={() => fetchNextPage()}
                keyExtractor={(i, index) => String(index)}
                renderItem={({ item }) => <PokeCard pokemons={item.results} />}
                refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={() => refetch()} />}
            />
        );
    }, [data?.pages, fetchNextPage, isRefetching, refetch]);

    return (
        <SafeAreaView>
            {isLoading || isError ? <ActivityIndicator /> : dataList}
            {!isLoading && !hasNextPage && <Typography>You can't load more</Typography>}
        </SafeAreaView>
    );
};

export default Main;
