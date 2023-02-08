import {
  BottomSheetFooter,
  BottomSheetView,
  default as BottomSheetRoot,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { useCallback, useRef } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { SearchInput } from './SearchInput';
import { RecentSearchItem } from './RecentSearchItem';

import { useTheme } from 'styled-components';
import { HomeFooter } from './HomeFooter';

const initialSnapPoints = ['25%', 'CONTENT_HEIGHT'];

export function BottomSheet() {
  const bottomSheetRef = useRef(null);

  const {
    bottomSheetFooter: { height },
  } = useTheme();

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(initialSnapPoints);

  const handleSheetChanges = useCallback((index) => {
    console.log('handleSheetChanges', index);
  }, []);

  return (
    <BottomSheetRoot
      ref={bottomSheetRef}
      index={1}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      onChange={handleSheetChanges}
      footerComponent={HomeFooter}
    >
      <BottomSheetView
        style={[styles.contentContainer, { paddingBottom: height }]}
        onLayout={handleContentLayout}
      >
        <SearchInput size="small" style={{ width: '94%' }} />

        <FlatList
          scrollEnabled={false}
          data={[{ key: 'a' }, { key: 'b' }, { key: 'c' }, { key: 'd' }]}
          renderItem={({ item }) => <RecentSearchItem />}
          keyExtractor={(item) => item.key}
          ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
          style={{ paddingTop: 30, width: '100%', paddingBottom: 30 }}
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
  },
});
