import { SafeAreaView } from 'react-native';

export function UserScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>User Screen</Text>
      <Button label="Back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
