import { TouchableOpacity } from 'react-native';
import styled from 'styled-components';

export const IconButtonWrapper = styled(TouchableOpacity).attrs((props) => ({
  size: props.size ?? 'md',
}))`
  width: ${({ size, theme }) => theme.iconButton.size[size].width}px;
  height: ${({ size, theme }) => theme.iconButton.size[size].height}px;
  background-color: #e9e9e9;
  border-radius: 1000px;
  padding: ${({ size, theme }) => theme.iconButton.size[size].padding}px;
  align-items: center;
  justify-content: center;
`;
