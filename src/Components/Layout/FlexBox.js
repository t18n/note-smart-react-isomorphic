import styled from 'styled-components';
import { Flex } from 'rebass';

const FlexBox = styled(Flex)`
  color: ${props => props.theme.colors.black};
`;

FlexBox.defaultProps = {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'space-between',
  mx: 'auto',
};

export default FlexBox;
