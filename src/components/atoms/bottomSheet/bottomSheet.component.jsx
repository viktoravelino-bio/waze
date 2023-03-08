import BottomSheetBase, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';

import { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';
import { useGeoLocation } from '../../../hooks/use-geo-location';
import { useGPSNavigation } from '../../../hooks/use-gps-navigation';

export function BottomSheetComponent(
  {
    snapPoints = ['50%'],
    index = 0,
    footerComponent = null,
    backgroundComponent = null,
    contentContainerStyle = {},
    children,
    ...props
  },
  ref
) {
  const {
    bottomSheetFooter: { height: bottomSheetFooterHeight },
  } = useTheme();
  const { setRegionOffset } = useGeoLocation();
  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints([...snapPoints, 'CONTENT_HEIGHT']);

  return (
    <BottomSheetBase
      ref={ref}
      index={index}
      snapPoints={animatedSnapPoints}
      handleHeight={animatedHandleHeight}
      contentHeight={animatedContentHeight}
      footerComponent={footerComponent}
      {...(backgroundComponent && {
        backgroundComponent,
        backgroundStyle: { backgroundColor: 'white' },
      })}
      {...props}
    >
      <BottomSheetView
        style={[
          styles.contentContainer,
          {
            paddingBottom: !!footerComponent ? bottomSheetFooterHeight : 0,
            ...contentContainerStyle,
          },
        ]}
        onLayout={handleContentLayout}
      >
        {children}
      </BottomSheetView>
    </BottomSheetBase>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    paddingTop: 12,
    // alignItems: 'center',
    // backgroundColor: 'red',
  },
});

export const BottomSheet = forwardRef(BottomSheetComponent);
