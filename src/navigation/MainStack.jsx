import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchModal } from '../components/organisms/searchModal/searchModal.component';
import { SettingsScreen } from '../screens/SettingsScreen';

import { Test } from '../screens/Test';
import { UserScreen } from '../screens/UserScreen';
import { Drawer } from './Drawer';

export const ScreensNames = {
  Drawer: 'Drawer',
  Settings: 'Settings',
  UserScreen: 'UserScreen',
  SearchModal: 'SearchModal',
};

const Screens = [
  {
    name: ScreensNames.Drawer,
    component: Drawer,
    options: {},
  },
  {
    name: ScreensNames.Settings,
    component: SettingsScreen,
    options: {
      presentation:"containedModal"
    },
  },
  {
    name: ScreensNames.UserScreen,
    component: UserScreen,
    options: {},
  },
  {
    name: ScreensNames.SearchModal,
    component: SearchModal,
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
