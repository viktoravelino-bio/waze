import {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import { HEADER_SIZE } from '../../../constants';
import { SearchListItem } from '../../atoms/searchListItem';
import { DrawerContentWrapper } from '../../molecules/drawerContentWrapper';
import { DrawerHeader } from '../../molecules/drawerHeader/drawerHeader.component';

export function CustomDrawer(props) {
  const y = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (event) => {
      ('worklet');
      y.value = event.contentOffset.y;
    },
  });

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top']} {...props}>
      <DrawerHeader
        {...{
          y,
          user: {
            name: 'John Doe',
            avatar: 'https://picsum.photos/200',
          },
          navigation: props.navigation,
          headerSize: HEADER_SIZE,
        }}
      />

      <DrawerContentWrapper
        {...{
          scrollHandler,
          headerSize: HEADER_SIZE,
          navigation: props.navigation,
        }}
      >
        <SearchListItem
          onPress={() => {
            // setSearchedAddress(item);
            // setMapStatus('searching');
            props.navigation.goBack();
          }}
          item={{
            type: 'address',
            label: 'Home',
            subLabel: '123 Dundas St',
          }}
        />
        <SearchListItem
          onPress={() => {
            props.navigation.goBack();
          }}
          item={{
            type: 'address',
            label: 'Work',
            subLabel: '123 Dundas St',
          }}
        />
      </DrawerContentWrapper>
    </SafeAreaView>
  );
}
