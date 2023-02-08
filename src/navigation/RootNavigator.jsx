import { NavigationContainer } from '@react-navigation/native';
import { MainStack } from './MainStack';

export function RootNavigator() {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
}
