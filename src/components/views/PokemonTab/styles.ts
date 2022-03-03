import styled from 'styled-components/native';

import { CardColors } from 'src/hooks/useImageColors/types';
import { Stats } from 'src/screens/pokemon/types';

export const WhiteBackground = styled.View`
  width:100%;
  padding:10px;
  align-items:center;
  background-color:white;
  justify-content: center;
  border-bottom-left-radius: 100px;
`;

export type StatsProps = {
    stats: Stats[];
    colors: CardColors;
};
