import { StyleSheet, Text, View } from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';

import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { backgroundColor } from 'styled-system';
import { HEADER_SIZE } from '../../../contants';
import { SearchInput } from '../../atoms/searchInput';
import { DrawerHeader } from '../../molecules/drawerHeader/drawerHeader.component';

export function CustomDrawer(props) {
  const y = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      ('worklet');
      y.value = event.contentOffset.y;
    },
  });

  const heightAnimated = useAnimatedStyle(() => {
    return {
      height: interpolate(
        y.value,
        [0, HEADER_SIZE],
        [HEADER_SIZE, 0],
        Extrapolation.CLAMP
      ),
    };
  });

  const opacityAnimated = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        y.value,
        [0, HEADER_SIZE],
        [0, 1],
        Extrapolation.CLAMP
      ),
    };
  });

  return (
    <SafeAreaView style={{ flex: 1 }} {...props}>
      <DrawerHeader
        {...{ y }}
        userName="Viktor Avelino"
        handleUserNamePress={() => console.log('text')}
      />

      <Animated.ScrollView
      style={{

        pointerEvents:"none"
      }}
        contentContainerStyle={{
          minHeight: '100%',
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        stickyHeaderIndices={[1]}
      >
        <Animated.View
          style={[
            {
              height: HEADER_SIZE,
              pointerEvents: 'none',
              // backgroundColor: 'white',
            },

            // opacityAnimated,
          ]}
        />

        <View style={{ backgroundColor: 'white', paddingVertical: 10 }}>
          <SearchInput
            style={{ height: 46, width: '94%' }}
            editable={false}
            onPressIn={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate('SearchModal');
            }}
          />
        </View>

        {/* main content goes here */}
        {Array.from({ length: 100 }).map((_, index) => {
          return (
            <View
              key={index}
              style={{
                height: 50,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 1,
              }}
            >
              <Text>{index}</Text>
            </View>
          );
        })}
        <View
          style={{
            height: '100%',
            backgroundColor: 'white',
          }}
        />
      </Animated.ScrollView>
    </SafeAreaView>
  );
}
