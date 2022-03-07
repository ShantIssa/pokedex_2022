import styled from 'styled-components/native';

export const StrengthColored = styled.View<{ background: string; width: number }>`
  height: 20px;
  width:  ${({ width }) => width}%;
  border-radius: 7px;
  background-color: ${({ background }) => background};
`;

export const StrengthBackground = styled.View<{ background?: string }>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.grey};
  border-width: 1px;
  border-radius: 8px;
  border-color: ${({ background }) => background};
`;
