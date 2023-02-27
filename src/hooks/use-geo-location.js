import { useEffect, useState } from 'react';
import * as Location from 'expo-location';

const LOCATION_PERMISSION = {
  GRANTED: 'granted',
  DENIED: 'denied',
};

const DEFAULT_DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

const TORONTO_COORDS = {
  latitude: 43.65326,
  longitude: -79.3831843,
};

export function useGeoLocation() {
  const [loadingLocation, setLoadingLocation] = useState(true);
  const [currentLocation, setCurrentLocation] = useState(TORONTO_COORDS);
  const [currentRegion, setCurrentRegion] = useState({
    ...TORONTO_COORDS,
    ...DEFAULT_DELTA,
  });

  const [error, setError] = useState(null);
  const [permission, setPermission] = useState(LOCATION_PERMISSION.DENIED);

  useEffect(() => {
    async function getPermission() {
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== LOCATION_PERMISSION.GRANTED) {
        setPermission(LOCATION_PERMISSION.DENIED);
        setError('Permission to access location was denied');
        alert(
          'Permission to access location was denied\n\nPlease enable location services in your device settings and try again.'
        );
        return;
      }

      setPermission(LOCATION_PERMISSION.GRANTED);

      // if (status !== LOCATION_PERMISSION.GRANTED) {
      //   setError('Permission to access location was denied');
      //   return;
      // }

      // const location = await Location.getCurrentPositionAsync({});
      // console.log('initial location ', location);
      // setLocation({
      //   latitude: location.coords.latitude,
      //   longitude: location.coords.longitude,
      // });
      // setPermission(LOCATION_PERMISSION.GRANTED);
    }

    getPermission();
  }, []);

  useEffect(() => {
    if (permission !== LOCATION_PERMISSION.GRANTED || !!error) return;

    let unsubscribe = {
      remove: () => {},
    };

    async function loadAsync() {
      unsubscribe = await Location.watchPositionAsync(
        {
          distanceInterval: 1,
        },
        (location) => {
          // console.log('location update ', JSON.stringify(location, null, 2));
          setCurrentLocation({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
          });
          setCurrentRegion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            ...DEFAULT_DELTA,
          });
        }
      );
    }

    loadAsync();
    return () => {
      unsubscribe.remove();
    };
  }, [permission, error]);

  // useEffect(() => {
  //   let unsubscribe = {
  //     remove: () => {},
  //   };

  //   async function loadAsync() {
  //     unsubscribe = await Location.watchPositionAsync(
  //       {
  //         distanceInterval: 1,
  //       },
  //       (location) => {
  //         console.log('location update ', location);
  //         setLocation({
  //           latitude: location.coords.latitude,
  //           longitude: location.coords.longitude,
  //         });
  //       }
  //     );
  //   }

  //   loadAsync();
  //   return () => {
  //     unsubscribe.remove();
  //   };
  // }, []);

  return {
    loadingLocation,
    currentLocation,
    error,
    currentRegion,
    permission,
  };
}
