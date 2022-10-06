import styled from 'styled-components';

export const ContactTitle = styled.h2`
  font-family: ${p => p.theme.fonts.body};
  margin-top: ${p => p.theme.space[0]}px;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

export const ContactSubtitle = styled.span`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes.m};
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const ContactInput = styled.input`
  display: block;
  width: 296px;
  margin-bottom: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[2]}px ${p => p.theme.space[4]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-family: ${p => p.theme.fonts.body};

  border: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.secondary};
  border-radius: ${p => p.theme.radii.normal};
`;
