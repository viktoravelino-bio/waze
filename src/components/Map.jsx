import { useEffect, useRef, useState } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import MapView, {
  AnimatedRegion,
  Marker,
  PROVIDER_GOOGLE,
  Animated,
} from 'react-native-maps';
import { useGeoLocation } from '../hooks/use-geo-location';

const DEFAULT_DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const CAMERA_ANGLE = 120;

export function Map() {
  const _map = useRef(null);
  const { currentLocation } = useGeoLocation();

  const [prevLocation, setPrevLocation] = useState(null);
  // const [currentLocation, setCurrentLocation] = useState(location);
  const [currentAngle, setCurrentAngle] = useState(CAMERA_ANGLE);

  function changePosition({ latitude, longitude }) {
    setPrevLocation(currentLocation);
    // setCurrentLocation({ latitude, longitude });

    updateMap();
  }

  function getRotation(prevPos, curPos) {
    if (!prevPos) {
      return 0;
    }
    const xDiff = curPos.latitude - prevPos.latitude;
    const yDiff = curPos.longitude - prevPos.longitude;
    return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
  }

  function updateMap() {
    const curRot = getRotation(prevLocation, currentLocation);
    _map.current.animateCamera({
      heading: curRot,
      center: currentLocation,
      pitch: currentAngle,
    });
  }

  useEffect(() => {
    // changePosition(currentLocation);
  }, [currentLocation]);

  return (
    <View style={styles.container}>
      {/* <Button
        title="tie;"
        onPress={() =>
          changePosition({
            latitude: currentLocation.latitude + 0.0001,
            longitude: currentLocation.longitude + 0,
          })
        }
      /> */}
      <Animated
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        ref={_map}
        minZoomLevel={15}
        initialRegion={{
          ...currentLocation,
          ...DEFAULT_DELTA,
        }}
      >
        <Marker
          coordinate={currentLocation}
          // anchor={{x: 0.5, y: 0.5}}
          // image={carImage}
        />
      </Animated>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
