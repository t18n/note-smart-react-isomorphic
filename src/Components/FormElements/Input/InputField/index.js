import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import Container from 'src/Components/Container';

const arrowDown = 'static/icons/arrow_solid_black.svg';

const StyledInputField = styled.input`
  appearance: none;
  outline: 0;
  flex-grow: 1;
  box-shadow: none;
  border-radius: ${props => props.theme.radius[1]}px;
  padding: ${props => props.theme.space[2]}px;
  border: 1.2px solid ${props => (props.isShow ? props.theme.colors.danger : props.theme.colors.primary)};

  &::placeholder {
    color: ${props => props.theme.colors.grey};
  }

  &:focus {
    border: 1.2px solid ${props => props.theme.colors.info};
    transition: all .3s ease-out;
  }

  &[type="date"] {
    position: relative;
    &::-webkit-inner-spin-button {
      display: none;
    }

    &::-webkit-calendar-picker-indicator {
      color: rgba(0, 0, 0, 0);
      opacity: 0;
      z-index: 1;
      cursor: pointer;
    }

    &:after {
      content: '';
      width: 48px;
      height: 100%;
      position: absolute;
      top: 0;
      right: 0;
      background-image: url(${arrowDown});
      background-repeat: no-repeat;
      background-size: 40%;
      background-position: center;
      transform: rotate(-90deg);
      }
  }
`;

// const StyledContainerInput = StyledInputField.withComponent('input');

const InputField = ({
  id, placeholder, type, ...rest
}) => (
  <StyledInputField id={id} placeholder={placeholder} type={type} {...rest} />
);

InputField.defaultProps = {
  placeholder: '',
  type: 'text',
  id: '',
};

InputField.propTypes = {
  id: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(['password', 'date', 'text', 'email']),
};

export default InputField;
