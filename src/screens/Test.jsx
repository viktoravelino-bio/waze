import { View } from 'react-native';
import { SafeAreaView } from 'react-native';

import { Button } from '../components/atoms/button';

export function Test() {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Button variant="ghost" label="My Waze" />
      </SafeAreaView>
    </View>
  );
}
