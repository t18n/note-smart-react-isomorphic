import styled from 'styled-components';
import { Box } from 'rebass';

const Container = styled(Box)`
  max-width: ${props => props.maxWidth}px;
`;

const FluidContainer = styled(Box)`
  max-width: 100%;
`;

Container.defaultProps = {
  mx: 'auto',
};

export { Container, FluidContainer };
