import {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import { IconButton } from '../../atoms/iconButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
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
import { ScreensNames } from '../../../navigation/MainStack';

export function DrawerHeader({ y, user, navigation, headerSize = 0 }) {
  const { top: insetTop } = useSafeAreaInsets();
  const { colors } = useTheme();

  const { name, avatar } = user;

  const heightAnimated = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        [-1000, 0, headerSize],
        [1000, headerSize, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const scrollPointToChangeZIndex = Platform.OS === 'ios' ? 40 : -80;

  const zIndexAnimated = useAnimatedStyle(() => {
    return {
      zIndex: interpolate(
        y.value,
        [0, scrollPointToChangeZIndex, headerSize],
        [1, 1, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const opacityAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        y.value,
        [0, headerSize],
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
          <IconButton
            icon={Gear}
            color={colors.primary}
            onPress={() => navigation?.navigate(ScreensNames.Settings)}
          />
          <IconButton
            icon={Power}
            color={colors.primary}
            onPress={() => console.log('action')}
          />
        </DrawerHeaderButtonsWrapper>

        <DrawerHeaderUserInfoWrapper>
          <UserAvatar
            source={{
              uri: avatar,
            }}
          />
          <RedirectToUserPageButton
            onPress={() => navigation?.navigate(ScreensNames.UserScreen)}
          >
            <RedirectToUserPageButtonText>
              {name || 'User Name'}
            </RedirectToUserPageButtonText>
            <CaretRight size={18} weight="bold" />
          </RedirectToUserPageButton>
        </DrawerHeaderUserInfoWrapper>
      </DrawerHeaderContent>
    </DrawerHeaderAnimatedWrapper>
  );
}
