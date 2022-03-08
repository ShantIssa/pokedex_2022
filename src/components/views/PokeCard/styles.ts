import styled from 'styled-components/native';
import { Image } from 'react-native';

import Flex from '../../shared/Flex';
import Typography from '../../shared/Typography';

export const Card = styled.View<{ background: string }>`
  background-color: ${({ background }) => background};
  height: 630px;
  width: 95%;
  margin: 10px 0;
  border-color: white;
  align-self: center;
  border-radius: 8px;
`;

export const PokemonImg = styled(Image)`
  height: 190px;
  width: 190px;
  top: 50px;
  align-self: center;
`;

export const PokeballCardStyled = styled.View`
  z-index: 1;
  position: absolute;
  top: 35px;
  right: 10px;
`;

export const BottomBarWrapper = styled.View<{ borderColor: string }>`
  height: 53px;
  align-items: center;
  flex-direction: row;
  background-color: white;
  border-bottom-right-radius: 8px;
  border-bottom-left-radius: 8px;
  justify-content: space-around;
  border-bottom-width: 2px;
  border-right-width: 2px;
  border-left-width: 2px;
  border-color:${({ borderColor }) => borderColor};
`;

export const WhiteCardWrapper = styled.View`
  border-radius: 8px;
  width: 95%;
  flex: 1;
  margin-bottom: 10px;
  align-self: center;
  padding-top: 60px;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.light};
`;

export const LinesFlex = styled(Flex)<{ borderColor: string }>`
  border-left-width: 1px;
  border-right-width: 1px;
  border-color: ${({ borderColor }) => borderColor};
`;

export const TagCard = styled(Flex)<{ background: string }>`
  border-radius: 8px;
  background-color: ${({ background }) => background};
`;

export const PokeButton = styled.TouchableOpacity`
  width: 80px;
  height: 53px;
  align-items: center;
  justify-content: center;
`;

export const PokemonColorText = styled(Typography)<{ pokemonColor: string }>`
  color: ${({ pokemonColor }) => pokemonColor};
`;
