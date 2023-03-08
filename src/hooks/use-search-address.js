import { useCallback } from 'react';
import { googleApi } from '../services/googleApi';
import { useDistanceTime } from './use-distance-time';

const baseUrl = 'https://maps.googleapis.com/maps/api/place/autocomplete/json';

const data = [
  {
    place_id: 'ChIJN1t_tDeuEmsRUsoyG83frY4',
    description: 'Toronto, ON, Canada',
    subLabel: 'Canada',
    label: 'Toronto, ON, Canada',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJO6Ud7VxJxkcRnwFms7x6xDc',
    description: 'New York, NY, USA',
    subLabel: 'United States',
    label: 'New York, NY, USA',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJrTLr-GyuEmsRBfy61i59si0',
    description: 'Vancouver, BC, Canada',
    subLabel: 'Canada',
    label: 'Vancouver, BC, Canada',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJW-T2Wt7GnA0RBwA-cATgJAg',
    description: 'London, UK',
    subLabel: 'United Kingdom',
    label: 'London, UK',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJVTPokywJLz4R1hTAvyO7V_0',
    description: 'Sydney NSW, Australia',
    subLabel: 'Australia',
    label: 'Sydney NSW, Australia',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJaXQRs6V0CDkRaNJgE_aUZoE',
    description: 'Tokyo, Japan',
    subLabel: 'Japan',
    label: 'Tokyo, Japan',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJQwYRV8cPj4ARjT2LsXoYH50',
    description: 'Moscow, Russia',
    subLabel: 'Russia',
    label: 'Moscow, Russia',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJ2QeBKFYayUcRDkFYJpM5Kv0',
    description: 'Melbourne VIC, Australia',
    subLabel: 'Australia',
    label: 'Melbourne VIC, Australia',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJLf6O3Dasdi3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJLf6Odwq3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJas12Lf6O3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChI12ewqJLf6O3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJLfdahs56f6O3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJL6234rtfe3f6O3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJdf1234fdLf6O3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJLf6f134O3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJLf6Obvsdbfgs3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJLliol;yuf6O3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
  {
    place_id: 'ChIJLfr23frd6O3Di3t4kRiUHm9XeTjR0',
    description: 'Paris, France',
    subLabel: 'France',
    label: 'Paris, France',
    type: 'address',
    distance: 0,
    duration: 0,
  },
];

export function useSearchAddress() {
  const { calculateDistanceTime } = useDistanceTime();

  // const searchAddress = useCallback(async () => {
  //   return Promise.resolve(data);
  // }, []);

  const searchAddress = useCallback(
    async (addressString) => {
      if (!addressString || addressString.length < 3)
        return Promise.resolve([]);

      const response = await googleApi
        .get(baseUrl, {
          params: {
            input: addressString,
            location: '43.70789, -79.3992897',
            radius: 50000,
          },
        })
        .catch((err) => {
          console.warn(
            'Error while searching address: \n',
            JSON.stringify(err.response, null, 2)
          );
        });

      const predictionsWithNoDistance = response.data.predictions.map(
        (prediction) => ({
          place_id: prediction.place_id,
          description: prediction.description,
          subLabel: prediction.structured_formatting.secondary_text,
          label: prediction.description,
          type: 'address',
        })
      );

      const predictionsWithDistance = await Promise.all(
        predictionsWithNoDistance.map(async (prediction) => {
          const { distance, duration } = await calculateDistanceTime({
            origin: '43.70789, -79.3992897',
            destination: 'place_id:' + prediction.place_id,
          });

          return {
            ...prediction,
            distance,
            duration,
          };
        })
      );

      return (
        predictionsWithDistance.sort((a, b) => a.distance > b.distance) || []
      );
    },
    [googleApi, baseUrl]
  );

  return {
    searchAddress,
  };
}
