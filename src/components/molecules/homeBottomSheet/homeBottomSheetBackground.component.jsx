import { View } from 'react-native';
import { MapActionButton } from '../../atoms/mapActionButton/MapActionButton.component';
import { PinPointButton } from '../../atoms/pinPointButton/PinPointButton';

import { Speedometer } from '../../atoms/speedometer/Speedometer';

export function HomeBottomSheetBackground(props) {
  return (
    <>
      <MapActionButton position="left">
        <Speedometer speed={12} unit="km/h" />
      </MapActionButton>
      <MapActionButton position="right">
        <PinPointButton />
      </MapActionButton>

      <View {...props} />
    </>
  );
}
