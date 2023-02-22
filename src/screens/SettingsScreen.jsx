import { Button, SafeAreaView } from 'react-native';

export function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Settings Screen</Text>
      <Button label="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
