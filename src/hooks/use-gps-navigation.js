import { useCallback, useState } from 'react';
import { useLocationContext } from '../context/locationContext';

const CAMERA_ANGLE = 120;

export function useGPSNavigation({ mapRef }) {
  const { prevLocation, location: currentLocation } = useLocationContext();
  const [isNavigating, setIsNavigating] = useState(false);

  function getRotation(prevPos, curPos) {
    if (!prevPos) {
      return 0;
    }

    const xDiff = curPos.latitude - prevPos.latitude;
    const yDiff = curPos.longitude - prevPos.longitude;
    return (Math.atan2(yDiff, xDiff) * 180.0) / Math.PI;
  }

  const updateMap = useCallback(() => {
    const curRot = getRotation(prevLocation, currentLocation);

    mapRef.current.animateCamera({
      heading: curRot,
      center: currentLocation,
      pitch: CAMERA_ANGLE,
    });
  }, []);

  return {};
}
