import styled from 'styled-components/native';
import { Image } from 'react-native';

export const Card = styled.View<{ background: string }>`
  background-color: ${({ background }) => background};
  height: 640px;
  width: 95%;
  margin: 10px 0;
  border-color: white;
  align-self: center;
  border-radius: 9px;
`;

export const PokemonImg = styled(Image)`
  height: 190px;
  width: 190px;
  top: 50px;
  align-self: center;
  z-index: 1;
`;

export const WhiteCard = styled.View`
  border-radius: 9px;
  width: 95%;
  flex: 1;
  margin-bottom: 10px;
  align-self: center;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
`;
