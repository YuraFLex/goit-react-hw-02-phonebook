import styled from 'styled-components';

export const Contact = styled.span`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-family: ${p => p.theme.fonts.body};
`;

export const Button = styled.button`
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
