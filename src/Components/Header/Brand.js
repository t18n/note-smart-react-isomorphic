import React from 'react';
import styled from 'styled-components';
import { Image } from 'rebass';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Brand = ({
  to, src, height, width, alt, ...rest
}) => (
  <Link to={to}>
    <StyledBrand src={src} height={height} width={width} alt={alt} {...rest} />
  </Link>
);

const StyledBrand = styled(Image)`
  max-width: ${props => (props.width ? 'auto' : '100%')};
  display: flex;
`;

Brand.defaultProps = {
  to: '/',
  alt: 'NoteSmart',
};

Brand.propTypes = {
  to: PropTypes.string,
  alt: PropTypes.string,
};

export default Brand;
