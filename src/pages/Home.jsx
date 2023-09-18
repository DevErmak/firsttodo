import React, { useContext } from 'react';
import HomeForm from '../components/Home/HomeForm';
import { WeatherContext } from '../context/WeatherContext';

export default function Home() {
  const { weathers, setWeathers } = useContext(WeatherContext);
  return <HomeForm />;
}
