import { Text, TouchableOpacity } from 'react-native';
import { Image, View } from 'react-native';
import Animated from 'react-native-reanimated';
import styled from 'styled-components';
import { HEADER_SIZE } from '../../../contants';

export const DrawerHeaderAnimatedWrapper = styled(Animated.View).attrs({})`
  position: absolute;
  top: ${({ top }) => top + 10 || 0}px;
  left: 0;
  right: 0;
  height: ${HEADER_SIZE}px;
`;

export const DrawerHeaderContent = styled(View).attrs()`
  flex-shrink: 0;
  padding: 0px 16px;
  justify-content: center;
  flex: 1;
`;

export const DrawerHeaderButtonsWrapper = styled(View).attrs({})`
  flex-direction: row;
  justify-content: space-between;
`;

export const DrawerHeaderUserInfoWrapper = styled(View).attrs({})`
  margin-top: -8px;
  align-items: center;
`;

export const UserAvatar = styled(Image).attrs({
  resizeMode: 'cover',
})`
  width: 50px;
  height: 50px;
  border-radius: 1000px;
  margin-bottom: 18px;
`;

export const RedirectToUserPageButton = styled(TouchableOpacity).attrs({})`
  flex-direction: row;
  align-items: center;
`;

export const RedirectToUserPageButtonText = styled(Text).attrs({})`
  font-weight: bold;
  font-size: 16px;
  margin-left: 20px;
  margin-right: 4px;
`;
