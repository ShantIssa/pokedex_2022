import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import styled from 'styled-components/native';

const SkeletonWrapper = styled.View<{ height: string }>`
  width: 95%;
  height: ${({ height }) => height};
  margin: 10px 0;
  align-self: center;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.grey};
`;

const Skeleton: React.FC<{ height?: string }> = ({ height = '150px' }) => (
    <SkeletonWrapper height={height}>
        <SkeletonPlaceholder>
            <View style={{ margin: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ margin: 12, width: 200, height: 24, borderRadius: 8 }} />
                <View style={{ margin: 12, width: 24, height: 24, borderRadius: 8 }} />
            </View>
        </SkeletonPlaceholder>
    </SkeletonWrapper>
);

export default Skeleton;
