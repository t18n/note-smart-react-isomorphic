import React from 'react';
import styled from 'styled-components';
import { Image } from 'rebass';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Brand = ({
  to, src, height, ...rest
}) => (
  <Link to={to}>
    <StyledBrand src={src} height={height} {...rest} />
  </Link>
);

const StyledBrand = styled(Image)`
  max-width: 100%;
`;

Brand.defaultProps = {
  to: '/',
};

Brand.propTypes = {
  to: PropTypes.string,
};

export default Brand;
