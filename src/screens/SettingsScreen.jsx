import {  SafeAreaView, Text } from 'react-native';
import { Button } from '../components/atoms/button';

export function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Settings Screen</Text>
      <Button label='Label' onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
