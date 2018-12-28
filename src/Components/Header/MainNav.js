import styled from 'styled-components';
import Container from 'src/Components/Container';

const MainNav = styled(Container)`
  width: 100%;
  box-shadow: ${props => props.theme.boxShadows[0]};
  font-weight: ${props => props.theme.fontWeights[7]};
`;

export default MainNav;
