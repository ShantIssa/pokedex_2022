import styled from 'styled-components/native';

export const PokemonCard = styled.View<{ background: string }>`
  background-color: ${({ background }) => background};
  flex: 1;
  width: 100%;
  border-color: white;
  align-self: center;
  padding: 10px
`;
