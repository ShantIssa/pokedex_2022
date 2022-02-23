import styled from 'styled-components/native';
import { Image } from 'react-native';

import { CardColors } from './types';

export const Card = styled.View<{ colors: CardColors }>`
  background-color: ${({ colors }) => colors.background};
  height: 450px;
  width: 100%;
  border-bottom-color: ${({ colors }) => colors.border};
  border-bottom-width: 3px;
`;

export const PokemonImg = styled(Image)`
  height: 200px;;
  width: 200px
`;
