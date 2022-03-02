import styled from 'styled-components/native';

export const PokemonCard = styled.ScrollView<{ background: string }>`
  background-color: ${({ background }) => background};
  width: 100%;
  border-color: white;
  align-self: center;
`;

export const WhiteBackground = styled.View`
  width:100%;
  padding:10px;
  align-items:center;
  background-color:white;
  justify-content: center;
  border-bottom-left-radius: 100px;
`;

export const StrengthColored = styled.View<{ background: string; width: number }>`
  background-color: ${({ background }) => background};
  width:  ${({ width }) => width}%;
  height: 20px;
`;

export const StrengthBackground = styled.View`
  background-color: ${({ theme }) => theme.colors['med-dark']};
  width: 100%;
`;
