import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { IconButton } from '../../atoms/iconButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { HEADER_SIZE } from '../../../contants';
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

export function DrawerHeader({ y, userName, handleUserNamePress }) {
  const { top: insetTop } = useSafeAreaInsets();
  const { colors } = useTheme();

  const pushDownAnimation = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        [-1000, HEADER_SIZE],
        [1000, 0],
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
      top={insetTop}
      style={[pushDownAnimation, opacityAnimated]}
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
          <RedirectToUserPageButton delayPressIn={1} onPressIn={()=>console.log("hu")}>
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
