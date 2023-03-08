import { useEffect, useRef, useState } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { Marker, PROVIDER_GOOGLE, Animated } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_API_KEY } from '../constants';
import { useLocationContext } from '../context/locationContext';
const { width, height } = Dimensions.get('window');

const DEFAULT_DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const CAMERA_ANGLE = 120;

export function Map() {
  const _map = useRef(null);
  const { prevLocation, location, mapStatus, searchedAddress, status } =
    useLocationContext();
  const [searchedLocation, setSearchedLocation] = useState(null);

  useEffect(() => {
    if (mapStatus === 'idle') {
      _map.current.animateCamera({
        center: {
          latitude: location.latitude - 0.02,
          longitude: location.longitude,
        },
        // pitch: CAMERA_ANGLE,
        zoom: 13,
      });
    }
  }, [mapStatus]);

  const showDirections =
    !!searchedAddress?.place_id && !!location && mapStatus === 'searching';

  return (
    <View style={styles.container}>
      <Animated
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        ref={_map}
        initialRegion={{
          latitude: location.latitude - 0.02,
          longitude: location.longitude,
          ...DEFAULT_DELTA,
        }}
      >
        <Marker coordinate={location} />
        {showDirections && (
          <MapViewDirections
            origin={{
              latitude: location.latitude,
              longitude: location.longitude,
            }}
            destination={`place_id:${searchedAddress?.place_id}`}
            apikey={GOOGLE_API_KEY}
            strokeWidth={6}
            strokeColor="#478dff"
            onReady={(result) => {
              setSearchedLocation(
                result.coordinates[result.coordinates.length - 1]
              );
              _map.current.fitToCoordinates(result.coordinates, {
                edgePadding: {
                  right: width / 20,
                  bottom: height / 20,
                  left: width / 20,
                  top: height / 20,
                },
              });
            }}
          />
        )}
        <Marker coordinate={location} />

        {showDirections && <Marker coordinate={searchedLocation} />}
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
