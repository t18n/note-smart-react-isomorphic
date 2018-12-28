import styled from 'styled-components';
import { Card } from 'rebass';

const CardBox = styled(Card)`
  color: ${props => props.theme.colors.black};
  box-shadow: ${props => props.theme.boxShadows[1]};
`;

export default CardBox;
