import { View } from 'react-native';
import styled from 'styled-components';
import { layout, space, color } from 'styled-system';

export const IconStyled = styled(View).attrs((props) => ({
  size: props.size || 24,
}))`
  color: red;
  ${layout};
  ${space};
  ${color};
`;
