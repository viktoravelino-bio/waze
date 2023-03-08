import { ScrollView, Text, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { paddingTop } from 'styled-system';

import { Button } from '../components/atoms/button';

export function Test() {
  const y = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      ('worklet');
      y.value = event.contentOffset.y;
    },
  });

  const textAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: interpolate(y.value, [0, 100], [1, 0.7], Extrapolation.CLAMP),
        },
        {
          translateX: interpolate(
            y.value,
            [0, 100],
            [0, -100],
            Extrapolation.CLAMP
          ),
        },
        {
          translateY: interpolate(
            y.value,
            [0, 100],
            [0, -80],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const headerAnimated = useAnimatedStyle(() => {
    return {
      zIndex: y.value > 0 ? 0 : 1,
    };
  });

  return (
    <>
      <Animated.View
        style={[
          {
            zIndex: 1,
          },
          headerAnimated,
        ]}
      >
        <SafeAreaView
          style={[
            {
              backgroundColor: 'blue',
              padding: 10,
              alignItems: 'center',
              height: 200,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
            },
          ]}
        >
          <Animated.Text
            style={[
              {
                fontSize: 20,
                fontWeight: 'bold',
                marginTop: 20,
              },
              textAnimated,
            ]}
          >
            Header
          </Animated.Text>

          <Button
            variant="ghost"
            label="My Waze"
            onPress={() => console.log('pressed')}
          />
          <Button
            variant="ghost"
            label="My Waze"
            onPress={() => console.log('pressed')}
          />
        </SafeAreaView>
      </Animated.View>

      <Animated.ScrollView
        style={{ marginTop: 100 }}
        onScroll={scrollHandler}
        contentContainerStyle={{ minHeight: '100%' }}
        scrollEventThrottle={16}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            // scroll to top
            console.log('scroll to top');
          }}
        >
          <View
            style={{
              height: 200, // Should be same height as Header
              backgroundColor: 'transparent',
              marginBottom: -100,
            }}
          />
        </TouchableWithoutFeedback>

        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Text>Test</Text>
        </View>
      </Animated.ScrollView>
    </>
  );
}
