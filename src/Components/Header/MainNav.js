import styled from 'styled-components';
import { Flex } from 'rebass';

const MainNav = styled(Flex)`
  max-width: 100%;
  box-shadow: 0 0 4px rgba(0, 0, 0, .125);
  font-weight: bold;
`;

MainNav.defaultProps = {
  mx: 'auto',
};

export default MainNav;
