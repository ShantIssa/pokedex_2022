import React from 'react';
import { ActivityIndicator, FlatList, RefreshControl } from 'react-native';
import { useInfiniteQuery } from 'react-query';

import { PokeCard, Wrapper } from 'src/components';
import { getPokemons } from 'src/services/api/pokemons';

const Main = () => {
    const { data, error, fetchNextPage, hasNextPage, isLoading, isError, isRefetching, refetch } = useInfiniteQuery(
        'pokemons',
        getPokemons,
        {
            getNextPageParam: (lastPage) => lastPage.next,
            getPreviousPageParam: (firstPage) => firstPage.previous,
        },
    );

    return (
        <Wrapper>
            {isLoading ? (
                <ActivityIndicator />
            ) : (
                <FlatList
                    data={data?.pages}
                    onEndReachedThreshold={0.3}
                    keyExtractor={(item) => item.name}
                    showsVerticalScrollIndicator={false}
                    onEndReached={() => fetchNextPage()}
                    renderItem={({ item, index }) => <PokeCard key={`page-${index}`} pokemons={item.results} />}
                    refreshControl={<RefreshControl refreshing={isRefetching} onRefresh={refetch} />}
                />
            )}
        </Wrapper>
    );
};

export default Main;
