import { Text } from 'react-native';
import { SafeAreaView } from 'react-native';
import { Button } from '../components/atoms/button';

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
