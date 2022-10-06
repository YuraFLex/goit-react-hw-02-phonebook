import styled from 'styled-components';

export const ContactList = styled.ul`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  list-style: none;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: ${p => p.theme.space[4]}px ${p => p.theme.space[3]}px;
  border-radius: ${p => p.theme.radii.normal};

  :last-child {
    margin-bottom: ${p => p.theme.space[0]}px;
  }

  :nth-child(odd) {
    background: ${p => p.theme.colors.background};
  }
`;
