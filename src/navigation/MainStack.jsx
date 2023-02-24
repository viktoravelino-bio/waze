import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  SearchAddressModal,
  SettingsScreen,
  UserScreen,
  Test,
} from '../screens';
import { Drawer } from './Drawer';
import { ScreensNames } from './MainStackScreens';

export const Screens = [
  {
    name: ScreensNames.Drawer,
    component: Drawer,
    options: {},
  },
  {
    name: ScreensNames.Settings,
    component: SettingsScreen,
    options: {
      presentation: 'containedModal',
    },
  },
  {
    name: ScreensNames.UserScreen,
    component: UserScreen,
    options: {},
  },
  {
    name: ScreensNames.SearchModal,
    component: SearchAddressModal,
    options: {
      presentation: 'containedTransparentModal',
    },
  },
];

const StackNavigator = createNativeStackNavigator();

export function MainStack() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      {Screens.map((screen) => (
        <StackNavigator.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
          options={screen.options}
        />
      ))}

      <StackNavigator.Screen name="Test" component={Test} />
    </StackNavigator.Navigator>
  );
}
