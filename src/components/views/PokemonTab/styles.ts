import styled from 'styled-components/native';

export const WhiteBackground = styled.View`
  width:100%;
  padding:10px;
  align-items:center;
  background-color:white;
  justify-content: center;
  border-bottom-left-radius: 100px;
`;

export const PokeImg = styled.Image`
    width: 230px;
    height: 230px;
`;

export const AbilityWrapper = styled.View<{ backgroundColor: string }>`
    height:30px;
    padding: 0 8px;
    margin: 10px 5px;
    border-radius: 8px;
    align-items: center;
    background-color: ${({ backgroundColor }) => backgroundColor};
    justify-content: center;
`;
