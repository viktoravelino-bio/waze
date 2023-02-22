import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../components/organisms/customDrawer';
import { Home } from '../screens/Home';

const DrawerNavigator = createDrawerNavigator();

export function Drawer() {
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '90%',
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <DrawerNavigator.Screen name="Home" component={Home} />
      <DrawerNavigator.Screen name="Test2" component={Home} />
    </DrawerNavigator.Navigator>
  );
}
