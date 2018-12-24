import React from 'react';
import style from 'styled-components';
import PropTypes from 'prop-types';

const List = ({ children }) => (
  <StyledList>
    {children}
  </StyledList>
);

const StyledList = style.ul`
  
`;

List.defaultProps = {
  children: undefined,
};

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

export default List;
