import { useEffect, useState } from 'react';

export default function usePosition() {
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [error, setError] = useState(null);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        (err) => {
          setError(err);
        },
      );
    } else {
      setError(new Error('Геолокация не поддерживается в вашем браузере.'));
    }
  }, []);

  return { coordinates, error };
}
