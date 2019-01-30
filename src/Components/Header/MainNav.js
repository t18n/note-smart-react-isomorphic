import React from 'react';
import styled from 'styled-components';
import { Container } from 'src/Components/Layout';

const MainNav = ({ ...rest }) => (
  <StyledMainNav as="header" {...rest} />
);

const StyledMainNav = styled(Container)`
  width: 100%;
  box-shadow: ${props => props.theme.boxShadows[0]};
  font-weight: ${props => props.theme.fontWeights[7]};
`;

export default MainNav;
