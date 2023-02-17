import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export function Test() {
  const { bottom } = useSafeAreaInsets();
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>asldhjkasdjhajk</Text>
          <Text>Viktor</Text>
        </ScrollView>
      </SafeAreaView>
      <View
        style={{ padding: 10, backgroundColor: 'red', paddingBottom: bottom }}
      >
        <TouchableOpacity style={{ backgroundColor: 'blue', padding: 10 }}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
