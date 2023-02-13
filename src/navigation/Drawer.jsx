import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text, View } from 'react-native';
import { Home } from '../screens/Home';

const DrawerNavigator = createDrawerNavigator();

export function Drawer() {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <DrawerNavigator.Screen name="Home" component={Home} />
      <DrawerNavigator.Screen name="Test2" component={Home} />
    </DrawerNavigator.Navigator>
  );
}
