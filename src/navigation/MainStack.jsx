import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SearchModal } from '../components/organisms/searchModal/searchModal.component';

import { Test } from '../screens/Test';
import { Drawer } from './Drawer';

const StackNavigator = createNativeStackNavigator();

export function MainStack() {
  return (
    <StackNavigator.Navigator screenOptions={{ headerShown: false }}>
      <StackNavigator.Screen name="Drawer" component={Drawer} />
      <StackNavigator.Screen name="Test" component={Test} />

      <StackNavigator.Group
        screenOptions={{ presentation: 'containedTransparentModal' }}
      >
        <StackNavigator.Screen name="SearchModal" component={SearchModal} />
      </StackNavigator.Group>
    </StackNavigator.Navigator>
  );
}
