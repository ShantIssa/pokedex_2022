import styled from 'styled-components/native';

import { Button } from 'src/components';

export const SavedPokemonCard = styled.View<{ borderColor: string }>`
  border-radius: 8px;
  border-width: 2px;
  margin-bottom: 15px;
  justify-content: space-between;
  border-color: ${({ borderColor }) => borderColor};
`;

export const PokeballWrapper = styled.View`
  position: absolute;
  right:8px;
  top: 40px;
`;

export const TitleWrapper = styled.View<{ backgroundColor: string }>`
  padding: 4px 8px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const PokeImage = styled.Image`
  height: 180px;
  width: 165px;
`;

export const ActionsWrapper = styled.View<{ borderColor: string }>`
  flex-direction: row;
  border-top-width: 2px;
  border-color: ${({ borderColor }) => borderColor};
  justify-content: space-evenly;
`;

export const StyledButton = styled(Button)`
  padding: 10px 50px;
  align-items:center;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const DeleteButton = styled(Button)`
  padding: 10px 20px;
`;

export const LineInBetween = styled.View<{ borderColor: string }>`
      border-width: 1px;
`;

export const BindBottomView = styled.View`
  flex-direction: column;
  align-items: center;
  height:100%;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

export const PokeballCardWrapper = styled.View`
   position: absolute;
  top:20px ;
`;

export const NavigateHomeBtn = styled(Button)`
  margin-top: 13px;
  border-radius: 8px;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors['med-dark']};
  width: 80%;
`;
