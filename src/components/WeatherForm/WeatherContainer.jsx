import React, { useContext, useEffect, useState } from 'react';
import WeatherPresent from './WeatherPresent';
import { WeatherContext } from '../../context/WeatherContext';
import { getGeo, getWeather } from '../../api/weatherApi';

export default function WeatherContainer() {
  const city = 'лондон';

  const { weather, setWeather } = useContext(WeatherContext);

  const [geo, setGeo] = useState({});

  useEffect(() => {
    getGeo(city, setGeo);
  }, []);

  useEffect(() => {
    if (geo.lat && geo.lon) {
      console.log('--------->geo.lat, geo.lon', geo.lat, geo.lon);
      getWeather(geo.lat, geo.lon, setWeather);
    }
  }, [geo]);

  console.log('--------->weather', weather);

  if (weather[0] !== undefined) {
    console.log('--------->temp', weather[0].main);
    return <WeatherPresent weather={weather[0]} city={city} />;
  } else {
    // return <WeatherPresent />;
  }
}
