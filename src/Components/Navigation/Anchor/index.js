import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Container from 'src/Components/Container';

const StyledAnchor = styled.a`
  cursor: ${props => (props.href ? 'pointer' : 'default')};
  text-decoration: ${props => (props.underline)};
  color: ${props => (props.textColor ? props.theme.colors.black : props.theme.colors.primary)};
  &:active, &:hover {
    color: ${props => props.theme.colors.primary};
  }
`;

const Anchor = ({
  children, newpage, textColor, ...rest
}) => (
  <Container {...rest}>
    <StyledAnchor
      target={newpage ? '_blank' : ''}
      rel={newpage ? 'noopener' : ''}
      textColor={textColor}
      {...rest}
    >
      {children}
    </StyledAnchor>
  </Container>
);

Anchor.defaultProps = {
  display: 'inline',
  underline: 'none',
  newpage: null,
  textColor: false,
  children: undefined,
};

Anchor.propTypes = {
  display: PropTypes.string,
  underline: PropTypes.string,
  newpage: PropTypes.bool,
  textColor: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default Anchor;
