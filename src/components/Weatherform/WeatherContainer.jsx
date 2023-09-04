import React, { useContext, useEffect, useState } from 'react';
import WeatherPresent from './WeatherPresent';
import axios from '../../axios-weather';
import { WeatherContext } from '../../context/WeatherContext';

export default function WeatherContainer() {
  const city = 'лондон';

  const { weather, setWeather } = useContext(WeatherContext);

  const [geo, setGeo] = useState({});
  async function getGeo(nameciti) {
    try {
      const response = await axios.get(
        `/geo/1.0/direct?q=${nameciti}&limit=5&appid=569fa27185874110a0c5fe3405ae6614`,
      );
      console.log('--------->response', response);
      const data = await response.data;
      console.log('--------->data', data);
      if (data.length === 0) {
        setGeo({});
      } else {
        setGeo({
          lat: data[0].lat,
          lon: data[0].lon,
        });
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getWeather(lat, lon) {
    try {
      const response = await axios.get(
        `/data/2.5/weather?lat=${lat}&lon=${lon}&appid=569fa27185874110a0c5fe3405ae6614`,
      );
      console.log('--------->responswethere', response);
      const data = await response.data;
      console.log('--------->dataweather', data);
      setWeather(data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getGeo(city);
  }, []);

  useEffect(() => {
    if (geo.lat && geo.lon) getWeather(geo.lat, geo.lon);
  }, [geo]);

  if (weather.main !== undefined) {
    console.log('--------->temp', weather);
    return <WeatherPresent weather={weather} city={city} />;
  } else {
    return <WeatherPresent />;
  }
}
