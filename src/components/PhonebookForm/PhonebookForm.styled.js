import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 12px;
  flex-direction: column;
`;

export const FormTitle = styled.h1`
  font-family: ${p => p.theme.fonts.body};
  color: ${p => p.theme.colors.text};
  margin-top: ${p => p.theme.space[0]}px;
  margin-bottom: ${p => p.theme.space[4]}px;
`;

export const FormLabel = styled.label`
  display: inline-flex;
  flex-direction: column;
`;

export const FormText = styled.span`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const FormInput = styled.input`
  display: block;
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.body};
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
`;

export const Button = styled.button`
  display: inline-block;
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.white};
  padding: ${p => p.theme.space[3]}px ${p => p.theme.space[4]}px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  margin-bottom: ${p => p.theme.space[5]}px;
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
