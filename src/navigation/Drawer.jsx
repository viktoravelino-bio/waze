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
      <DrawerNavigator.Screen
        name="Test2"
        component={() => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Text>Test</Text>
          </View>
        )}
      />
    </DrawerNavigator.Navigator>
  );
}
