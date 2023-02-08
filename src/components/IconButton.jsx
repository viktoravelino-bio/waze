import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

const IconButtonWrapper = styled(TouchableOpacity).attrs((props) => ({
  size: props.size ?? 'md',
}))`
  width: ${({ size, theme }) => theme.iconButton.size[size]}px;
  height: ${({ size, theme }) => theme.iconButton.size[size]}px;
  background-color: #e9e9e9;
  border-radius: 100%;
  padding: 6px;
  align-items: center;
  justify-content: center;
`;

export function IconButton({ icon: Icon, color, ...rest }) {
  return (
    <IconButtonWrapper {...rest}>
      <Icon size="100%" weight="fill" color={color ?? 'black'} />
    </IconButtonWrapper>
  );
}
