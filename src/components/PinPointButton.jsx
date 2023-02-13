import { TouchableOpacity } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import BackgroundSvg from '../assets/PinAction.svg';

export function PinPointButton() {
  return (
    <Shadow
      style={{ borderRadius: 100 }}
      distance={10}
      startColor="rgba(0,0,0,0.2)"
      offset={[0, 3]}
    >
      <TouchableOpacity
        style={{
          position: 'relative',
          height: 65,
          width: 65,
        }}
      >
        <BackgroundSvg height="100%" width="100%" opacity=".94" />
      </TouchableOpacity>
    </Shadow>
  );
}
