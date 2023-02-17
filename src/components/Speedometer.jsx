import React from 'react';
import { Text, View } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

import BackgroundSvg from '../assets/Speed.svg';

export function Speedometer({ speed = 0, unit = 'km/h' }) {
  return (
    <Shadow
      style={{ borderRadius: 100 }}
      distance={10}
      startColor="rgba(0,0,0,0.2)"
      offset={[0, 3]}
    >
      <View
        style={{
          position: 'relative',
          height: 65,
          width: 65,
        }}
      >
        <BackgroundSvg height="100%" width="100%" opacity=".94" />
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Text
            style={{
              color: 'white',
              fontSize: 22,
              marginBottom: -3,
              marginTop: -2,
              fontWeight: 'bold',
            }}
          >
            {speed}
          </Text>
          <Text
            style={{
              color: 'white',
              fontSize: 12,
            }}
          >
            {unit}
          </Text>
        </View>
      </View>
    </Shadow>
  );
}
