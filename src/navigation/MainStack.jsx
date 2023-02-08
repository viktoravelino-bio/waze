import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Drawer } from './Drawer';

const StackNavigator = createNativeStackNavigator();

export function MainStack() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="Drawer" component={Drawer} />
    </StackNavigator.Navigator>
  );
}
