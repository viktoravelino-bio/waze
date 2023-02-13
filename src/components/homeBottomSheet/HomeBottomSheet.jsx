import {
  BottomSheetView,
  default as BottomSheetRoot,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useRef } from 'react';

import { FlatList, StyleSheet, View } from 'react-native';
import { useTheme } from 'styled-components';
import { HomeBottomSheetFooter } from './HomeBottomSheetFooter';
import { RecentSearchItem } from '../RecentSearchItem';

import { HomeBottomSheetBackground } from './HomeBottomSheetBackground';
import { SearchInput } from '../atoms/searchInput';

const initialSnapPoints = ['25%', '50%', 'CONTENT_HEIGHT'];

export function HomeBottomSheet() {
  const bottomSheetRef = useRef(null);

  const {
    bottomSheetFooter: { height: bottomSheetFooterHeight },
  } = useTheme();

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  return (
    <BottomSheetRoot
      ref={bottomSheetRef}
      index={1}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      footerComponent={HomeBottomSheetFooter}
      backgroundComponent={HomeBottomSheetBackground}
      backgroundStyle={{ backgroundColor: 'white' }}
    >
      <BottomSheetView
        style={[
          styles.contentContainer,
          { paddingBottom: bottomSheetFooterHeight },
        ]}
        onLayout={handleContentLayout}
      >
        <SearchInput size="small" style={{ width: '94%' }} />

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
      </BottomSheetView>
    </BottomSheetRoot>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 12,
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});
