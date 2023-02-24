import { createDrawerNavigator } from '@react-navigation/drawer';
import { CustomDrawer } from '../components/organisms/customDrawer';
import { Home } from '../screens';
import { DrawerScreensNames } from './DrawerScreens';

const DrawerScreens = [
  {
    name: DrawerScreensNames.Home,
    component: Home,
    options: {},
  },
  {
    name: DrawerScreensNames.Test2,
    component: Home,
    options: {},
  },
];

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
      {DrawerScreens.map((screen) => (
        <DrawerNavigator.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}
      {/* <DrawerNavigator.Screen name="Home" component={Home} /> */}
      {/* <DrawerNavigator.Screen name="Test2" component={Home} /> */}
    </DrawerNavigator.Navigator>
  );
}
