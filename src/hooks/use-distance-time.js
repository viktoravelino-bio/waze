import { useCallback } from 'react';
import { googleApi } from '../services/googleApi';

const distanceUrl = 'https://maps.googleapis.com/maps/api/distancematrix/json';

export function useDistanceTime() {
  const calculateDistanceTime = useCallback(
    async ({ origin, destination }) => {
      if (!origin || !destination) return Promise.resolve([]);

      const response = await googleApi
        .get(distanceUrl, {
          params: {
            origins: origin,
            destinations: destination,
          },
        })
        .catch((err) => {
          console.warn(
            'Error while fetching distance: \n',
            JSON.stringify(err.response.data, null, 2)
          );
        });

      const info = response.data.rows[0].elements[0];

      return {
        distance: info.distance.value,
        duration: info.duration.value,
      };
    },
    [googleApi, distanceUrl]
  );

  return { calculateDistanceTime };
}
