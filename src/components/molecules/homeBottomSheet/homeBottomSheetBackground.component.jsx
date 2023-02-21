import { View } from 'react-native';
import { MapActionButton } from '../../MapActionButton';
import { PinPointButton } from '../../PinPointButton';
import { Speedometer } from '../../Speedometer';

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