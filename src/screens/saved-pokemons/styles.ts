import styled from 'styled-components/native';

export const SavedPokemonCard = styled.View<{ borderColor: string }>`
  height: 250px;
  border-radius: 8px;
  border-width: 2px;
  margin-bottom: 15px;
  justify-content: space-between;
  border-color: ${({ borderColor }) => borderColor};
`;

export const PokeballWrapper = styled.View`
  position: absolute;
  right:8px;
  top: 35px;
`;

export const TitleWrapper = styled.View<{ backgroundColor: string }>`
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: ${({ backgroundColor }) => backgroundColor};

`;

export const PokeImage = styled.Image`
  height: 180px;
  width: 180px;
`;
