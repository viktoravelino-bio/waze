import { Text, View } from 'react-native';
import { BottomSheet } from '../components/atoms/bottomSheet';

import { Map } from '../components/Map';

export function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Map />

      <BottomSheet />
    </View>
  );
}
