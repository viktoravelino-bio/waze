import BottomSheetBase, {
  BottomSheetView,
  useBottomSheetDynamicSnapPoints,
} from '@gorhom/bottom-sheet';
import { forwardRef } from 'react';
import { StyleSheet } from 'react-native';
import { useTheme } from 'styled-components';

export function BottomSheetComponent(
  {
    snapPoints = ['50%', 'CONTENT_HEIGHT'],
    index = 1,
    footerComponent = null,
    backgroundComponent = null,
    contentContainerStyle = {},
    children,
  },
  ref
) {
  const {
    bottomSheetFooter: { height: bottomSheetFooterHeight },
  } = useTheme();

  const {
    animatedHandleHeight,
    animatedSnapPoints,
    animatedContentHeight,
    handleContentLayout,
  } = useBottomSheetDynamicSnapPoints(snapPoints);

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
    >
      <BottomSheetView
        style={[
          styles.contentContainer,
          { paddingBottom: bottomSheetFooterHeight, ...contentContainerStyle },
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
    alignItems: 'center',
    // backgroundColor: 'red',
  },
});

export const BottomSheet = forwardRef(BottomSheetComponent);
