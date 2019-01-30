import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Text } from 'rebass';

const Label = ({
  id, label, children, ...rest
}) => (
  <StyledLabel as="label" htmlFor={id} {...rest}>
    {label}
    {children}
  </StyledLabel>
);

const StyledLabel = styled(Text)`
  font-family: ${props => props.theme.fonts.body};
  display: flex;
  flex-direction: column;
  width: 100%;
  font-weight: bold;
  line-height: 1;

  input {
    margin-top: 5px;
  }
`;

Label.defaultProps = {
  id: null,
  label: null,
};

Label.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};


export default Label;
