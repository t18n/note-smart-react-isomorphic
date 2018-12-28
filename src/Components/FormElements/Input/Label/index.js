import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { TextBlock } from 'src/Components/Typo';

const Label = ({
  id, label, children, ...rest
}) => (
  <StyledLabel htmlFor={id} {...rest}>
    {label}
    {children}
  </StyledLabel>
);

const TextBlockLabel = TextBlock.withComponent('label');

const StyledLabel = styled(TextBlockLabel)`
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
