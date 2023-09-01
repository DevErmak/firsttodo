import React, { useEffect, useState } from 'react';
import { WeatherContext } from '../../context/WeatherContext';
import Weather from './Weather';

import axios from '../../axios-weather';

// async function getWeather() {
//   const url = '/geo/1.0/direct?q=London&limit=5&appid=569fa27185874110a0c5fe3405ae6614';
//   try {
//     const response = await axios.get(url);
//     return response;
//   } catch (error) {
//     console.error(error);
//   }
// }

export default function Weatherform() {
  const [weather, setWeather] = useState();
  useEffect(() => {
    async function getWeather() {
      const url = '/geo/1.0/direct?q=London&limit=5&appid=569fa27185874110a0c5fe3405ae6614';
      try {
        const response = await axios.get(url);
        setWeather(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getWeather();
  }, []);

  useEffect(() => {
    console.log('--------->weather', weather);
  }, [weather]);

  //   axios.get(url).then((resp) => {
  //     const allPersons = resp.data;
  //     console.log('--------->resp', resp);
  //     setWeather(resp);
  //   });
  //   console.log('asd');
  //   console.log(weather);

  return (
    <>
      <WeatherContext.Provider value={{ weather, setWeather }}>
        <Weather />
      </WeatherContext.Provider>
    </>
  );
}
