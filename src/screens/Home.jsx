import { View } from 'react-native';
import { BottomSheet } from '../components/BottomSheet';
import { HomeFooter } from '../components/HomeFooter';
import { Map } from '../components/Map';

export function Home() {
  return (
    <View style={{ flex: 1 }}>
      <Map />

      <BottomSheet />
      {/* <HomeFooter /> */}
    </View>
  );
}
