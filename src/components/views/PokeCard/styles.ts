import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Card = styled.View<{ color: string }>`
  background-color: ${({ color }) => color};
  margin-bottom: 10px;
`;

export const PokemonImg = styled(Image)`
  height: 200px;;
  width: 200px
`;
