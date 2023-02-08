import 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';

import { RootNavigator } from './src/navigation/RootNavigator';

import theme from './src/theme';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <RootNavigator />
      </ThemeProvider>
    </GestureHandlerRootView>
  );
}
