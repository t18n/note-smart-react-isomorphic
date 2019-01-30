import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FlexBox } from 'src/Components/Layout';

const Form = ({ children, submit, ...rest }) => (
  <FlexBox {...rest}>
    <StyledForm onSubmit={submit} {...rest}>
      {children}
    </StyledForm>
  </FlexBox>
);

const StyledForm = styled.form`
  position: relative;
  height: max-content;
  width: 100%;
`;

Form.defaultProps = {
  submit: undefined,
};

Form.propTypes = {
  submit: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Form;
