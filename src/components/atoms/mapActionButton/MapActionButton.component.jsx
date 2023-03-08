import { View } from 'react-native';

export function MapActionButton({ position = 'left', children }) {
  return (
    <View
      style={{
        position: 'absolute',
        top: -80,
        ...(position === 'left' ? { left: 15 } : { right: 15 }),
      }}
    >
      {children}
    </View>
  );
}
