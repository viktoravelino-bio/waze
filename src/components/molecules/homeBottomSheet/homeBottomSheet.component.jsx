import { FlatList, View } from 'react-native';
import { RecentSearchItem } from '../../atoms/recentSearchItem';
import { SearchInput } from '../../atoms/searchInput';
import { BottomSheet } from '../../atoms/bottomSheet';
import { HomeBottomSheetBackground } from '../homeBottomSheet/homeBottomSheetBackground.component';
import { HomeBottomSheetFooter } from '../homeBottomSheet/homeBottomSheetFooter.component';
import { useNavigation } from '@react-navigation/native';
import { ScreensNames } from '../../../navigation/MainStackScreens';
import { useGeoLocation } from '../../../hooks/use-geo-location';
import { useLocationContext } from '../../../context/locationContext';

export function HomeBottomSheet() {
  const { navigate } = useNavigation();

  return (
    <BottomSheet
      snapPoints={['25%', '50%']}
      index={1}
      footerComponent={HomeBottomSheetFooter}
      backgroundComponent={HomeBottomSheetBackground}
      onChange={(index) => {}}
    >
      <SearchInput
        style={{ width: '94%' }}
        editable={false}
        onPressIn={() => {
          navigate(ScreensNames.SearchModal);
        }}
      />

      <FlatList
        scrollEnabled={false}
        data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
        renderItem={({ item }) => <RecentSearchItem {...item} />}
        keyExtractor={(item) => item.key}
        ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          paddingTop: 30,
          paddingBottom: 30,
        }}
      />
    </BottomSheet>
  );
}
