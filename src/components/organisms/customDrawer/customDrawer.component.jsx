import { useRef } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';

import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';

import { SafeAreaView } from 'react-native-safe-area-context';
import { HEADER_SIZE } from '../../../constants';
import { ScreensNames } from '../../../navigation/MainStack';
import { SearchInput } from '../../atoms/searchInput';
import { DrawerHeader } from '../../molecules/drawerHeader/drawerHeader.component';

export function CustomDrawer(props) {
  const y = useSharedValue(0);
  const ref = useRef(null);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      ('worklet');
      y.value = event.contentOffset.y;
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }} {...props}>
      <DrawerHeader
        {...{
          y,
          userName: 'Viktor Avelino',
          handleUserNamePress: () => console.log('Navigate to user page'),
        }}
      />

      <Animated.ScrollView
        ref={ref}
        contentContainerStyle={{
          minHeight: '100%',
        }}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        stickyHeaderIndices={[1]}
      >
        {/* make space for the header */}
        <TouchableWithoutFeedback
          onPress={() => {
            ref.current.scrollTo({ x: 0, y: 0, animated: true });
          }}
        >
          <View
            style={{
              height: HEADER_SIZE,
            }}
          />
        </TouchableWithoutFeedback>

        <View style={{ backgroundColor: 'white', paddingVertical: 10 }}>
          <SearchInput
            style={{ height: 46, width: '94%' }}
            editable={false}
            onPressIn={() => {
              props.navigation.closeDrawer();
              props.navigation.navigate(ScreensNames.SearchModal);
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
