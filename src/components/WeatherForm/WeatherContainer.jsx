import React, { useContext, useEffect, useState } from 'react';
import WeatherPresent from './WeatherPresent';
import { WeatherContext } from '../../context/WeatherContext';
import { getGeo, getWeather } from '../../api/weatherApi';

export default function WeatherContainer() {
  const [city, setCity] = useState();
  console.log('--------->city', city);

  const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      const timer = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      return () => {
        clearTimeout(timer);
      };
    }, [value, delay]);

    return debouncedValue;
  };

  const { weather, setWeather } = useContext(WeatherContext);

  const [geo, setGeo] = useState({});

  useEffect(() => {
    getGeo(city, setGeo, setCity);
  }, [city]);

  useEffect(() => {
    if (geo.lat && geo.lon) {
      console.log('--------->geo.lat, geo.lon', geo.lat, geo.lon);
      getWeather(geo.lat, geo.lon, setWeather);
    } else {
      setWeather({});
    }
  }, [geo]);
  console.log('--------->weather', weather);
  return (
    <WeatherPresent weathers={weather} city={city} setCity={setCity} useDebounce={useDebounce} />
  );
}
