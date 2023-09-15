import React, { useContext, useEffect, useState } from 'react';
import WeatherPresent from './WeatherPresent';
import { WeatherContext } from '../../context/WeatherContext';
import { getCurrentWeather, getWeathers } from '../../api/weatherApi';

export default function WeatherContainer() {
  const { weathers, setWeathers } = useContext(WeatherContext);

  const [dataWeather, setDataWeather] = useState({});

  const [geo, setGeo] = useState({});

  useEffect(() => {
    if (geo.lat && geo.lon) {
      console.log('--------->geo.lat, geo.lon', geo.lat, geo.lon);
      getWeathers(geo.lat, geo.lon, dataWeather, setDataWeather);
    } else {
      // setWeathers({ ...weathers, siteWeather: {} });
      // setWeathers({});
    }
  }, [geo]);

  console.log('!!---------> dataWeather', dataWeather);
  useEffect(() => {
    setWeathers({ ...weathers, siteWeather: dataWeather });
    console.log('!!weathers', weathers);
  }, [dataWeather]);

  return <WeatherPresent geo={geo} setGeo={setGeo} />;
}
