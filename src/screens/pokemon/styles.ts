import styled from 'styled-components/native';

export const StrengthColored = styled.View<{ background: string; width: number }>`
  background-color: ${({ background }) => background};
  width:  ${({ width }) => width}%;
  height: 20px;
`;

export const StrengthBackground = styled.View`
  background-color: ${({ theme }) => theme.colors['med-dark']};
  width: 100%;
`;
