import { useRef } from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ScreensNames } from '../../../navigation/MainStack';
import { SearchInput } from '../../atoms/searchInput';

export function DrawerContentWrapper({
  scrollHandler,
  headerSize,
  children,
  navigation,
}) {
  const ref = useRef(null);
  const { bottom: bottomInset } = useSafeAreaInsets();

  return (
    <Animated.ScrollView
      ref={ref}
      contentContainerStyle={{
        minHeight: '100%',
        paddingBottom: bottomInset,
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
            height: headerSize,
          }}
        />
      </TouchableWithoutFeedback>

      {/* Searching Input */}
      <View style={{ backgroundColor: 'white', paddingVertical: 10 }}>
        <SearchInput
          style={{ height: 46, width: '94%' }}
          editable={false}
          onPressIn={() => {
            navigation.closeDrawer();
            navigation.navigate(ScreensNames.SearchModal);
          }}
        />
      </View>

      {children}

      <View
        style={{
          height: '100%',
          backgroundColor: 'white',
        }}
      />
    </Animated.ScrollView>
  );
}
