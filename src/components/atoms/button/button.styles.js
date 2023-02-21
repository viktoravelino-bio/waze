import { Fragment } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import {
  color,
  space,
  layout,
  border,
  typography,
  flexbox,
} from 'styled-system';

export const IconStyled = styled(View).attrs((props) => ({
  size: props.size || 24,
}))`
  ${layout}
`;

export const TextStyled = styled(Text).attrs({})`
  ${color}
  ${typography}
`;

const buttonVariants = {
  primary: {
    backgroundColor: 'primary',
  },
  ghost: {
    backgroundColor: 'transparent',
  },
};

export const ButtonStyled = styled(TouchableOpacity).attrs((props) => ({
  borderRadius: 4,
  p: 2,
  flexDirection: 'row',
  alignItems: 'center',
  ...buttonVariants[props.variant],
}))`
  ${color}
  ${space}
  ${layout}
  ${border}
  ${flexbox}
`;
