import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const arrowDown = 'arrow-down-icon-url';

const SelectBox = ({
  width, name, children, ...rest
}) => (
  <SelectWrapper width={width}>
    <Select name={name} {...rest}>
      {children}
    </Select>
  </SelectWrapper>
);

const Select = styled.select`
  appearance: none;
  outline: 0;
  border: 0 !important;
  background: white;
  background-image: none;
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 0 0 ${props => props.theme.space.m};
  color: black;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  transition: .1s all ease;
`;

const SelectWrapper = styled.div`
  position: relative;
  display: block;
  box-shadow: ${props => props.theme.shadows.standard} !important;
  width: ${props => props.width};
  height: ${props => props.theme.sizes.height.l};
  line-height: 1;
  overflow: hidden;
  border-radius: ${props => props.theme.sizes.radius};

  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    padding: ${props => props.theme.space.insetSquish.xs};
    width: 30px;
    pointer-events: none;
    background-image: url(${arrowDown});
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: center;
    transform: rotate(-90deg);
  }
`;

SelectBox.defaultProps = {
  width: '100%',
  name: '',
};

SelectBox.propTypes = {
  width: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default SelectBox;
