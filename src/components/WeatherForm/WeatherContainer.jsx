import React, { useContext, useEffect, useState } from 'react';
import WeatherPresent from './WeatherPresent';
import { WeatherContext } from '../../context/WeatherContext';
import { getCurrentWeather, getWeathers } from '../../api/weatherApi';

export default function WeatherContainer() {
  const { weathers, setWeathers } = useContext(WeatherContext);

  const [geo, setGeo] = useState({});

  useEffect(() => {
    if (geo.lat && geo.lon) {
      console.log('--------->geo.lat, geo.lon', geo.lat, geo.lon);
      getWeathers(geo.lat, geo.lon, weathers, setWeathers);
    } else {
      setWeathers({});
    }
  }, [geo]);

  console.log('1234----->weather', weathers.current);
  console.log('12----->weather', weathers.forecast);
  return <WeatherPresent weathers={weathers} setWeathers={setWeathers} geo={geo} setGeo={setGeo} />;
}
