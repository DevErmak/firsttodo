import React, { useContext } from 'react';
import { WeatherContext } from '../../context/WeatherContext';

export default function Weather() {
  const { weather } = useContext(WeatherContext);
  console.log('--------->weather', weather);
  console.log(weather);
  return <div>{String(weather)}</div>;
}
