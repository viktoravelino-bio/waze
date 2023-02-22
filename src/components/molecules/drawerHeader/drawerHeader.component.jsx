import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { IconButton } from '../../atoms/iconButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_SIZE } from '../../../constants';
import { Gear, Power, CaretRight } from 'phosphor-react-native';
import {
  DrawerHeaderAnimatedWrapper,
  DrawerHeaderButtonsWrapper,
  DrawerHeaderContent,
  DrawerHeaderUserInfoWrapper,
  RedirectToUserPageButton,
  RedirectToUserPageButtonText,
  UserAvatar,
} from './drawerHeader.styles';

import { useTheme } from 'styled-components';
import { Platform } from 'react-native';

export function DrawerHeader({ y, userName, handleUserNamePress }) {
  const { top: insetTop } = useSafeAreaInsets();
  const { colors } = useTheme();

  const heightAnimated = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        [-1000, 0, HEADER_SIZE],
        [1000, HEADER_SIZE, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const scrollPointToChangeZIndex = Platform.OS === 'ios' ? 40 : -80;

  const zIndexAnimated = useAnimatedStyle(() => {
    return {
      zIndex: interpolate(
        y.value,
        [0, scrollPointToChangeZIndex, HEADER_SIZE],
        [1, 1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const opacityAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        y.value,
        [0, HEADER_SIZE],
        [1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <DrawerHeaderAnimatedWrapper
      pointerEvents="box-none"
      top={insetTop}
      style={[heightAnimated, opacityAnimated, zIndexAnimated]}
    >
      <DrawerHeaderContent>
        <DrawerHeaderButtonsWrapper>
          <IconButton icon={Gear} color={colors.primary} />
          <IconButton icon={Power} color={colors.primary} />
        </DrawerHeaderButtonsWrapper>

        <DrawerHeaderUserInfoWrapper>
          <UserAvatar
            source={{
              uri: 'https://avatars.githubusercontent.com/u/5464353?v=4',
            }}
          />
          <RedirectToUserPageButton onPress={handleUserNamePress}>
            <RedirectToUserPageButtonText>
              {userName || 'User Name'}
            </RedirectToUserPageButtonText>
            <CaretRight size={18} weight="bold" />
          </RedirectToUserPageButton>
        </DrawerHeaderUserInfoWrapper>
      </DrawerHeaderContent>
    </DrawerHeaderAnimatedWrapper>
  );
}
