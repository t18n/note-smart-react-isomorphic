import React from 'react';
import styled from 'styled-components';
import { Card } from 'rebass';

const Badge = ({ ...rest }) => (
  <StyledBadge {...rest} />
);

const StyledBadge = styled(Card)`
  border-radius: ${props => props.theme.radius[3]}px;
  font-family: ${props => props.theme.fonts.body};
  font-weight: ${props => props.theme.fontWeights[7]};
`;

Badge.defaultProps = {
  px: 2,
  py: 1,
  fontSize: 1,
};

export default Badge;
