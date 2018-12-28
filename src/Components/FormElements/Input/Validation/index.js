import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Span } from 'src/Components/Typo';

const FormValidation = ({
  isShow, messageType, message, ...rest
}) => (
  <StyledFormValidation isShow={isShow} messageType={messageType} {...rest}>
    {message}
  </StyledFormValidation>
);

const StyledFormValidation = styled(Span)`
  width: 100%;
  display: ${props => (props.isShow ? 'block' : 'none')};
  color: ${props => (props.messageType ? props.theme.colors[props.messageType] : props.theme.colors.black)};
  font-weight: normal;
  font-size: ${props => props.theme.fontSizes[1]}px;
  line-height: 1;
  margin-top: 7px;
`;

FormValidation.defaultProps = {
  message: '',
  messageType: 'info',
  isShow: false,
};

FormValidation.propTypes = {
  message: PropTypes.string,
  messageType: PropTypes.oneOf(['info', 'primary', 'success', 'danger']),
  isShow: PropTypes.bool,
};

export default FormValidation;
