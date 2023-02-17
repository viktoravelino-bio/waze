import { Text, View } from 'react-native';

import { Map } from '../components/Map';
import { HomeBottomSheet } from '../components/molecules/homeBottomSheet';

export function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Map />

      <HomeBottomSheet />
    </View>
  );
}
