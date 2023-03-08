import { createContext, useContext, useEffect, useState } from 'react';
import * as Location from 'expo-location';
import { Text, View } from 'react-native';

const LOCATION_PERMISSION_STATUS = {
  GRANTED: 'granted',
  DENIED: 'denied',
};

const DEFAULT_DELTA = {
  latitudeDelta: 0.0922,
  longitudeDelta: -0.0302,
};

const DEFAULT_LOCATION = {
  latitude: 43.6793398,
  longitude: -79.385167,
};

const LocationContext = createContext();

export function LocationProvider({ children }) {
  const [currentLocation, setCurrentLocation] = useState(DEFAULT_LOCATION);
  const [currentRegion, setCurrentRegion] = useState({
    ...DEFAULT_LOCATION,
    ...DEFAULT_DELTA,
  });

  const [searchedAddress, setSearchedAddress] = useState(null);

  const [mapStatus, setMapStatus] = useState('idle'); //idle, navigating, searching

  const [isNavigating, setIsNavigating] = useState(false);

  const {
    error,
    isErrorLoadingPermission,
    isSuccessLoadingPermission,
    permission,
    isLoadingPermission,
  } = useGetLocationPermission();

  const { prevLocation, location } = useSubscribeLocation({ permission });

  if (isLoadingPermission) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isErrorLoadingPermission || error) {
    console.log('LocationProvider:', 'Error loading permission');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <LocationContext.Provider
      value={{
        prevLocation,
        location,
        isNavigating,
        setIsNavigating,
        mapStatus,
        searchedAddress,
        setSearchedAddress,
        setMapStatus,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
}

export function useLocationContext() {
  return useContext(LocationContext);
}

function useGetLocationPermission() {
  const [isErrorLoadingPermission, setErrorLoadingPermission] = useState(false);
  const [error, setError] = useState(null);
  const [permission, setPermission] = useState(
    LOCATION_PERMISSION_STATUS.DENIED
  );
  const [isLoadingPermission, setLoadingPermission] = useState(true);

  const [isSuccessLoadingPermission, setSuccessLoadingPermission] =
    useState(false);

  async function getPermission() {
    try {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== LOCATION_PERMISSION_STATUS.GRANTED) {
        setPermission(LOCATION_PERMISSION_STATUS.DENIED);
        setError('Permission to access location was denied');
        alert(
          'Permission to access location was denied\n\nPlease enable location services in your device settings and try again.'
        );
        console.warn(
          'useGetLocationPermission:',
          'Permission to access location was not granted'
        );
        return;
      }

      setErrorLoadingPermission(false);
      setPermission(LOCATION_PERMISSION_STATUS.GRANTED);
      setSuccessLoadingPermission(true);
      console.log(
        'useGetLocationPermission:',
        'Permission to access location was granted'
      );
    } catch (error) {
      setError(error);
      alert(`Error: ${error}`);
      setErrorLoadingPermission(true);

      console.error(
        'useGetLocationPermission:',
        'Error retrieving location permission'
      );
      console.error(`Error: ${error}`);
      setSuccessLoadingPermission(false);
    } finally {
      setLoadingPermission(false);
    }
  }

  useEffect(() => {
    getPermission();
  }, []);

  return {
    isSuccessLoadingPermission,
    permission,
    error,
    isErrorLoadingPermission,
    isLoadingPermission,
  };
}

function useSubscribeLocation({ permission }) {
  const [prevLocation, setPrevLocation] = useState(null);
  const [location, setLocation] = useState(DEFAULT_LOCATION);

  async function subLocation() {
    return await Location.watchPositionAsync(
      {
        distanceInterval: 1,
      },
      (newLoc) => {
        setPrevLocation(location);
        setLocation({
          latitude: newLoc.coords.latitude,
          longitude: newLoc.coords.longitude,
          heading: newLoc.coords.heading,
          speed: newLoc.coords.speed,
        });
      }
    );
  }

  useEffect(() => {
    let unsubscribe = {
      remove: () => {},
    };

    async function getLocation() {
      if (permission === LOCATION_PERMISSION_STATUS.GRANTED) {
        unsubscribe = await subLocation();
      }
    }

    getLocation();

    return () => {
      unsubscribe.remove();
    };
  }, [permission]);

  return {
    prevLocation,
    location,
  };
}
